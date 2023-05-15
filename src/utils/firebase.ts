// import 'firebase/compat/auth';

// import firebase from 'firebase/compat/app';

// const app = firebase.initializeApp({
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// });

// export const auth = app.auth();
// export default app;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: process.env.API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAkzRC8HIbe_ax1cWpHy6o37C-q3Ty2bdg',
  authDomain: 'next-chatify.firebaseapp.com',
  databaseURL: 'https://next-chatify-default-rtdb.firebaseio.com',
  projectId: 'next-chatify',
  storageBucket: 'next-chatify.appspot.com',
  messagingSenderId: '784645097524',
  appId: '1:784645097524:web:c7f09b47a9c4916ff82261',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase();

export { auth, database, storage };
export default app;
