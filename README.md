[README.txt](https://github.com/user-attachments/files/34041156/README.txt)
SPECTATOR - NETLIFY SETUP
=========================

Live scores need a small free database so every phone sees the same game.
This site uses Firebase Firestore (free tier is plenty).

1. Go to https://console.firebase.google.com  ->  Add project (any name).
2. Build -> Firestore Database -> Create database -> start in production mode.
3. Firestore -> Rules tab -> paste this and Publish:

   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /games/{id} { allow read, write: if true; }
       match /saves/{id} { allow read, write: if true; }
     }
   }

4. Project settings (gear icon) -> Your apps -> Web (</>) -> Register app.
   Copy the firebaseConfig values into config.js (replace the YOUR_... values).
5. In config.js change organizerPin to your own PIN.
6. Netlify: Sites -> Add new site -> Deploy manually -> drag the unzipped folder
   (or this zip) onto the page.
7. On the phone that enters plays, open once:
      https://YOUR-SITE.netlify.app/?org=YOURPIN
   That phone becomes the organizer. Everyone else sees the spectator view.
   Share game links as  https://YOUR-SITE.netlify.app/#123456  (the 6-digit game code).

Notes
- The PIN only hides the organizer view; the rules above let anyone with the
  link read/write game data. Fine for a school game, not for sensitive data.
- Roster photo reading (AI) only works inside Claude, so on Netlify type or
  paste roster names instead.
- If config.js still has the YOUR_... values, the site runs in local-only mode
  (works on one phone, no live sharing).
