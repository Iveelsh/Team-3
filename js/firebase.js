src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"

  var firebaseConfig = {
    apiKey: "AIzaSyCiPshdY6L_mTAmKc8DjmN8QlgfQAePAQE",
    authDomain: "test-2c05d.firebaseapp.com",
    projectId: "test-2c05d",
    storageBucket: "test-2c05d.appspot.com",
    messagingSenderId: "1020740424282",
    appId: "1:1020740424282:web:04bb479db652eafe343e63"
  };

  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore()