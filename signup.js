  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
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


 var firstName = document.getElementById("firstName");
 var lastName = document.getElementById("lastName");
 var email = document.getElementById("email");
 var password = document.getElementById("password");


 var model = {};

 window.signUp = function (e) {
   e.preventDefault();
    model = {
     firstName: firstName.value,
     lastName: lastName.value,
     email: email.value,
     password: password.value,
    };
   
    firstName.value ="";
    lastName.value ="";
    email.value ="";
    password.value ="";
   
    createUserWithEmailAndPassword(auth, model.email, model.password)
    .then(function(success){
        console.log(success.user.uid)
        window.location.replace('login.html');
      })
      .catch(function(err){
        console.log(err)
      });
      console.log(model);
} 

