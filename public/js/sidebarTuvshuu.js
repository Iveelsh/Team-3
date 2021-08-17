let taskb = document.getElementById("taskb");
let wishb = document.getElementById("wishb");
let groupb = document.getElementById("groupb");
let messb = document.getElementById("messb");
let task = document.getElementById("task");
let wishlist = document.getElementById("wishlist");
let groupinfo = document.getElementById("groupinfo");
let message = document.getElementById("message");

let user;
let groupId;

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

const addmodal = () => {
    let addmodal = document.getElementById("modal");
    addmodal.style.display = "block";
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

function closeModal() {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "none";
}

function closeModal2() {
    let infomodalcont = document.getElementById("infomodalcont");
    infomodalcont.style.display = "none";
}

const remove = () => {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "none";
}


const renderTasks = (docs) => {
    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    docs.forEach((doc) => {
        // console.log(doc.data());
        let data = doc.data();
        let taskpointt = doc.data().TaskPoint;
        let assigneduserr = doc.data().AssignedUser;
        let datee = doc.data().CreatedAt.toDate();
        let statuss = data.Status;
        let tasknamee = data.TaskName;
        let taskdess = data.TaskDes;


        let taskinfomodalcont = document.createElement("div");
        let taskmodal = document.createElement("div");
        taskinfomodalcont.classList.add("modal");
        taskinfomodalcont.appendChild(taskmodal);



        let taskcontainer = document.getElementById("taskcontainer");
        let taskbody = document.createElement("div");
        let taskdate = document.createElement("span");
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
        wall.innerHTML = "|";



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


        taskbody.style.cursor = "pointer";
        taskbody.addEventListener('mouseover', () => {
            taskbody.classList.add("texthover");
            taskdate.classList.add("texthover")
        });
        taskbody.style.cursor = "pointer";
        taskbody.addEventListener('mouseout', () => {
            taskbody.classList.remove("texthover");
            taskdate.classList.remove("texthover");
        });

        taskbody.onclick = () => {

            let infomodalcont = document.getElementById("infomodalcont");
            infomodalcont.style.display = "block";
            let modaluser = document.getElementById("modaluser");
            let modalpoint = document.getElementById("modalpoint");
            let modalstatus = document.getElementById("modalstatus");
            let modaldesc = document.getElementById("modaldesc");
            let modaldate = document.getElementById("modaldate");
            let modalname = document.getElementById("modalname");
            modaluser.innerHTML = assigneduserr;
            modalpoint.innerHTML = taskpointt;
            // modalstatus.innerHTML = statuss;
            modaldesc.innerHTML = taskdess;
            modaldate.innerHTML = datee;
            modalname.innerHTML = tasknamee;

            // let deletemodal = document.createElement("div");
            // deletemodal.className = "deletemodal"; 
            // taskcontainer.appendChild(deletemodal);
            // let box1 = document.createElement("div");
            // let box2 = document.createElement("div");
            // box1.className = "box";
            // box2.className = "box";
            // deletemodal.appendChild(box1);
            // deletemodal.appendChild(box2);
            document.getElementById('delete-task').onclick = () => {
                db.doc(`groups/${groupId}/tasks/${doc.id}`).delete();
                deletemodal.style.display = "none";
                infomodalcont.style.display = "none";
            }

            document.getElementById('nope').onclick = () => {
                deletemodal.style.display = "none";
            }
        }
        window.onclick = (event) => {
            let modal = document.getElementById("infomodalcont");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    });

}

const Destroy = () => {
    deletemodal.style.display = "block";
    deletemodal.style.zIndex = "10";
}


const filterByStatus = (status) => {
    if (user) {
        let change = document.getElementById("filter");
        switch (status) {
            case 'all':
                change.innerHTML = "Бүх даалгавар";
                db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc').get().then(docs => renderTasks(docs))
                break;
            case 'unassigned':
                change.innerHTML = "Эзэнгүй даалгавар";
                db.collection(`groups/${groupId}/tasks`).where("AssignedUser", "==", "")
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    })
                break;
            case 'inreview':
                change.innerHTML = "Шалгуулах даалгавар";

            case 'inprogress':
                change.innerHTML = "Хийж байшаа даалгавар";
                db.collection(`groups/${groupId}/tasks`).where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs)
                    })
        }
    } else {
        window.alert("please login");
        // window.location.href = "../html/landingPage.html";
    }
}


firebase.auth().onAuthStateChanged((u) => {
    if (u) {
        user = u
        let userUid = user.uid
        let userGroup = db.collection('users').doc(userUid);
        userGroup.get().then((doc) => {
            groupId = doc.data().groupId;
            db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc').onSnapshot((querySnapshot) => {
                renderTasks(querySnapshot)
            })
        }).then(() => {
            console.log("render success");
        }).catch((error) => {
            console.log(error);
        })
    } else {
        console.log("please login")
        window.location.href = "../html/landingPage.html"
    }
});

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
                let taskmodal = document.getElementById("taskmodal");
                taskmodal.style.display = "none"
                document.getElementById("TaskName").value = "";
                document.getElementById("TaskDes").value = "";
                document.getElementById("TaskPoint").value = "";
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    } else {
        window.alert("Please login");
        window.location.href = "../html/landingPage.html"
    }
}

const switchkids = () => {
    // console.log(docs)
    let assignKidModal = document.getElementById("assign-kids-modal-screen");
    assignKidModal.style.display = "flex";
    if (user) {
        let userUid = user.uid

        let userGroup = db.collection('users').doc(userUid);
        userGroup.get().then((doc) => {
            groupId = doc.data().groupId;
            db.collection("users").where("groupId", "==", groupId)
                .get()
                .then((querySnapshot) => {
                    let memberContainer = document.getElementById("members-container");
                    memberContainer.innerHTML = ''
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data().name);
                        let memberAssign = document.createElement("div")
                        let memberName = document.createElement("div")
                        let memberPoint = document.createElement("div")

                        memberContainer.appendChild(memberAssign)
                        memberAssign.appendChild(memberName)
                        memberAssign.appendChild(memberPoint)

                        memberAssign.setAttribute("class", "member-assign");

                        memberName.innerHTML = doc.data().name

                        if (!doc.data().point) {
                            memberPoint.innerHTML = "0"
                        } else {
                            memberPoint.innerHTML = doc.data().point
                        }

                        memberAssign.onclick = async() => {
                            // console.log(doc.data())
                            let taskName = document.getElementById("modalname").innerHTML
                            console.log(taskName)
                            console.log(groupId)
                            await db.collection(`groups/${groupId}/tasks`).where("TaskName", "==", taskName)
                                .get().then((querySnapshot) => {
                                    querySnapshot.forEach((docs) => {
                                        docs.ref.update({
                                            AssignedUser: memberName.innerHTML,
                                            Status: "inprogress"
                                        })
                                    })
                                })
                            assignKidModal.style.display = "none"
                        }
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        })
    }
    let closeAssignKidsModal = document.getElementById("closeAssignKidsModal");
    closeAssignKidsModal.onclick = () => {
        assignKidModal.style.display = "none";
        console.log("close")
    }
}

// remove_2.onclick = (() => {
//     db.doc(`groups/${groupId}/tasks/${doc.id}`).delete().catch((err) => console.log(err))
// })