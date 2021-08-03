let user = firebase.auth().currentUser;
if (user) {
    let uid = user.uid;
    db.collection("users").doc(uid).get().then((doc) => {
        let data = doc.data();
        if (!data.groupId) {
            window.location.href = "../html/groupAdd.html"
        } else {
            window.location.href = "../html/groupHomepage.html"
        }
    })
}

const signUpWithEmailAndPassword = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(userCredential) => {
            // Signed in 
            let user = userCredential.user;
            let uid = user.uid;
            console.log(uid)
            await db.collection("users").doc(uid).set({
                name: name,
                mail: email,
                groupId: null,
            });

            window.location.href = "../html/groupAdd.html"
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