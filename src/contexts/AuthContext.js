import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../firebase';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {

  const [currentUser, setCurrentUser] = useState()

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
  }

  function signIn() {
    var provider = new auth.GoogleAuthProvider();
    auth()
      .signInWithPopup(provider)
      .then((result) => {
        // /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      });
  }



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser, 
    signup, 
    signIn
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
