const addWish = async() => {
    let wishName = document.getElementById("addedwish").value;
    let userName;
    console.log(user)
    if (user) {
        await db.collection('users').doc(user.uid).get().then((doc) => {
            userName = doc.data().name
        })
        db.collection(`groups/${groupId}/wishlist`).doc().set({
                userName: userName,
                wish: wishName,
                CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                let wishmodal = document.getElementById("wishaddmodal-full");
                wishmodal.style.display = "none";
                document.getElementById("addedwish").value = "";
                console.log("Wish successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    } else {
        window.alert("Please login");
        window.location.href = "index.html"
    }
}
const addPoint = () => {
    let wishName = document.getElementById("wishDesc").value;
    let addedPoint = document.getElementById("addedPoint").value;
    if (user && addedPoint) {
        db.collection(`groups/${groupId}/tasks`).doc().update({
                point: addedPoint,
            })
            .then(() => {
                let wishModal = document.getElementById("wishinfomodal");
                let wishPoint = document.getElementById("wishPoint");
                let wishDesc = document.getElementById("wishDesc");
                wishModal.style.display = "none";
                wishPoint.innerHTML = ''
                wishDesc.innerHTML = ''
                console.log("Added point successfully")
            })
            .catch((error) => {
                console.error("Error adding point ", error);
            });
    } else {
        window.alert("Please login");
        window.location.href = "index.html"
    }
}
const logOut = () => {
    firebase.auth().signOut().then(() => {
        console.log("Succesfully logged out")
        window.location.href = "index.html"
    }).catch((error) => {
        console.log(error)
    });
}

const displayProfileDrop = () => {
    let profileDrop = document.getElementsByClassName("profile-dropdown")[0];
    if (profileDrop.style.visibility == "hidden") {
        profileDrop.style.visibility = "visible";
    } else {
        profileDrop.style.visibility = "hidden";
    }
    // profileDrop.addEventListener("mouseout", () => {
    //     profileDrop.style.visibility = "hidden";

    // })
}