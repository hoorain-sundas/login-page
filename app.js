 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
 import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyANK3E2RGYTIeGvy6V--K89NW1M4cd-nDE",
   authDomain: "login-page-af48b.firebaseapp.com",
   projectId: "login-page-af48b",
   storageBucket: "login-page-af48b.appspot.com",
   messagingSenderId: "746798125284",
   appId: "1:746798125284:web:7ce4ca0e377613724adcf1",
   measurementId: "G-QC8CG097Q6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 
 const auth = getAuth();

var user = document.getElementById("u123");
var inp = document.getElementById("inp");
var parent = document.getElementById("parent")

var arr = [];
var model ;

 window.addTask = function (e){
    model = {
        task: inp.value,
        date: `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()} T ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        userName: "xyz",
    }
    arr.push(model);
    inp.value = "";
    renderUI();
    console.log(arr);
}

 function renderUI(){
    parent.innerHTML = "";
    for (var i=0; i<arr.length; i++){
        parent.innerHTML += `<li> ${arr[i].task} <br> <span class='label'>${arr[i].date} </span> </li>`;
    }
}
 window.logout = function(){
   signOut(auth)
    .then(function() {
         // Sign-out successful.
        console.log("Sign-out successful")
     }).catch(function(err) {
       // An error happened.
       console.log(err)
     });
}

function checkAuthentication() { 
 onAuthStateChanged(auth, function (user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
    window.location.href = "login.html";
  }
});
}
checkAuthentication();