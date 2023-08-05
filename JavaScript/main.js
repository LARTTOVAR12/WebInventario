import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"

import { auth } from './firebase.js'

import './signupForm.js';
import './registro.js';

onAuthStateChanged(auth, async (user)=>{
    console.log(user);
})