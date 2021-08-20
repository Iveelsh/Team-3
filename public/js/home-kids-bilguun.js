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
            let assignButton = document.getElementById("assign-task-btn");
            console.log(doc.data().AssignedUser)
            if (doc.data().AssignedUser == userName) {
                assignButton.style.display = "none";
            }

            modaluser.innerHTML = assigneduserr;
            modalpoint.innerHTML = taskpointt ? taskpointt : 0;
            // modalstatus.innerHTML = statuss;
            modaldesc.innerHTML = taskdess;
            modaldate.innerHTML = datee;
            modalname.innerHTML = tasknamee;

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

        // if (userWishPoint) {
        //     let point = document.createElement("div")
        //     coinShow.appendChild(point);
        //     point.innerHTML = userWishPoint
        //         // point.
        // } else {
        //     let point = document.createElement("div")
        //     coinShow.appendChild(point);
        //     point.classList.add("wishpoint-input");
        // }


        wishBody.onclick = () => {
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
                // document.getElementById("wishlist").innerHTML = "";
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