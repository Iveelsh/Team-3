firebase.auth().onAuthStateChanged((u) => {
    if (u) {
        user = u;
        let userUid = user.uid;
        let userGroup = db.collection("users").doc(userUid);
        console.log(userUid)
        userGroup
            .get()
            .then((doc) => {
                groupId = doc.data().groupId;
                db.collection(`groups/${groupId}/tasks`)
                    .orderBy("CreatedAt", "desc")
                    .onSnapshot((querySnapshot) => {
                        // document.getElementById("wishlist").innerHTML = "";
                        renderTasks(querySnapshot);
                    });
                db.collection(`groups/${groupId}/wishlist`)
                    .orderBy("CreatedAt", "desc")
                    .onSnapshot((querySnapshot) => {
                        console.log(groupId)
                        document.getElementById("wish-container").innerHTML = "";
                        renderWishlist(querySnapshot);
                    });
                db.collection(`groups/${groupId}/members`)
                    .onSnapshot((querySnapshot) => {
                        document.getElementById("containerrr").innerHTML = "";
                        querySnapshot.docs.forEach(doc => {
                            let memberId = doc.data().member
                            creategroupuserbody(memberId, doc.id)

                        })
                    });
            })
            .then(() => {
                console.log("render success");
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        console.log("please login");
        window.location.href = "index.html";
    }
});





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
    messb.classList.remove("black");
};
const displaywishlist = () => {
    task.classList.add("none");
    wishlist.classList.remove("none");
    groupinfo.classList.add("none");
    message.classList.add("none");
    taskb.classList.remove("black");
    wishb.classList.add("black");
    groupb.classList.remove("black");
    messb.classList.remove("black");
};
const displaygroupinfo = () => {
    task.classList.add("none");
    wishlist.classList.add("none");
    groupinfo.classList.remove("none");
    message.classList.add("none");
    taskb.classList.remove("black");
    wishb.classList.remove("black");
    groupb.classList.add("black");
    messb.classList.remove("black");
};
const displaymessage = () => {
    task.classList.add("none");
    wishlist.classList.add("none");
    groupinfo.classList.add("none");
    message.classList.remove("none");
    taskb.classList.remove("black");
    wishb.classList.remove("black");
    groupb.classList.remove("black");
    messb.classList.add("black");
};
const modal = () => {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
};

const addmodal = () => {
    let addmodal = document.getElementById("modal");
    addmodal.style.display = "block";
};

const taskmodal = () => {
    let taskmodal = document.getElementById("taskmodal");
    taskmodal.style.display = "block";
};
window.onclick = (event) => {
    let taskmodal = document.getElementById("taskmodal");
    if (event.target == taskmodal) {
        taskmodal.style.display = "none";
    }
};

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
};
let taskbody = document.createElement("div");
const renderTasks = (docs, lol) => {
    let taskcontainer = lol ? document.getElementById("historycontainer") : document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    docs.forEach((doc) => {
        console.log(doc.data()) //z;
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
        coinicon.src = "./assets/Coin.svg";
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
        taskbody.addEventListener("mouseover", () => {
            taskbody.classList.add("texthover");
            taskdate.classList.add("texthover");
        });
        taskbody.style.cursor = "pointer";
        taskbody.addEventListener("mouseout", () => {
            taskbody.classList.remove("texthover");
            taskdate.classList.remove("texthover");
        });

        taskbody.onclick = async() => {
            let userName;
            await db
                .collection("users")
                .doc(user.uid)
                .get()
                .then((docs) => {
                    userName = docs.data().name;
                });
            let infomodalcont = document.getElementById("infomodalcont");
            infomodalcont.style.display = "block";
            let modaluser = document.getElementById("task-user");
            let modalpoint = document.getElementById("task-point");
            let modalstatus = document.getElementById("modalstatus");
            let modaldesc = document.getElementById("task-description");
            let modaldate = document.getElementById("task-date");
            let modalname = document.getElementById("task-name");
            let assignButton = document.getElementById("assign-task-btn");
            console.log(doc.data().AssignedUser);
            if (doc.data().AssignedUser == userName) {
                assignButton.style.display = "none";
            }

            modaluser.innerHTML = assigneduserr;
            modalpoint.innerHTML = taskpointt ? taskpointt : 0;
            // modalstatus.innerHTML = statuss;
            modaldesc.innerHTML = taskdess;
            modaldate.innerHTML = datee;
            modalname.innerHTML = tasknamee;

            document.getElementById("nope").onclick = () => {
                deletemodal.style.display = "none";
            };
        };
        window.onclick = (event) => {
            let modal = document.getElementById("infomodalcont");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    });

};

const Destroy = () => {
    deletemodal.style.display = "block";
    deletemodal.style.zIndex = "10";
};

const renderWishlist = (docs) => {
    console.log("Wishlist render success");
    docs.forEach(async(doc) => {
        console.log(doc.data());
        let data = doc.data();
        let userWish = data.wish;
        let userWishPoint = data.point;
        let wishAddedDate = convertDate(doc.data().CreatedAt.toDate());

        let wishes = document.getElementById("wish-container");

        let wishBody = document.createElement("div");
        wishBody.classList.add("wish-body", "task-body", "row");
        let icon = document.createElement("img");
        icon.src = "./assets/wishlist.svg";
        wishBody.appendChild(icon);

        let wish = document.createElement("div");
        wish.classList.add("w100", "column");
        wishBody.appendChild(wish);

        let date = document.createElement("span");
        date.classList.add("date", "blue-text");
        date.innerHTML = wishAddedDate;
        wish.appendChild(date);

        let wishrow = document.createElement("div");
        wishrow.classList.add("row", "task-general");
        wish.appendChild(wishrow);

        let wishname = document.createElement("div");
        wishname.classList.add("blue-text", "bold");
        wishname.innerHTML = userWish;
        wishrow.appendChild(wishname);

        let coinrow = document.createElement("div");
        coinrow.classList.add("row", "info");
        wishrow.appendChild(coinrow);

        let coin = document.createElement("img");
        coin.src = "./assets/Coin.svg";
        coinrow.appendChild(coin);
        let point = document.createElement("div");
        point.innerHTML = userWishPoint ? userWishPoint : "";
        coinrow.appendChild(point);

        wishes.appendChild(wishBody);

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
            console.log("clicked");
            let wishInfoModal = document.getElementById("wishinfomodal");
            wishInfoModal.style.display = "block";
            let wishUser = document.getElementById("wishuser");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");
            let addPoint = document.getElementById("addPoint");

            if (userWishPoint) {
                addPoint.classList.add("none");
                console.log("has points");
                wishPoint.innerHTML = data.point;
                // wishPoint.onclick = ""
            } else {
                console.log("no pooint");
                addPoint.classList.remove("none");
                pointInput = document.createElement("input");
                pointInput.type = "number";
                pointInput.id = "addedpoint";
                wishPoint.appendChild(pointInput);
            }
            // let wishDate = document.getElementById("wishDate");
            // wishUser.innerHTML = `assigneduser: ${wishUser}`;
            wishDesc.innerHTML = data.wish;
            wishUser.innerHTML = doc.data().userName;

            // wishDate.innerHTML = `date: ${wishDate}`;

            addPoint.onclick = async() => {
                let addedPoint = document.getElementById("addedpoint").value;
                if (addedPoint) {
                    data.point = addedPoint;
                    console.log("helli");
                    db.collection(`groups/${groupId}/wishlist`)
                        .doc(doc.id)
                        .update({
                            point: addedPoint,
                        })
                        .then(() => {
                            let wishModal = document.getElementById("wishinfomodal");
                            let wishPoint = document.getElementById("wishPoint");
                            let wishDesc = document.getElementById("wishDesc");
                            wishModal.style.display = "none";
                            wishPoint.innerHTML = "";
                            wishDesc.innerHTML = "";
                            console.log("Added point successfully");
                        })
                        .catch((error) => {
                            console.error("Error adding point ", error);
                        });
                }
            };
        };
        window.onclick = (event) => {
            let wishModal = document.getElementById("wishinfomodal");
            let wishPoint = document.getElementById("wishPoint");
            let wishDesc = document.getElementById("wishDesc");
            if (event.target == wishModal) {
                wishModal.style.display = "none";
                wishPoint.innerHTML = "";
                wishDesc.innerHTML = "";
            }
        };
    });
};

const filterByStatus = (status) => {
    if (user) {
        let change = document.getElementById("filter");
        console.log(status);
        switch (status) {
            case "all":
                change.innerHTML = "?????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .orderBy("CreatedAt", "desc")
                    .get()
                    .then((docs) => renderTasks(docs));
                break;
            case "unassigned":
                change.innerHTML = "?????????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .where("AssignedUser", "==", "")
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inreview":
                change.innerHTML = "?????????????????? ??????????????????";

                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inprogress":
                change.innerHTML = "???????? ???????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "mytaskk":
                change.innerHTML = "M???????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .where("AssignedUser", "==", user.uid)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
        }
    } else {
        window.alert("please login");
        // window.location.href = "landingPage.html";
    }
};



const logOut = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("Succesfully logged out");
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.log(error);
        });
};

const displayProfileDrop = () => {
    let profileDrop = document.getElementsByClassName(
        "profile-dropdown-content"
    )[0];
    if (profileDrop.style.display == "none") {
        profileDrop.style.display = "block";
    } else {
        profileDrop.style.display = "none";
    }
};

const addWish = async() => {
    let wishName = document.getElementById("addwish").value;
    let userName;
    console.log(user);
    if (user) {
        await db
            .collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => {
                userName = doc.data().name;
            });
        db.collection(`groups/${groupId}/wishlist`)
            .doc()
            .set({
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
        window.location.href = "index.html";
    }
};
const wishmodal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    wishmodal.style.display = "block";
};
const closeAddWishModal = () => {
    let wishmodal = document.getElementById("wishaddmodal-full");
    console.log("hello");
    wishmodal.style.display = "none";
};
const wishInfoModalClose = () => {
    let wishInfoModal = document.getElementById("wishinfomodal");
    wishInfoModal.style.display = "none";
};

const toggleGroupMenu = () => {
    console.log("aaa");
    let m = document.getElementById("group-menu-content");
    console.log(m);
    if (m.classList.contains("flex")) {
        m.classList.remove("flex");
    } else {
        m.classList.add("flex");
    }
};
const qwerty = (a) => {
    let his = document.getElementById("his");
    let admin = document.getElementById("admin");
    let kick = document.getElementById("kick");
    if (a == "history") {
        if (admin.classList.contains("selectedd")) {
            admin.classList.remove("selectedd");
            admin.classList.add("menuitem");
        }
        if (kick.classList.contains("selecteddd")) {
            kick.classList.remove("selecteddd");
            kick.classList.add("menuitem");
        }
        his.classList.remove("menuitem");
        his.classList.add("selected");
    } else if (a == "admin") {
        if (his.classList.contains("selected")) {
            his.classList.remove("selected");
            his.classList.add("menuitem");
        }
        if (kick.classList.contains("selecteddd")) {
            kick.classList.remove("selecteddd");
            kick.classList.add("menuitem");
        }
        admin.classList.remove("menuitem");
        admin.classList.add("selectedd");
    } else if (a == "kick") {
        if (his.classList.contains("selected")) {
            his.classList.remove("selected");
            his.classList.add("menuitem");
        }
        if (admin.classList.contains("selectedd")) {
            admin.classList.remove("selectedd");
            admin.classList.add("menuitem");
        }
        kick.classList.remove("menuitem");
        kick.classList.add("selecteddd");
    }
};

const creategroupuserbody = (memberId, deleteId) => {
    let userGroup = db.collection("users").doc(memberId);
    db.collection("groups").doc(groupId).get().then((docs) => {
        let joinCode = docs.data().joinCode;
        let groupName = docs.data().groupname;
        groupname.innerHTML = groupName;
        groupcode.innerHTML = joinCode;
        console.log(docs.data())
    })


    userGroup.get().then(doc => {
        let data = doc.data()
        if (data) {



            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||

            // const filterByUserName = (user) => {
            //     if (user) {
            //         let change = document.getElementById("filter");
            //         console.log(user);
            //         switch (`user: ${userName}`) {
            //             case "all":
            //                 change.innerHTML = "?????? ??????????????????";
            //                 db.collection(`groups/${groupId}/tasks`)
            //                     .orderBy("CreatedAt", "desc")
            //                     .get()
            //                     .then((docs) => renderTasks(docs));
            //                 break;
            //             case "unassigned":
            //                 change.innerHTML = "?????????????? ??????????????????";
            //                 db.collection(`groups/${groupId}/tasks`)
            //                     .where("AssignedUser", "==", "")
            //                     .get()
            //                     .then((docs) => {
            //                         renderTasks(docs);
            //                     });
            //                 break;
            //             case "inreview":
            //                 change.innerHTML = "?????????????????? ??????????????????";

            //                 db.collection(`groups/${groupId}/tasks`)
            //                     .where("Status", "==", status)
            //                     .get()
            //                     .then((docs) => {
            //                         renderTasks(docs);
            //                     });
            //                 break;
            //             case "inprogress":
            //                 change.innerHTML = "???????? ???????????? ??????????????????";
            //                 db.collection(`groups/${groupId}/tasks`)
            //                     .where("Status", "==", status)
            //                     .get()
            //                     .then((docs) => {
            //                         renderTasks(docs);
            //                     });
            //                 break;
            //         }
            //     } else {
            //         window.alert("please login");
            //         // window.location.href = "landingPage.html";
            //     }
            // };



            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // ||
            // let groupname = document.getElementById("groupname");
            // let groupcode = document.getElementById("    groupcode");
            // code = doc.gruopname;
            // namee = doc.joinCode;
            // groupname.innerHTML = namee;
            // groupcode.innerHTML = code;

            let container = document.getElementById("containerrr");
            let groupuserbody = document.createElement("div");
            let roww = document.createElement("div");
            let row = document.createElement("div");
            let proimg = document.createElement("img");
            let column = document.createElement("div");
            let role = document.createElement("span");
            let username = document.createElement("span");
            let rowgroupuserpoint = document.createElement("div");
            let bigcoinimg = document.createElement("img");
            let point = document.createElement("div");
            let addcircleimg = document.createElement("img");
            let columnrelative = document.createElement("div");
            let materialiconbluetext = document.createElement("span");
            let sidemenuabsolute = document.createElement("div");
            let menuitem = document.createElement("div");
            let menuitem2 = document.createElement("div");
            let menuitem3 = document.createElement("div");
            let x = document.createElement("img");
            x.src = "./assets/Union.svg"

            groupuserbody.classList.add("groupuserbody");
            roww.classList.add("roww");
            row.classList.add("row");
            proimg.src = "./assets/poroooo.svg";
            proimg.style.marginLeft = "15px";
            column.classList.add("column");
            role.classList.add("role");
            username.classList.add("username");
            rowgroupuserpoint.classList.add("row");
            rowgroupuserpoint.classList.add("groupuserpoint");
            bigcoinimg.src = "./assets/BigCoin.svg";
            bigcoinimg.style.height = "25px";
            bigcoinimg.style.width = "25px";
            point.style.paddingRight = "25px";
            addcircleimg.src = "./assets/add_circle_black_24dp.svg";
            columnrelative.classList.add("column");
            columnrelative.classList.add("relative");
            materialiconbluetext.classList.add("material-icons");
            materialiconbluetext.classList.add("blue-text");
            sidemenuabsolute.classList.add("sidemenu");
            // sidemenuabsolute.classList.add("absolute");
            menuitem.classList.add("menuitem1"); //tuuh
            menuitem2.classList.add("menuitem2"); //admin
            menuitem3.classList.add("menuitem3"); //bulgem
            addcircleimg.style.cursor = "pointer";


            sidemenuabsolute.onmouseleave = close = () => {
                sidemenuabsolute.classList.remove("flex");
                sidemenuabsolute.classList.add("none");
            }
            menuitem2.onclick = () => {
                console.log('admin')
                if (data.role == 'admin') {
                    db.collection("users").doc(memberId).update({
                        role: 'kid'
                    })
                    role.innerHTML = '????????????'
                } else {
                    db.collection("users").doc(memberId).update({
                        role: 'admin'
                    })
                    role.innerHTML = '??????????'
                }

            }
            menuitem3.onclick = () => {
                let confirm = document.getElementById("confirmmodal");
                confirm.classList.remove("none");
                confirm.classList.add("flex");
                window.onclick = function(event) {
                    if (event.target == confirm) {
                        confirm.classList.remove("flex");
                        confirm.classList.add("none");
                    }
                }

            }

            let justin = document.getElementById("justin");
            justin.onclick = () => {
                let i = document.getElementById("confirmmodal");
                i.classList.remove("flex")
                i.classList.add("none");
                db.doc(`groups/${groupId}/members/${deleteId}`).delete()
            }


            materialiconbluetext.innerHTML = "more_vert";
            materialiconbluetext.style.cursor = "pointer";
            materialiconbluetext.onclick = a = () => {
                if (sidemenuabsolute.classList.contains("flex")) {
                    sidemenuabsolute.classList.remove("flex");
                } else {
                    sidemenuabsolute.classList.add("flex");
                }
                let { right, top } = materialiconbluetext.getBoundingClientRect();
                sidemenuabsolute.style.left = Math.round(right) - 155 + "px";
                sidemenuabsolute.style.top = Math.round(top) - 29 + window.scrollY + "px";
            };

            groupuserbody.appendChild(roww);
            roww.appendChild(row);
            roww.appendChild(rowgroupuserpoint);
            row.appendChild(proimg);
            row.appendChild(column);
            column.appendChild(role);
            column.appendChild(username);
            rowgroupuserpoint.appendChild(bigcoinimg);
            rowgroupuserpoint.appendChild(point);
            rowgroupuserpoint.appendChild(addcircleimg);
            rowgroupuserpoint.appendChild(columnrelative);
            columnrelative.appendChild(materialiconbluetext);
            // columnrelative.appendChild(sidemenuabsolute);
            sidemenuabsolute.appendChild(menuitem);
            sidemenuabsolute.appendChild(menuitem2);
            sidemenuabsolute.appendChild(menuitem3);
            menuitem.onclick = () => {

                let hismodal = document.getElementById("historymodal");
                hismodal.classList.remove("none")
                hismodal.classList.add("flex");
                db.collection(`groups/${groupId}/tasks`)
                    .where("AssignedUser", "==", memberId)
                    .get()
                    .then((docs) => {
                        renderTasks(docs, true);
                        docs.forEach(doc => {
                            console.log(doc.data())
                            console.log(docs.data())
                        })
                    });
                window.onclick = function(event) {
                    if (event.target == hismodal) {
                        hismodal.classList.remove("flex");
                        hismodal.classList.add("none");
                    }
                }
                console.log("history")
            }

            role.innerHTML = data.role == 'admin' ? "??????????" : '????????????';
            username.innerHTML = data.name;
            point.innerHTML = data.point ? data.point : 0;
            menuitem.innerHTML = "???????? ??????????";
            menuitem2.innerHTML = data.role == 'kid' ? "?????????? ????????????" : "???????????????? ??????????";
            menuitem3.innerHTML = "?????????????????? ????????????";

            container.appendChild(sidemenuabsolute);
            container.appendChild(groupuserbody);

        }
    })

};
const einname = () => {
    let hismodal = document.getElementById("historymodal");
    hismodal.classList.remove("flex");
    hismodal.classList.add("none");
}

const copyToClipboard = () => {
    let code = document.getElementById("groupcode");
    navigator.clipboard.writeText(code.innerHTML).then(function() {

        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}


const filterByUserName = (status) => {
    if (user) {
        let change = document.getElementById("filter");
        console.log(status);
        switch (status) {
            case "all":
                change.innerHTML = "?????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .orderBy("CreatedAt", "desc")
                    .get()
                    .then((docs) => renderTasks(docs));
                break;
            case "unassigned":
                change.innerHTML = "?????????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .where("AssignedUser", "==", "")
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inreview":
                change.innerHTML = "?????????????????? ??????????????????";

                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inprogress":
                change.innerHTML = "???????? ???????????? ??????????????????";
                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
        }
    } else {
        window.alert("please login");
        // window.location.href = "landingPage.html";
    }
};
const kickclose = () => {
    let i = document.getElementById("confirmmodal");
    i.classList.remove("flex")
    i.classList.add("none");
}
