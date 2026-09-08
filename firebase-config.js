// ─────────────────────────────────────────────────────────────────────────
// Firebase config for the LIVE class polls in this deck.
//
// Until you paste real values below, polls run in LOCAL mode (they tally only
// within a single browser / its tabs) — great for testing, but NOT shared
// across students' computers. Fill this in to enable real cross-device polling.
//
// One-time setup (see POLL-SETUP.md in _deck-builder for the full walkthrough):
//   1. Go to https://console.firebase.google.com  →  Add project (free).
//   2. In the project, click the </> "Web" icon to register a web app.
//   3. Firebase shows you a `firebaseConfig = { ... }` object — copy those
//      values into the object below (replace every YOUR_… placeholder).
//   4. Left menu → Build → Firestore Database → Create database.
//   5. Firestore → Rules tab → paste the rules from POLL-SETUP.md → Publish.
//
// The values below are NOT secret (they ship in every web app); access is
// controlled by the Firestore security rules, not by hiding this file.
// ─────────────────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyARGzK81KsWjliHLPFgf8wKDuizhiLs-Lc",
  authDomain: "sos-110.firebaseapp.com",
  projectId: "sos-110",
  storageBucket: "sos-110.firebasestorage.app",
  messagingSenderId: "527114011645",
  appId: "1:527114011645:web:6100a50465562924a24f94",
  measurementId: "G-0G7T944VXS"
};

// ─────────────────────────────────────────────────────────────────────────
// Where the Evolve exit survey emails its summary.
//
// This has nothing to do with Firebase. Firebase only holds the answers while
// the game is running; the email is sent by a Google Apps Script web app.
//
// One-time setup (the script itself is _deck-builder/survey-mail.gs):
//   1. Go to https://script.new  →  paste survey-mail.gs  →  Save.
//   2. Deploy → New deployment → Web app
//        Execute as:     Me
//        Who has access: Anyone      ← NOT "Anyone with a Google Account",
//                                       which bounces callers to ASU SSO.
//   3. Copy the /exec URL it gives you and paste it below, then uncomment.
//
// Leave it commented out and the "Email me the results" button still works —
// it copies the full summary to your clipboard and opens a mail draft instead.
// ─────────────────────────────────────────────────────────────────────────
window.SURVEY_MAIL_URL = "https://script.google.com/macros/s/AKfycbyrRNrQjbAiYugFw131rfJMIt2E2fneUnx9ryatdU98DMdyC4NkZI2LP8dnqQK3E2LZ/exec";
