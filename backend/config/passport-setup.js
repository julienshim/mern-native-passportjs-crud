import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';
// Import Facebook and Google OAuth apps config options for Facebook/Google strategy
import { facebook, google } from './config';
import User from '../models/User'

// Serialize user into the sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from the sessions
passport.deserializeUser((user, done) => done(null, user));

// Transform Google profile object into unified user object
const transformFacebookProfile = (profile) => ({
    // integrate email later on
    email: profile.email,
    facebookId: profile.id, //change to fb id later on
    firstName: profile.first_name,
    lastName: profile.last_name,
    name: profile.name,
    avatar: profile.picture.data.url,
});
  
// Transform Google profile object into unified user object
const transformGoogleProfile = (profile) => ({
    // integrate email later on
    email: profile.emails[0].value,
    googleId: profile.id,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    name: profile.displayName,
    avatar: profile.image.url,
});

passport.use(
    new FacebookStrategy(facebook, (accessToken, refreshToken, profile, done) => {
        console.log('Facebook Passport callback function fired');
        // console.log(profile._json);
        User.findOne({email: profile._json.email}).then((currentUser) => {
            if(currentUser) {
                console.log(`User is ${currentUser}`);
                done(null, currentUser);
            } else {
                new User (transformFacebookProfile(profile._json)).save().then((newUser) => {
                    console.log(`New user created: ${newUser}`);
                    done(null, newUser);
                })
            }
        })
    })
)

passport.use (
    new GoogleStrategy(google, (accessToken, refreshToken, profile, done) => {
        console.log('Google Passport callback function fired');
        // console.log(profile._json);
        User.findOne({email: profile.emails[0].value }).then((currentUser) => {
            if(currentUser) {
                console.log(`User is ${currentUser}`);
                done(null, currentUser);
            } else {
                new User (transformGoogleProfile(profile._json)).save().then((newUser) => {
                    console.log(`New user created: ${newUser}`);
                    done(null, newUser);
                })
            }
        })
    })
)