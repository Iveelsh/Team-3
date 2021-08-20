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
        let datee = convertDate(doc.data().CreatedAt.toDate());
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

        taskbody.classList.add("task-body");
        taskbody.classList.add("column");

        taskdate.classList.add("date");
        taskdate.classList.add("blue-text");

        taskname.classList.add("blue-text");
        taskname.classList.add("bold");

        taskrow.classList.add("row");
        taskrow.classList.add("task-general");
        taskitem.classList.add("row");
        taskitem.classList.add("info");
        coinicon.src = "./assets/Coin.svg"
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

        taskbody.onclick = async() => {
            let userName;
            await db.collection('users').doc(user.uid).get().then((docs) => {
                userName = docs.data().name;
            })
            let infomodalcont = document.getElementById("infomodalcont");
            infomodalcont.style.display = "block";
            let modaluser = document.getElementById("task-user");
            let modalpoint = document.getElementById("task-point");
            let modalstatus = document.getElementById("modalstatus");
            let modaldesc = document.getElementById("task-description");
            let modaldate = document.getElementById("task-date");
            let modalname = document.getElementById("task-name");
            let assignKidButton = document.getElementsByClassName("assignKidButton")[0];

            if (doc.data().AssignedUser) {
                assignKidButton.style.display = "none";
            } else {
                assignKidButton.style.display = "";
            }
            assignKidButton.onclick = () => {
                let groupId;
                let assignKidModal = document.getElementById("assign-kids-modal-screen");
                assignKidModal.style.display = "flex";
                console.log('wut')
                console.log(doc.data())
                console.log(user.uid)
                let userUid = user.uid
                let userGroup = db.collection('users').doc(userUid);
                userGroup.get().then((doc) => {
                    groupId = doc.data().groupId;
                    db.collection('users').where("groupId", "==", groupId)
                        .get().then((querySnapshot) => {
                            let memberContainer = document.getElementById("members-container");
                            memberContainer.innerHTML = ''
                            querySnapshot.forEach((doc) => {
                                if (doc.data().role == 'kid') {
                                    console.log(doc.data().name)
                                    let memberProfileCont = document.createElement('div');
                                    let memberNameCont = document.createElement('div');
                                    let memberName = document.createElement('div')
                                    let memberPointCont = document.createElement('div');
                                    let memberPoint = document.createElement('div');
                                    let coin = document.createElement('img');

                                    memberProfileCont.classList.add('row');
                                    memberProfileCont.classList.add('gray-border')
                                    memberNameCont.classList.add("row");
                                    memberPointCont.classList.add('row');
                                    memberName.classList.add("big-text");
                                    memberName.classList.add("blue-text");
                                    memberPoint.classList.add("big-text")


                                    memberContainer.appendChild(memberProfileCont)

                                    memberProfileCont.appendChild(memberNameCont);
                                    memberProfileCont.appendChild(memberPointCont);
                                    memberNameCont.appendChild(memberName);
                                    memberPointCont.appendChild(memberPoint);
                                    memberPointCont.appendChild(coin);

                                    memberName.innerHTML = doc.data().name;

                                    if (!doc.data().point) {
                                        memberPoint.innerHTML = "0"
                                    } else {
                                        memberPoint.innerHTML = doc.data().point
                                    }
                                    coin.setAttribute("src", "./assets/Coin.svg")

                                    memberProfileCont.onclick = async() => {
                                        console.log(tasknamee)
                                        console.log(groupId)
                                        await db.collection(`groups/${groupId}/tasks`).where("TaskName", "==", tasknamee)
                                            .get().then((querySnapshot) => {
                                                querySnapshot.forEach((docs) => {
                                                    docs.ref.update({
                                                        AssignedUser: memberName.innerHTML,
                                                        Status: "inprogress"
                                                    })
                                                })
                                            })
                                        assignKidModal.style.display = "none"
                                        let infomodalcont = document.getElementById("infomodalcont");
                                        infomodalcont.style.display = "none"
                                    }

                                }
                            })
                        })
                })
                let closeAssignKidsModal = document.getElementById("closeAssignKidsModal");
                closeAssignKidsModal.onclick = () => {
                    assignKidModal.style.display = "none";
                }

            }


            modaluser.innerHTML = assigneduserr;
            modalpoint.innerHTML = taskpointt ? taskpointt : 0;
            // modalstatus.innerHTML = statuss;
            modaldesc.innerHTML = taskdess;
            modaldate.innerHTML = datee;
            modalname.innerHTML = tasknamee;



            // document.getElementById('nope').onclick = () => {
            //     deletemodal.style.display = "none";
            // }
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


const renderWishlist = (docs) => {
    console.log("Wishlist render success")
    docs.forEach(async(doc) => {
        console.log(doc.data())
        let data = doc.data();
        let userWish = data.wish;
        let userWishPoint = data.point;
        let wishAddedDate = convertDate(doc.data().CreatedAt.toDate())

        let wishes = document.getElementById("wish-container")

        let wishBody = document.createElement('div')
        wishBody.classList.add('wish-body', 'task-body', 'row');
        let icon = document.createElement('img')
        icon.src = "./assets/wishlist.svg"
        wishBody.appendChild(icon);

        let wish = document.createElement('div')
        wish.classList.add('w100', 'column');
        wishBody.appendChild(wish)

        let date = document.createElement('span')
        date.classList.add('date', 'blue-text');
        date.innerHTML = wishAddedDate;
        wish.appendChild(date)

        let wishrow = document.createElement('div')
        wishrow.classList.add('row', 'task-general')
        wish.appendChild(wishrow)

        let wishname = document.createElement('div')
        wishname.classList.add('blue-text', 'bold')
        wishname.innerHTML = userWish
        wishrow.appendChild(wishname)


        let coinrow = document.createElement('div')
        coinrow.classList.add('row', 'info')
        wishrow.appendChild(coinrow)


        let coin = document.createElement('img')
        coin.src = "./assets/Coin.svg"
        coinrow.appendChild(coin)
        let point = document.createElement('div')
        point.innerHTML = userWishPoint ? userWishPoint : ''
        coinrow.appendChild(point)



        wishes.appendChild(wishBody)



        wishBody.onclick = () => {
            console.log(doc.data())
            if (!doc.data().point) {
                console.log('wut')
                let wishInfoModal = document.getElementById("wishinfomodal");
                wishInfoModal.style.display = "block";
                let wishUser = document.getElementById("wishuser");
                // let wishPoint = document.getElementById("wishPoint");
                let wishName = document.getElementById("wishName");
                // let addPoint = document.getElementById("addPoint");
                wishName.innerHTML = data.wish;
                wishUser.innerHTML = doc.data().userName
            }
            let addPointButton = document.getElementById("addPointButton");

            addPointButton.onclick = () => {
                let wishInfoModal = document.getElementById("wishinfomodal");
                let wishName = document.getElementById("wishName");

                console.log('ilgeeh')
                let addedPoint = document.getElementById("addedpoint").value;
                if (addedPoint) {
                    // db.collection(`groups/${groupId}/wishlist`).get().then((querySnapshot) => {
                    //     querySnapshot.forEach((doc) => {
                    //         console.log(doc.id, " => ", doc.data());
                    //     });
                    // });

                    db.collection(`groups/${groupId}/wishlist`).doc(doc.id).update({
                            point: addedPoint,
                        })
                        .then(() => {
                            wishInfoModal.style.display = "none";
                            wishName.innerHTML = '';
                        })
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
    })

}

const filterByStatus = (status) => {
    if (user) {
        let change = document.getElementById("filter");
        console.log(status)
        switch (status) {
            case 'all':
                change.innerHTML = "Бүх даалгавар";
                db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc').get().then(docs =>
                    renderTasks(docs))
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

                db.collection(`groups/${groupId}/tasks`).where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    })
                break;
            case 'inprogress':
                change.innerHTML = "Хийж байгаа даалгавар";
                db.collection(`groups/${groupId}/tasks`).where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs)
                    })
                break;
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
                renderTasks(querySnapshot)
            })
            db.collection(`groups/${groupId}/wishlist`).orderBy('CreatedAt', 'desc').onSnapshot((querySnapshot) => {
                document.getElementById("wish-container").innerHTML = "";

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


const logOut = () => {
    firebase.auth().signOut().then(() => {
        console.log("Succesfully logged out")
        window.location.href = "index.html"
    }).catch((error) => {
        console.log(error)
    });
}

const displayProfileDrop = () => {
    let profileDrop = document.getElementsByClassName("profile-dropdown-content")[0];
    if (profileDrop.style.display == "none") {
        profileDrop.style.display = "block";
    } else {
        profileDrop.style.display = "none";
    }
}


const addWish = async() => {
    let wishName = document.getElementById("addwish").value;
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
                document.getElementById("addwish").value = "";
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
const wishmodal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    wishmodal.style.display = "block"
}
const closeAddWishModal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    console.log("hello")
    wishmodal.style.display = "none";
}
const wishInfoModalClose = () => {
    let wishInfoModal = document.getElementById("wishinfomodal");
    wishInfoModal.style.display = "none";
}
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

// const addPoint = () => {
//     console.log('ilgeeh')
//     let addedPoint = document.getElementById("addedpoint").value;
//     console.log(addedPoint)
//     if (addedPoint) {
//         db.collection(`groups/${groupId}/wishlist`).doc().update({
//                 point: addedPoint,
//             })
//             .then(() => {
//                 wishInfoModal.style.display = "none";
//                 wishName.innerHTML = '';
//             })
//     }
// }