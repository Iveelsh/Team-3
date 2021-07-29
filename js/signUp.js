const signUpWithEmailAndPassword = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            let uid = user.uid;
            db.collection("users").doc(uid).set({
                name: name,
                mail: email,
            });
            console.log("success")
                // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
            console.log("Error")
        });

}