import express from 'express';
import passport from 'passport';

const router = express.Router();

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