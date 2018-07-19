# untitledProject

**Description**

This untitledProject is an on-going proof of concept. Currently in alpha.

**Motivation**

There relationship between React Native and traditional servers is poorly documented. Wanted to created boilerplate code for everyone interested in developing in React Native (not create-react-native app, not EXPOnent).

**Requirements**

  React Native CLI, which allows you to create React Native projects via `react-native init <project name>` and linking via `react-native link`.
  * npm install -g react-native-cli

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

export const mongodb = {
  dbURI: 'mongodb://localhost/untitledProject'
};
```

3)  Server SSL due to Facebook OAuth requirements.

```


```

4) `npm start` to launch the backend server

[More to come throughout during development]




