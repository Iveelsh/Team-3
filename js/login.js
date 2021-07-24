loginWithEmailAndPassword = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
}