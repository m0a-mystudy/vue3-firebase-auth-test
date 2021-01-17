import { createApp } from 'vue'
import App from './App.vue'

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsPYecq40sgCKPqg5eeIw9kSVlwN3P-n4",
    authDomain: "vue3-firebase-auth-test.firebaseapp.com",
    projectId: "vue3-firebase-auth-test",
    storageBucket: "vue3-firebase-auth-test.appspot.com",
    messagingSenderId: "635066009075",
    appId: "1:635066009075:web:9fa8fd7d29a38c8ef63e86",
    measurementId: "G-KFFLZTRQT9"
  };

const app = createApp(App);
firebase.initializeApp(firebaseConfig);

app.mount('#app')
