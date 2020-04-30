import firebase from 'firebase/app'
import 'firebase/auth'

let firebaseClient

export function useFirebase() {
  if (!firebaseClient) {
    const { VUE_APP_FIREBASE_PROJECT_ID: projectId } = process.env
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: `${projectId}.firebaseapp.com`,
      databaseURL: `https://${projectId}.firebaseio.com`,
      projectId,
      storageBucket: `${projectId}.appspot.com`,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    }
    firebase.initializeApp(firebaseConfig)
    firebaseClient = firebase
  }

  return firebaseClient
}
