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
const wishmodal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    wishmodal.style.display = "block"
}

// window.onclick = (event) => {
//     let wishmodal = document.getElementById("wishaddmodal-full");
//     console.log("hello")
//     if (event.target == wishmodal) {
//         wishmodal.style.display = "none";
//     }
// }
// window.onclick = (event) => {
//     let taskmodal = document.getElementById("taskmodal");
//     console.log("hello")

//     if (event.target == taskmodal) {
//         taskmodal.style.display = "none";
//     }
// }

function closeModal() {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "none";
}
const closeAddWishModal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    console.log("hello")
    wishmodal.style.display = "none";
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
    docs.forEach((doc) => {
        let data = doc.data();
        let wishUser = data.user
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
        let profileIcon = document.createElement("span")
        let post = document.createElement("div")
        let date = document.createElement("div")
        let wish = document.createElement("div")
        let coinShow = document.createElement("div")
        let coinIcon = document.createElement("div")

        if (userWishPoint) {
            let point = document.createElement("div")
            coinShow.appendChild(point);
            point.innerHTML = userWishPoint
        } else {
            let point = document.createElement("div")
            coinShow.appendChild(point);
            point.classList.add("wishpoint-input");
        }

        wishContainer.classList.add("wish-container")
        profileWishContainer.classList.add("profile-wish");
        profileIcon.classList.add("material-icons");
        // post.classList.add("")
        date.classList.add("wish-date")
        wish.classList.add("wish")
        coinShow.classList.add("coin-show");
        coinIcon.src = "../assets/coin icon.svg"

        wishlistContent.appendChild(wishContainer);
        wishContainer.appendChild(profileWishContainer);
        profileWishContainer.appendChild(profileIcon);
        profileWishContainer.appendChild(post);
        post.appendChild(date)
        post.appendChild(wish)
        wishContainer.appendChild(coinShow);
        coinShow.appendChild(coinIcon);

        wishContainer.onclick = () => {
            console.log('clicked')
            let wishInfoModal = document.getElementById("wishinfomodal");
            wishInfoModal.style.display = "block";
            // let wishUser = document.getElementById("wishuser");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");

            if (userWishPoint) {
                wishPoint.innerHTML = data.point;
            } else {
                console.log('no pooint')
                pointInput = document.createElement("input");
                pointInput.type = "number";
                pointInput.id = "addedpoint";
                wishPoint.appendChild(pointInput)
            }
            // let wishDate = document.getElementById("wishDate");
            // wishUser.innerHTML = `assigneduser: ${wishUser}`;
            wishDesc.innerHTML = data.wish;
            // wishDate.innerHTML = `date: ${wishDate}`;


            let addPoint = document.getElementById("addPoint");
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
        window.onclick = (event) => {
            let wishModal = document.getElementById("wishinfomodal");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");
            if (event.target == wishModal) {
                wishModal.style.display = "none";
                wishPoint.innerHTML = ''
                wishDesc.innerHTML = ''
            }

        }
        date.innerHTML = wishAddedDate;
        wish.innerHTML = userWish;
    })

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
const addWish = () => {
    let wishName = document.getElementById("addedwish").value;
    if (user) {
        db.collection(`groups/${groupId}/wishlist`).doc().set({
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
        window.location.href = "../html/landingPage.html"
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
            window.location.href = "../html/landingPage.html"
        }
    }
    // const wishmodal = () => {

// }