import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3cHuexQe2tVRo7-qoOQzv409jeg1TuaA",
  authDomain: "url-shortener-demo-6f0a4.firebaseapp.com",
  projectId: "url-shortener-demo-6f0a4",
  storageBucket: "url-shortener-demo-6f0a4.appspot.com",
  messagingSenderId: "410997107813",
  appId: "1:410997107813:web:33cc42f5754b224ffbea8c",
  measurementId: "G-XD5XPRQW7V"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
