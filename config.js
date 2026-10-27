// 1) Paste your Firebase web app config below (see README.txt).
// 2) Change organizerPin. Open the site once at  https://YOUR-SITE.netlify.app/?org=YOURPIN
//    on the phone that will enter plays. Everyone else just sees the spectator view.
window.APP_CONFIG = {
  organizerPin: "1234",
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
