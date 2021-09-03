let taskb = document.getElementById("taskb");
let wishb = document.getElementById("wishb");
let groupb = document.getElementById("groupb");
let messb = document.getElementById("messb");
let task = document.getElementById("task");
let wishlist = document.getElementById("wishlist");
let groupinfo = document.getElementById("groupinfo");
let message = document.getElementById("message");
let chatContainer = document.createElement("div");

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

const renderTasks = async (docs) => {
  let taskcontainer = document.getElementById("taskcontainer");
  taskcontainer.innerHTML = "";
  await docs.forEach(async (doc) => {
    // console.log(doc.data());
    let data = doc.data();
    if (data.Status != "Done") {
      let taskpointt = doc.data().TaskPoint;
      let assigneduserr = doc.data().AssignedUser;
      let assigneduserrName;
      if (assigneduserr) {
        assigneduserrName = await db
          .collection("users")
          .doc(doc.data().AssignedUser)
          .get();
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

      let tuuzulaan = document.createElement("img");
      let tuuznogoon = document.createElement("img");
      let tuuzshar = document.createElement("img");

      tuuzulaan.src = "./assets/tuuzulaan.svg";
      tuuznogoon.src = "./assets/tuuznogoon.svg";
      tuuzshar.src = "./assets/tuuzshar.svg";

      tuuzulaan.classList.add("tuuzposition");
      tuuznogoon.classList.add("tuuzposition");
      tuuzshar.classList.add("tuuzposition");

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

      if (statuss == "") {
        taskbody.appendChild(tuuzulaan);
      } else if (statuss == "inprogress") {
        taskbody.appendChild(tuuzshar);
      } else if (statuss == "inreview") {
        taskbody.appendChild(tuuznogoon);
      }

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
      taskbody.addEventListener("mouseover", () => {
        taskbody.classList.add("texthover");
        taskdate.classList.add("texthover");
      });
      taskbody.style.cursor = "pointer";
      taskbody.addEventListener("mouseout", () => {
        taskbody.classList.remove("texthover");
        taskdate.classList.remove("texthover");
      });

      taskbody.onclick = async () => {
        let userName;
        await db
          .collection("users")
          .doc(user.uid)
          .get()
          .then((docs) => {
            userName = docs.id;
          });
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
        let taskProfile = document.getElementById("picture");

        console.log(doc.data().AssignedUser);

        if (doc.data().AssignedUser) {
          db.collection("users")
            .doc(doc.data().AssignedUser)
            .get()
            .then((doc) => {
              if (doc.data().profilePic) {
                taskProfile.src = doc.data().profilePic;
              } else {
                taskProfile.src = "./assets/poroooo.svg";
              }
              console.log(doc.data());
            });

          if (doc.data().AssignedUser === userName) {
            if (doc.data().Status === "inreview") {
              assignButton.style.display = "none";
              doneTaskButton.style.display = "none";
            } else {
              assignButton.style.display = "none";
              doneTaskButton.style.display = "block";
            }
          } else {
            assignButton.style.display = "none";
            doneTaskButton.style.display = "none";
          }
        } else {
          assignButton.style.display = "";
          taskProfile.src = "./assets/noUserProfile.svg";
        }

        doneTaskButton.onclick = () => {
          console.log(doc.data());
          db.collection(`groups/${groupId}/tasks`)
            .doc(doc.id)
            .update({
              Status: "inreview",
            })
            .then(() => {
              console.log("changed status to review");
              infomodalcont.style.display = "none";
            })
            .catch((error) => {
              console.log(error);
            });
        };

        assignButton.onclick = () => {
          db.collection(`groups/${groupId}/tasks`)
            .doc(doc.id)
            .update({
              AssignedUser: user.uid,
              Status: "inprogress",
            })
            .then(() => {
              infomodalcont.style.display = "none";
            });
        };

        if (assigneduserr) {
          modaluser.innerHTML = assigneduserrName;
        } else {
          modaluser.innerHTML = "User";
        }
        modalpoint.innerHTML = taskpointt ? taskpointt : 0;
        // modalstatus.innerHTML = statuss;
        modaldesc.innerHTML = taskdess;
        modaldate.innerHTML = datee;
        modalname.innerHTML = tasknamee;

        // document.getElementById('nope').onclick = () => {
        //     deletemodal.style.display = "none";
        // }
      };
      window.onclick = (event) => {
        let modal = document.getElementById("infomodalcont");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  });
};

const Destroy = () => {
  deletemodal.style.display = "block";
  deletemodal.style.zIndex = "10";
};

const renderWishlist = (docs) => {
  console.log("Wishlist render success");
  docs.forEach(async (doc) => {
    console.log(doc.data());
    let data = doc.data();
    let userWish = data.wish;
    let userWishPoint = data.point;
    let wishAddedDate = convertDate(doc.data().CreatedAt.toDate());

    let wishes = document.getElementById("wish-container");

    let wishWithButtonCont = document.createElement("div");
    wishWithButtonCont.classList.add("row");

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

    let wishDeleteButton = document.createElement("div");
    let wishDeleteIcon = document.createElement("span");
    wishDeleteIcon.classList.add("material-icons");
    wishDeleteIcon.innerHTML = "delete";
    wishDeleteButton.classList.add(
      "wishDeleteButton",
      "center",
      "column",
      "small-text"
    );
    wishDeleteButton.innerHTML = "Устгах";
    wishDeleteButton.appendChild(wishDeleteIcon);

    wishWithButtonCont.appendChild(wishBody);
    wishWithButtonCont.appendChild(wishDeleteButton);
    wishes.appendChild(wishWithButtonCont);

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
      wishDeleteButton.style.display = "flex";
      wishBody.style.width = "90%";
      wishDeleteButton.style.width = "10%";
    });
    wishWithButtonCont.addEventListener("mouseout", () => {
      wishDeleteButton.style.display = "none";

      wishBody.style.width = "100%";
      wishDeleteButton.style.width = "0%";
    });

    wishDeleteButton.onclick = () => {
      console.log(doc.data());
      db.collection(`groups/${groupId}/wishlist`)
        .doc(doc.id)
        .delete()
        .then(() => {
          console.log("successfully deleted");
        });
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
                change.innerHTML = "Бүх даалгавар";
                db.collection(`groups/${groupId}/tasks`).onSnapshot((docs) => {
                    renderTasks(docs);
                });
                break;
            case "unassigned":
                change.innerHTML = "Эзэнгүй даалгавар";
                db.collection(`groups/${groupId}/tasks`)
                    .where("AssignedUser", "==", "")
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inreview":
                change.innerHTML = "Шалгуулах даалгавар";

                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "inprogress":
                change.innerHTML = "Хийж байгаа даалгавар";
                db.collection(`groups/${groupId}/tasks`)
                    .where("Status", "==", status)
                    .get()
                    .then((docs) => {
                        renderTasks(docs);
                    });
                break;
            case "mytaskk":
                change.innerHTML = "Mиний даалгавар";
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

    }
  } else {
    window.alert("please login");
    // window.location.href = "landingPage.html";
  }
};

firebase.auth().onAuthStateChanged((u) => {
  if (u) {
    user = u;
    let userUid = user.uid;
    let userGroup = db.collection("users").doc(userUid);
    userGroup
      .get()
      .then((doc) => {
        groupId = doc.data().groupId;
        db.collection(`groups/${groupId}/tasks`)
          .where("Status", "!=", "Done")
          .orderBy("Status", "desc")
          .onSnapshot((docs) => {
            renderTasks(docs);
          });
        db.collection(`groups/${groupId}/wishlist`)
          .orderBy("CreatedAt", "desc")
          .onSnapshot((querySnapshot) => {
            document.getElementById("wish-container").innerHTML = "";
            renderWishlist(querySnapshot);
          });
        // MESSENGER CHAT

        db.collection(`groups/${groupId}/chats`)
          .orderBy("time", "desc")
          .onSnapshot((docs) => {
            screen.innerHTML = "";
            let a = docs.docs.map((doc) => {
              let data = doc.data();
              return new Promise((res, rej) => {
                db.doc(`users/${data.user}`)
                  .get()
                  .then((doc) => {
                    res({
                      ...data,
                      userName: doc.data().name,
                      profilePic: doc.data()?.profilePic,
                    });
                  });
              });
            });
            Promise.all(a).then((allData) => {
              let test = allData.sort(function (a, b) {
                return new Date(b.time) - new Date(a.time);
              });
              console.log(chatContainer);
              test.forEach((item) => {
                renderChats(item);
              });
            });
          });

        // MESSENGER CHAT ENDS

        //GROUP
        db.collection(`groups/${groupId}/members`).onSnapshot(
          (querySnapshot) => {
            document.getElementById("containerrr").innerHTML = "";
            querySnapshot.docs.forEach((doc) => {
              let memberId = doc.data().member;
              creategroupuserbody(memberId, doc.id);
            });
          }
        );
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

const addWish = async () => {
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

// MESSENGER CHAT
let chat = document.getElementById("chat");
let screen = document.getElementById("screen");
let sendBut = document.getElementById("sendButn");
sendBut.addEventListener("click", () => {
  if (chat.value !== "") {
    db.collection(`groups/${groupId}/chats`)
      .add({
        user: user.uid,
        text: chat.innerHTML.trim(),
        time: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        chat.innerHTML = "";
      });
  }
});

const renderChats = (data) => {
  let row = document.createElement("div");
  let user = document.createElement("div");
  let userName = document.createElement("div");
  let chat = document.createElement("div");

  userName.innerHTML = data.userName;
  chat.innerHTML = data.text;
  userName.setAttribute("class", "user");

  row.setAttribute("class", "chat-ind");
  user.setAttribute("class", "user-pic");
  user.style.backgroundImage = `url(${
    data.profilePic ? data.profilePic : "./assets/poroooo.svg"
  })`;
  user.style.backgroundSize = `contain`;
  chat.classList.add("chat", "bubble");
  chatContainer.setAttribute("class", "chat-container");

  row.appendChild(user);
  row.appendChild(chatContainer);
  chatContainer.appendChild(userName);
  chatContainer.appendChild(chat);
  screen.appendChild(row);
};

const creategroupuserbody = (memberId, deleteId) => {
  let userGroup = db.collection("users").doc(memberId);
  db.collection("groups")
    .doc(groupId)
    .get()
    .then((docs) => {
      let joinCode = docs.data().joinCode;
      let groupName = docs.data().groupname;
      groupname.innerHTML = groupName;
      groupcode.innerHTML = joinCode;
      console.log(docs.data());
    });

  userGroup.get().then((doc) => {
    let data = doc.data();
    if (data) {
      // let groupname = document.getElementById("groupname");
      // let groupcode = document.getElementById("groupcode");
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
      // let addcircleimg = document.createElement("img");
      let columnrelative = document.createElement("div");
      let materialiconbluetext = document.createElement("span");
      let sidemenuabsolute = document.createElement("div");
      let menuitem = document.createElement("div");
      let menuitem2 = document.createElement("div");
      let menuitem3 = document.createElement("div");
      let x = document.createElement("img");
      x.src = "./assets/Union.svg";

      groupuserbody.classList.add("groupuserbody");
      roww.classList.add("roww");
      row.classList.add("row");
      proimg.src = `${
        data.profilePic ? data.profilePic : "./assets/poroooo.svg"
      }`;
      proimg.style.marginLeft = "15px";
      proimg.style.width = "53px";
      proimg.style.height = "53px";
      column.classList.add("column");
      role.classList.add("role");
      username.classList.add("username");
      rowgroupuserpoint.classList.add("row");
      rowgroupuserpoint.classList.add("groupuserpoint");
      bigcoinimg.src = "./assets/BigCoin.svg";
      bigcoinimg.style.height = "25px";
      bigcoinimg.style.width = "25px";
      point.style.paddingRight = "25px";
      // addcircleimg.src = "./assets/add_circle_black_24dp.svg";
      columnrelative.classList.add("column");
      columnrelative.classList.add("relative");
      materialiconbluetext.classList.add("material-icons");
      materialiconbluetext.classList.add("blue-text");
      sidemenuabsolute.classList.add("sidemenu");
      // sidemenuabsolute.classList.add("absolute");
      menuitem.classList.add("menuitem1"); //tuuh
      menuitem2.classList.add("menuitem2"); //admin
      menuitem3.classList.add("menuitem3"); //bulgem
      // addcircleimg.style.cursor = "pointer";

      menuitem.onclick = () => {
        console.log("tuuh");
      };
      menuitem2.onclick = () => {
        console.log("admin");
        if (data.role == "admin") {
          db.collection("users").doc(memberId).update({
            role: "kid",
          });
          role.innerHTML = "Хүүхэд";
        } else {
          db.collection("users").doc(memberId).update({
            role: "admin",
          });
          role.innerHTML = "Админ";
        }
      };
      menuitem3.onclick = () => {
        console.log("bulgemees hasah");
        db.doc(`groups/${groupId}/members/${deleteId}`).delete();
      };

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
        sidemenuabsolute.style.top =
          Math.round(top) - 29 + window.scrollY + "px";
      };

      groupuserbody.appendChild(roww);
      roww.appendChild(row);
      roww.appendChild(rowgroupuserpoint);
      row.appendChild(proimg);
      row.appendChild(column);
      column.appendChild(role);
      column.appendChild(username);

      if (doc.data().role == "kid") {
        rowgroupuserpoint.appendChild(bigcoinimg);
        rowgroupuserpoint.appendChild(point);
      }

      rowgroupuserpoint.appendChild(columnrelative);
      if (doc.data().role == "kid") {
        columnrelative.appendChild(sidemenuabsolute);
        columnrelative.appendChild(materialiconbluetext);
      }
      sidemenuabsolute.appendChild(menuitem);
      // if(doc.data().role == 'kid'){
      //     sidemenuabsolute.appendChild(menuitem2);
      // }
      sidemenuabsolute.appendChild(menuitem3);

      role.innerHTML = data.role == "admin" ? "Админ" : "Хүүхэд";
      username.innerHTML = data.name;
      point.innerHTML = data.point ? data.point : 0;
      menuitem.innerHTML = "Түүх харах";
      menuitem2.innerHTML =
        data.role == "kid" ? "Админ болгох" : "Админаас хасах";
      menuitem3.innerHTML = "Бүлгэмээс гаргах";

      container.appendChild(sidemenuabsolute);
      container.appendChild(groupuserbody);
    }
  });
};

function copyToClipboard() {
  let code = document.getElementById("groupcode");
  navigator.clipboard.writeText(code.innerHTML).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

const goToProfile = () => {
    window.location.href = "profile.html";

};
