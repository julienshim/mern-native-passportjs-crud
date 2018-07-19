import express from 'express';
import passport from 'passport';

const router = express.Router();

// Auth Logout
router.get('/logout', (req, res) => {
  //handle with passport
  req.logout();
  res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user));
  console.log('User is logged out');
});

// Set up Facebook auth routes
router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/facebook' }),
  // Redirect user back to the mobile router using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

// Set up Google auth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/google' }),
  // Redirect user back to the mobile router using Linking with a custom protocol OAuthLogin
  (req, res) => res.redirect('OAuthLogin://login?user=' + JSON.stringify(req.user)));

module.exports = router;