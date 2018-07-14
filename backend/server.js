import express from 'express';
import passportSetup from './config/passport-setup';
import fs from 'fs';
import https from 'https';
import path from 'path';
import passport from 'passport';

// Initialize http server
const app = express();
const PORT = 3000;

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  // Redirect user back to the mobile app using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Launch the server on the port 3000
// const server = app.listen(3000, () => {
//   const { address, port } = server.address();
//   console.log(`Listening at http://${address}:${port}`);
// });

const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', './server-crt.pem')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', './server-key.pem')),
  ca: fs.readFileSync(path.join(__dirname, 'ssl', './ca-crt.pem')),
}

https.createServer(httpsOptions, app)
  .listen(PORT, function() {
    console.log(`App is listening at https://localhost:${PORT}`);
  });