import App from "App";
import firebase from 'firebase';
import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles/global";
import reportWebVitals from "./reportWebVitals";


// Configure Firebase.
const config = {
  apiKey: 'AIzaSyDgkqZRz3fnRaUJAXg_GG_0989cJisa23g',
  authDomain: 'myproject-1234.firebaseapp.com',
  
  // ...
};
firebase.initializeApp(config);


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
