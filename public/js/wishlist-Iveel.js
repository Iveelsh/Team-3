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
    taskmodal.style.display = "block";
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

        // let taskinfomodalcont = document.createElement("div");
        // let taskmodal = document.createElement("div");
        // taskinfomodalcont.classList.add("modal");
        // taskinfomodalcont.appendChild(taskmodal);

        let taskcontainer = document.getElementById("taskcontainer");
        let deleteTaskButton = document.getElementById('deleteTaskButton')

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
        coinicon.src = "assets/coin icon.svg";
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
            taskdate.classList.add("texthover");
        });
        taskbody.style.cursor = "pointer";
        taskbody.addEventListener('mouseout', () => {
            taskbody.classList.remove("texthover");
            taskdate.classList.remove("texthover");
        });

        deleteTaskButton.onclick = () => {
            console.log(doc.data())
        }

        taskbody.onclick = () => {

            let infomodalcont = document.getElementById("infomodalcont");
            infomodalcont.style.display = "block";
            let modaluser = document.getElementById("modaluser");
            let modalpoint = document.getElementById("modalpoint");
            let modalstatus = document.getElementById("modalstatus");
            let modaldesc = document.getElementById("modaldesc");
            let modaldate = document.getElementById("modaldate");
            modaluser.innerHTML = `assigneduser: ${assigneduserr}`;
            modalpoint.innerHTML = `taskpoint: ${taskpointt}`;
            modalstatus.innerHTML = `sstatus: ${statuss}`;
            modaldesc.innerHTML = `description: ${taskdess}`;
            modaldate.innerHTML = `date: ${datee}`;
        }
        window.onclick = (event) => {
            let modal = document.getElementById("infomodalcont");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
}

const renderWishlist = (docs) => {
    console.log("Wishlist render success")
    docs.forEach(async(doc) => {
        let wishByUser;
        await db.collection('users').doc(user.uid).get().then((doc) => {
            wishByUser = doc.data().name;
        })
        let data = doc.data();
        let userWish = data.wish;
        let userWishPoint = data.point;
        let wishAddedDate = data.CreatedAt.toDate();

        let wishlistContent = document.getElementById("wish-content")


        let taskinfomodalcont = document.createElement("div");
        let taskmodal = document.createElement("div");
        taskinfomodalcont.classList.add("modal");
        taskinfomodalcont.appendChild(taskmodal);

        let wishContainer = document.createElement("div")
        let profileWishContainer = document.createElement("div")
        let nameIcon = document.createElement("div")
        let userName = document.createElement("div")
        let profileIcon = document.createElement("span")
        let post = document.createElement("div")
        let date = document.createElement("div")
        let wish = document.createElement("div")
        let coinShow = document.createElement("div")
        let coinIcon = document.createElement("img")

        if (userWishPoint) {
            let point = document.createElement("div")
            coinShow.appendChild(point);
            point.innerHTML = userWishPoint
                // point.
        } else {
            let point = document.createElement("div")
            coinShow.appendChild(point);
            point.classList.add("wishpoint-input");
        }

        wishContainer.classList.add("wish-container")
        profileWishContainer.classList.add("profile-wish");
        profileIcon.classList.add("material-icons");
        profileIcon.classList.add("profileIcon");

        // post.classList.add("")
        nameIcon.classList.add("nameIcon")
        post.classList.add("wishPost")
        date.classList.add("wish-date")
        wish.classList.add("wish")
        coinShow.classList.add("coin-show");
        coinIcon.src = "assets/coin icon.svg"

        wishlistContent.appendChild(wishContainer);
        wishContainer.appendChild(profileWishContainer);
        profileWishContainer.appendChild(nameIcon);
        profileWishContainer.appendChild(post);
        post.appendChild(date)
        post.appendChild(wish)
        nameIcon.appendChild(profileIcon)
        nameIcon.appendChild(userName)
        coinShow.appendChild(coinIcon);
        wishContainer.appendChild(coinShow);

        profileIcon.innerHTML = 'account_circle'

        wishContainer.onclick = () => {
            console.log('clicked')
            let wishInfoModal = document.getElementById("wishinfomodal");
            wishInfoModal.style.display = "block";
            let wishUser = document.getElementById("wishuser");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");
            let addPoint = document.getElementById("addPoint");


            if (userWishPoint) {
                addPoint.classList.add("none")
                console.log("has points")
                wishPoint.innerHTML = data.point;
                // wishPoint.onclick = ""
            } else {
                console.log('no pooint')
                addPoint.classList.remove("none")
                pointInput = document.createElement("input");
                pointInput.type = "number";
                pointInput.id = "addedpoint";
                wishPoint.appendChild(pointInput)
            }
            // let wishDate = document.getElementById("wishDate");
            // wishUser.innerHTML = `assigneduser: ${wishUser}`;
            wishDesc.innerHTML = data.wish;
            wishUser.innerHTML = doc.data().userName


            // wishDate.innerHTML = `date: ${wishDate}`;


            addPoint.onclick = async() => {
                let addedPoint = document.getElementById("addedpoint").value;
                if (addedPoint) {
                    data.point = addedPoint
                    console.log('helli')
                    db.collection(`groups/${groupId}/wishlist`).doc(doc.id).update({
                            point: addedPoint
                        }).then(() => {
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
                }
            }
        }

        let wishCloseButton = document.getElementById("wishinfo-closebutton");
        wishCloseButton.onclick = () => {
            let wishModal = document.getElementById("wishinfomodal");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");

            wishModal.style.display = "none";
            wishPoint.innerHTML = ''
            wishDesc.innerHTML = ''
        }

        // window.onclick = (event) => {
        //     let wishModal = document.getElementById("wishinfomodal");
        //     let wishPoint = document.getElementById("wishPoint");
        //     let wishDesc = document.getElementById("wishDesc");
        //     if (event.target == wishModal) {
        //         wishModal.style.display = "none";
        //         wishPoint.innerHTML = ''
        //         wishDesc.innerHTML = ''
        //     }

        // }
        date.innerHTML = wishAddedDate;
        wish.innerHTML = userWish;
        userName.innerHTML = wishByUser;
    })

}



const filterByStatus = (status) => {
    if (user) {
        let change = document.getElementById("filter");
        switch (status) {
            case 'all':
                change.innerHTML = "?????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc').get().then(docs => renderTasks(docs))
                break;
            case 'unassigned':
                change.innerHTML = "?????????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`).where("AssignedUser", "==", "")
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    })
                break;
            case 'inreview':
                change.innerHTML = "?????????????????? ??????????????????";

            case 'inprogress':
                change.innerHTML = "???????? ???????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`).where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs)
                    })
        }
    } else {
        window.alert("please login");
        // window.location.href = "landingPage.html";
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
                // document.getElementById("wishlist").innerHTML = "";
                renderTasks(querySnapshot)
            })
            db.collection(`groups/${groupId}/wishlist`).orderBy('CreatedAt', 'desc').onSnapshot((querySnapshot) => {
                document.getElementById("wish-content").innerHTML = "";
                renderWishlist(querySnapshot)
            })
        }).then(() => {
            console.log("render success");
        }).catch((error) => {
            console.log(error);
        })
    } else {
        console.log("please login")
        window.location.href = "index.html"
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
        window.location.href = "landingPage.html"
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
        window.location.href = "landingPage.html"
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