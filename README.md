# untitledProject

**Description**

This untitledProject is an on-going proof of concept. Currently in alpha.

**Motivation**

There relationship between React Native and traditional servers is poorly documented. Wanted to created boilerplate code for everyone interested in developing in React Native (not create-react-native app, not EXPOnent).

**Backend Setup**

1) Running `npm install` in backend will install the following npm packages:

    *devDependencies*
    * npm install babel-cli ^6.26.0
    * npm install babel-preset-env ^1.7.0
    * npm install nodemon ^1.17.5

    *dependencies*
    * npm install cookie-session ^2.0.0-beta.3"
    * npm install express ^2.0.0-beta.3"
    * npm install passport ^0.4.0
    * npm install passport-facebook ^2.1.1
    * npm install passport-google-oauth20 ^1.0.0

2) Create and configure a `backend > config.js` file with your Facebook and Google OAuth IDs and Secrets as follows:

``` config.js
export const facebook = {
  clientID: 'INSERT-CLIENT-ID-HERE',
  clientSecret: 'INSERT-CLIENT-SECRET-HERE',
  callbackURL: 'INSERT-CALLBACK-URL-HERE',
  profileFields: ['id', 'name', 'displayName', 'picture', 'email']
  // See Facebook Login Changelog for details: https://developers.facebook.com/docs/facebook-login/changelog
};

export const google = {
  clientID: 'INSERT-CLIENT-ID-HERE',
  clientSecret: 'INSERT-CLIENT-SECRET-HERE',
  callbackURL: 'INSERT-CALLBACK-URL-HERE'
};
```

3) `npm start` to launch the backend server

**Client Setup**

1) Running `npm install` in the root folder will install the following npm packages:

    *devDependencies*
    * npm install babel-jest ^23.4.0
    * npm install babel-preset-react-native ^5
    * npm install jest ^23.4.0
    * npm react-test-renderer ^16.4.1

    *dependencies*
    * npm install react ^16.4.1
    * npm install react-native ^0.56.0
    * npm install react-native-safari-view ^2.1.0
    * npm install react-native-vector-icons ^4.6.0

[More to come throughout during development]




