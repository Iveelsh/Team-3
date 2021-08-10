firebase.auth().onAuthStateChanged((user) => {
    console.log("nevtersn")
    if (user) {
        let uid = user.uid;
        db.collection("users").doc(uid).get().then((doc) => {
            let data = doc.data();
            if (!data.groupId) {
                window.location.href = "../html/groupAdd.html"
            } else {
                window.location.href = "../html/sidebar.html"
            }
        })
    } else {
        console.log("signed out")
    }
});

const loginWithEmailAndPassword = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;

        })
}