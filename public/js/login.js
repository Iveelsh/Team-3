firebase.auth().onAuthStateChanged((user) => {
    console.log("nevtersn")
    if (user) {
        let uid = user.uid;
        db.collection("users").doc(uid).get().then((doc) => {
            let data = doc.data();
            if (!data.groupId) {
                window.location.href = "groupAdd.html"
            } else {
                if (data.role === "admin") {
                    window.location.href = "wishlist-Iveel.html"
                } else if (data.role == "kid") {
                    window.location.href = "wishlist-Iveel-kid.html"
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