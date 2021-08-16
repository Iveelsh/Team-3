let user;
let groupId;

const AddTask = () => {
    let TaskName = document.getElementById("TaskName").value;
    let TaskDes = document.getElementById("TaskDes").value;
    let TaskPoint = document.getElementById("TaskPoint").value;
    if (user) {
        db.collection(`groups/${groupId}/tasks`).doc().set({
                TaskName: TaskName,
                TaskDes: TaskDes,
                TaskPoint: TaskPoint,
                CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                AssignedUser: '',
                Status: '',
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    } else {
        window.alert("Please login");
        window.location.href = "landingPage.html"
    }
}


firebase.auth().onAuthStateChanged((u) => {
    user = u
    if (user) {
        let userUid = user.uid
        let userGroup = db.collection('users').doc(userUid);
        userGroup.get().then((doc) => {
                groupId = doc.data().groupId;
                db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc').onSnapshot((querySnapshot) => {
                    list.innerHTML = "";
                    querySnapshot.forEach((doc) => {
                        let data = doc.data()
                        let li = document.createElement("li");
                        let t = document.createElement('h1');
                        let s = document.createElement("h2");
                        let p = document.createElement("h3");
                        let remove = document.createElement("SPAN");
                        let txt = document.createTextNode("\u00D7");

                        remove.className = "close";
                        remove.appendChild(txt);


                        remove.onclick = (() => {
                            db.doc(`groups/${groupId}/tasks/${doc.id}`).delete().catch((err) => console.log(err))
                        })
                        t.innerHTML = data.TaskName
                        s.innerHTML = data.TaskDes
                        p.innerHTML = data.TaskPoint



                        li.appendChild(t);
                        li.appendChild(s);
                        li.appendChild(p);
                        li.appendChild(remove);

                        list.appendChild(li);


                    });
                });
                document.getElementById("TaskName").value = "";
                document.getElementById("TaskDes").value = "";
                document.getElementById("TaskPoint").value = "";
            })
            .then(() => {
                console.log("Document successfully showed!");
            })
            .catch((error) => {
                console.error("Error writing documenton screen: ", error);
            });

    } else {
        console.log("signed out")
    }
});