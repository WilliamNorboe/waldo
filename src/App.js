import './App.css';


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { useState, useEffect, useRef } from "react";

firebase.initializeApp({
    apiKey: "AIzaSyAtXp70M7HbTpw6173qvmgqE8TzcfxI74s",
  authDomain: "waldo-b8526.firebaseapp.com",
  projectId: "waldo-b8526",
  storageBucket: "waldo-b8526.appspot.com",
  messagingSenderId: "516014606353",
  appId: "1:516014606353:web:9eb824d5e224cacbed49b0",
  measurementId: "G-YQ984NTG2N"
}
)

const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
