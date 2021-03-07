import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCd2jE8oKD15UO7ejBK2BDigv47l-Gr3G0",
  authDomain: "colab-sfhacks-firebase.firebaseapp.com",
  projectId: "colab-sfhacks-firebase",
  storageBucket: "colab-sfhacks-firebase.appspot.com",
  messagingSenderId: "30679956816",
  appId: "1:30679956816:web:90f249ab9978c04d2b4055",
  measurementId: "G-WKQ0BG5M8B"
})

var auth = firebase.auth()
var firestore = firebase.firestore()


export default {
  firebase, firestore, auth
}