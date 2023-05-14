'use client';

/* eslint-disable react/jsx-no-constructed-context-values */
// import {
//     GithubAuthProvider,
//     GoogleAuthProvider,
//     signInWithPopup,
// } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

import { auth } from '@/utils/firebase';

interface IAuthProviderProps {
  children: JSX.Element;
}

const AuthContext = React.createContext({});

export function useAuth(): any {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: IAuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  function signup(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //   function googleSignin(): Promise<any> {
  //     const provider = new GoogleAuthProvider();
  //     return signInWithPopup(auth, provider);
  //   }

  //   function githubSignin(): Promise<any> {
  //     const provider = new GithubAuthProvider();
  //     return signInWithPopup(auth, provider);
  //   }

  function login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(): Promise<any> {
    return signOut(auth);
  }

  function resetPassword(email: string): Promise<any> {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email: string): Promise<any> {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password: string): Promise<any> {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
