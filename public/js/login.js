firebase.auth().onAuthStateChanged((user) => {
    console.log("nevtersn")
    if (user) {
        let uid = user.uid;
        db.collection("users").doc(uid).get().then((doc) => {
            let data = doc.data();
            if (!data.groupId) {
                window.location.href = "groupCreateJoin.html"
            } else {
                if (data.role === "admin") {
                    window.location.href = "home-parents.html"
                } else if (data.role == "kid") {
                    window.location.href = "home-kids.html"
                } else {
                    console.log("error")
                }

            }
        })
    }
});

const loginWithEmailAndPassword = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            console.log(user)

            // if(user) {
            //     let uid = user.uid;
            //     db.collection("users").doc(uid).get().then((doc) => {
            //         let data = doc.data();
            //         if()
            //     })
            // }

        })
}
const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}