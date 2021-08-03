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
                groupId: null,
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

firebase.auth().onAuthStateChanged((user) => {
    console.log("nevtersn")
    if (user) {
        window.location.href = "groupAdd.html"
        let uid = user.uid;
        db.collection("users").doc(uid).get().then((doc) => {
            let data = doc.data();
            if (!data.groupId) {
                window.location.href = "../html/groupAdd.html"
            } else {
                window.location.href = "../html/groupHomepage.html"
            }
        })


        // ...
    } else {
        // User is signed out
        // ...
    }
});