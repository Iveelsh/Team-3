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


const renderTasks = async(docs) => {
    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    await docs.forEach(async(doc) => {
        // console.log(doc.data());
        let data = doc.data();
        let taskpointt = doc.data().TaskPoint;
        let assigneduserr = doc.data().AssignedUser;
        let assigneduserrName
        if (assigneduserr) {
            assigneduserrName = await db.collection('users').doc(doc.data().AssignedUser).get();
        }
        assigneduserrName = assigneduserrName?.data()?.name;

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
        if (assigneduserr) {
            assigneduser.innerHTML = assigneduserrName;
        } else {
            assigneduser.innerHTML = assigneduserr;

        }


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
                userName = docs.id;
            })
            let infomodalcont = document.getElementById("infomodalcont");
            infomodalcont.style.display = "block";
            let modaluser = document.getElementById("task-user");
            let modalpoint = document.getElementById("task-point");
            let modalstatus = document.getElementById("modalstatus");
            let modaldesc = document.getElementById("task-description");
            let modaldate = document.getElementById("task-date");
            let modalname = document.getElementById("task-name");
            let assignButton = document.getElementById("getTask");
            let doneTaskButton = document.getElementById("doneTask");
            let taskProfile = document.getElementById("picture")


            console.log(doc.data().AssignedUser)

            if (doc.data().AssignedUser) {
                taskProfile.removeAttribute("src")

                if (doc.data().AssignedUser === userName) {
                    if (doc.data().Status === 'inreview') {
                        assignButton.style.display = "none"
                        doneTaskButton.style.display = "none"
                    } else {
                        assignButton.style.display = "none"
                        doneTaskButton.style.display = "block"
                    }
                } else {
                    assignButton.style.display = "none"
                    doneTaskButton.style.display = "none"

                }
            } else {
                assignButton.style.display = "";
                taskProfile.src = "./assets/noUserProfile.svg";

            }

            doneTaskButton.onclick = () => {
                console.log(doc.data())
                db.collection(`groups/${groupId}/tasks`).doc(doc.id).update({
                    Status: 'inreview',
                }).then(() => {
                    console.log('changed status to review')
                    infomodalcont.style.display = "none";

                }).catch((error) => {
                    console.log(error)
                })
            }


            assignButton.onclick = () => {
                db.collection(`groups/${groupId}/tasks`).doc(doc.id).update({
                    AssignedUser: user.uid,
                    Status: 'inprogress',
                }).then(() => {
                    infomodalcont.style.display = "none";

                })
            }

            if (assigneduserr) {
                modaluser.innerHTML = assigneduserrName;
            } else {
                modaluser.innerHTML = 'User'
            }
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

        let wishWithButtonCont = document.createElement("div")
        wishWithButtonCont.classList.add("row")

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

        let wishDeleteButton = document.createElement('div')
        let wishDeleteIcon = document.createElement('span')
        wishDeleteIcon.classList.add("material-icons")
        wishDeleteIcon.innerHTML = "delete"
        wishDeleteButton.classList.add("wishDeleteButton", "center", "column", "small-text")
        wishDeleteButton.innerHTML = "Устгах"
        wishDeleteButton.appendChild(wishDeleteIcon)

        wishWithButtonCont.appendChild(wishBody)
        wishWithButtonCont.appendChild(wishDeleteButton)
        wishes.appendChild(wishWithButtonCont)

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


        wishWithButtonCont.addEventListener("mouseover", () => {
            wishDeleteButton.style.display = "flex"
            wishBody.style.width = "90%"
            wishDeleteButton.style.width = "10%"
        })
        wishWithButtonCont.addEventListener("mouseout", () => {
            wishDeleteButton.style.display = "none"

            wishBody.style.width = "100%"
            wishDeleteButton.style.width = "0%"
        })

        wishDeleteButton.onclick = () => {
            console.log(doc.data())
            db.collection(`groups/${groupId}/wishlist`).doc(doc.id).delete().then(() => {
                console.log('successfully deleted')
            })
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
                db.collection(`groups/${groupId}/tasks`).where("Status", "!=", "done")
                    .onSnapshot((docs) => {
                        renderTasks(docs);
                    })
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
            db.collection(`groups/${groupId}/tasks`).orderBy('CreatedAt', 'desc')
                .onSnapshot((docs) => {
                    renderTasks(docs);
                })
            db.collection(`groups/${groupId}/wishlist`).orderBy('CreatedAt', 'desc').onSnapshot((querySnapshot) => {
                    document.getElementById("wish-container").innerHTML = "";
                    renderWishlist(querySnapshot)
                })
                // MESSENGER CHAT

            db.collection(`groups/${groupId}/chats`).orderBy("time", "desc").get().then((docs) => {
                screen.innerHTML = ""
                docs.docs.forEach((doc) => {
                    renderChats(doc)
                });
            })

            // MESSENGER CHAT
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



// MESSENGER CHAT
let chat = document.getElementById("chat");
let screen = document.getElementById("screen");
let sendBut = document.getElementById("sendButn");
sendBut.addEventListener('click', () => {
    if (chat.value !== '') {
        db.collection(`groups/${groupId}/chats`).doc().set({
            user: user.uid,
            text: chat.innerHTML.trim(),
            time: firebase.firestore.FieldValue.serverTimestamp()
        }).then((docRef) => {
            let row = document.createElement("div");
            let user = document.createElement("div");
            let userName = document.createElement("div");
            let chatContainer = document.createElement("div");
            let chatEl = document.createElement("div");

            userName.innerHTML = userDoc.name
            chatEl.innerHTML = chat.innerHTML.trim()
            userName.setAttribute('class', 'user')
            row.setAttribute("class", "chat-ind")
            user.setAttribute("class", "user-pic")
            chatEl.classList.add('chat', 'bubble')
            chatContainer.setAttribute("class", "chat-container")
            chatContainer.classList.add("row")

            row.appendChild(user)
            row.appendChild(chatContainer)
            chatContainer.appendChild(userName)
            chatContainer.appendChild(chatEl)
            screen.prepend(row)

            chat.innerHTML = ''
        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
})

const renderChats = (doc) => {
    let data = doc.data();
    db.doc(`users/${data.user}`).get().then((doc) => {
        let userData = doc.data()

        let row = document.createElement("div");
        let user = document.createElement("div");
        let userName = document.createElement("div");
        let chatContainer = document.createElement("div");
        let chat = document.createElement("div");

        userName.innerHTML = doc.data().name
        chat.innerHTML = data.text
        userName.setAttribute('class', 'user')

        row.setAttribute("class", "chat-ind")
        user.setAttribute("class", "user-pic")
        chat.classList.add('chat', 'bubble')
        chatContainer.setAttribute("class", "chat-container")

        row.appendChild(user)
        row.appendChild(chatContainer)
        chatContainer.appendChild(userName)
        chatContainer.appendChild(chat)
        screen.appendChild(row)


    })
}