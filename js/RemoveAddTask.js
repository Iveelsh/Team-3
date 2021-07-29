const AddTask = () => {
    let TaskName = document.getElementById("TaskName").value;
    let TaskDes = document.getElementById("TaskDes").value;
    let TaskPoint = document.getElementById("TaskPoint").value;
    let list = document.getElementById("list");
    db.collection("tasks").add({
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


    document.getElementById("TaskName").value = "";
    document.getElementById("TaskDes").value = "";
    document.getElementById("TaskPoint").value = "";

}



db.collection("tasks").onSnapshot((querySnapshot) => {
    list.innerHTML = "";
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots
        let data = doc.data()
        console.log(data);
        let li = document.createElement("li");
        let t = document.createElement('h1');
        let s = document.createElement("h2");
        let p = document.createElement("h3");
        let remove = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");

        remove.className = "close";
        remove.appendChild(txt);


        remove.onclick = (() => {
            console.log(doc.id)
            db.collection("tasks").doc(doc.id).delete()
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






//taskDescription, taskName, taskPoint, -input
// createdAt, assignedUser: "", status: todo




