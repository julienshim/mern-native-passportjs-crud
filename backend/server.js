import express from 'express';
import authRoutes from './routes/auth-routes'
import passportSetup from './config/passport-setup';
import { mongodb } from './config/config';
import mongoose from 'mongoose';
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

//Connect to MongoDB
mongoose.connect(mongodb.dbURI, () => {
  console.log('Connected to MongoDB');
});

//Set up routes
app.use('/auth', authRoutes);

//Since Facebook OAuth requires SSL, we must creat cert, key, and ca PEM/CRT files to secure localhost
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', './server-crt.pem')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', './server-key.pem')),
  ca: fs.readFileSync(path.join(__dirname, 'ssl', './ca-crt.pem')),
}

//Launch secure server on PORT 3000
https.createServer(httpsOptions, app)
  .listen(PORT, function() {
    console.log(`App is listening at https://localhost:${PORT}`);
  });