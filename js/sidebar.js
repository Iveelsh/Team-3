let taskb = document.getElementById("taskb");
let wishb = document.getElementById("wishb");
let groupb = document.getElementById("groupb");
let messb = document.getElementById("messb");
let task = document.getElementById("task");
let wishlist = document.getElementById("wishlist");
let groupinfo = document.getElementById("groupinfo");
let message = document.getElementById("message");
const displaytask = () => {
    task.classList.remove("none");
    wishlist.classList.add("none");
    groupinfo.classList.add("none");
    message.classList.add("none");
    taskb.classList.add("black");
    wishb.classList.remove("black");
    groupb.classList.remove("black");
    messb.classList.remove("black")
}
const displaywishlist = () => {
    task.classList.add("none");
    wishlist.classList.remove("none");
    groupinfo.classList.add("none");
    message.classList.add("none");
    taskb.classList.remove("black");
    wishb.classList.add("black");
    groupb.classList.remove("black");
    messb.classList.remove("black")
}
const displaygroupinfo = () => {
    task.classList.add("none");
    wishlist.classList.add("none");
    groupinfo.classList.remove("none");
    message.classList.add("none");
    taskb.classList.remove("black");
    wishb.classList.remove("black");
    groupb.classList.add("black");
    messb.classList.remove("black")
}
const displaymessage = () => {
    task.classList.add("none");
    wishlist.classList.add("none");
    groupinfo.classList.add("none");
    message.classList.remove("none");
    taskb.classList.remove("black");
    wishb.classList.remove("black");
    groupb.classList.remove("black");
    messb.classList.add("black")
}
const modal = () => {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}
window.onclick = (event) => {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const addmodal = () => {
    let addmodal = document.getElementById("modal");
    addmodal.style.display = "block";
}
window.onclick = (event) => {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
const taskmodal = () => {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "block"
}
window.onclick = (event) => {
    let taskmodal = document.getElementById("taskmodal");
    if (event.target == taskmodal) {
        taskmodal.style.display = "none";
    }
}
const remove = () => {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "none";
}


const renderTasks = (docs) => {
    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    docs.forEach((doc) => {
        console.log(doc.data());
        let data = doc.data();
        let taskpointt = doc.data().TaskPoint;
        let assigneduserr = doc.data().AssignedUser;
        let datee = doc.data().CreatedAt.toDate();
        let statuss = data.Status;
        let tasknamee = data.TaskName;
        let taskdess = data.TaskDes;


        let taskcontainer = document.getElementById("taskcontainer");
        let taskbody = document.createElement("div");
        let taskdate = document.createElement("div");
        let taskrow = document.createElement("div");
        let taskname = document.createElement("div");
        let taskitem = document.createElement("div");
        let coinicon = document.createElement("img");
        let point = document.createElement("div");
        let wall = document.createElement("div");
        let assigneduser = document.createElement("div");


        taskcontainer.classList.add("taskcontainer");
        taskbody.classList.add("taskbody");
        taskdate.classList.add("taskdate");
        taskrow.classList.add("taskrow");
        taskitem.classList.add("taskitem");
        coinicon.src = "../assets/coin icon.svg"
        wall.innerHTML = "|"


        taskcontainer.appendChild(taskbody);
        taskbody.appendChild(taskdate);
        taskbody.appendChild(taskrow);
        taskrow.appendChild(taskname);
        taskrow.appendChild(taskitem);
        taskitem.appendChild(coinicon);
        taskitem.appendChild(point);
        taskitem.appendChild(wall);
        taskitem.appendChild(assigneduser);


        taskdate.innerHTML = datee;
        taskname.innerHTML = tasknamee;
        point.innerHTML = taskpointt;
        assigneduser.innerHTML = assigneduserr;
    });

}



const filterByStatus = (status) => {
    let change = document.getElementById("filter");
    switch (status) {
        case 'all':
            change.innerHTML = "Бүх даалгавар";
            db.collection("tasks").get().then(docs =>  renderTasks(docs))
            break;
        case 'unassigned':
            change.innerHTML = "Эзэнгүй даалгавар";
            db.collection("tasks").where("AssignedUser", "==", "")
                .get()
                .then((docs) => {
                    renderTasks(docs);
                })
            break;
        case 'inreview':
            change.innerHTML = "Шалгуулах даалгавар";

        case 'inprogress':
            change.innerHTML = "Хийж байшаа даалгавар";
            db.collection("tasks").where("Status", "==", status)
                .get()
                .then((docs) => {
                    renderTasks(docs)
                })
    }

}

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
    renderTasks(querySnapshot)
});