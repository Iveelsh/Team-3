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











const filter1 = () => {
    // let input = document.getElementById("filterinput").value;
    // console.log(input)
    let change = document.getElementById("filter");
    change.innerHTML = "Шалгуулах даалгавар";
    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";

    db.collection("tasks").where("Status", "==", "inreview")
        .get()
        .then((docs) => {
            console.log(docs)
            docs.forEach((doc) => {
                // let taskdiv = document.createElement("div");
                // let statusdiv = document.createElement("div");
                // let tasknamediv = document.createElement("div");
                // let userdiv = document.createElement("div");
                // let taskdes = document.createElement("div");
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





















                // const filter = () => {
                //     let input = document.getElementById("filterinput").value;
                //     console.log(input)
                //     db.collection("tasks").where("Status", "==", input)
                //         .get()
                //         .then((docs) => {
                //             console.log(docs)
                //             docs.forEach((doc) => {
                //                 // let taskdiv = document.createElement("div");
                //                 // let statusdiv = document.createElement("div");
                //                 // let tasknamediv = document.createElement("div");
                //                 // let userdiv = document.createElement("div");
                //                 // let taskdes = document.createElement("div");
                //                 console.log(doc.data());
                //                 let data = doc.data();
                //                 let taskpointt = doc.data().TaskPoint;
                //                 let assigneduserr = doc.data().AssignedUser;
                //                 let datee = doc.data().CreatedAt.toDate();
                //                 let statuss = data.Status;
                //                 let tasknamee = data.TaskName;
                //                 let taskdess = data.TaskDes;


                //                 let taskcontainer = document.getElementById("taskcontainer");
                //                 let taskbody = document.createElement("div");
                //                 let taskdate = document.createElement("div");
                //                 let taskrow = document.createElement("div");
                //                 let taskname = document.createElement("div");
                //                 let taskitem = document.createElement("div");
                //                 let coinicon = document.createElement("img");
                //                 let point = document.createElement("div");
                //                 let wall = document.createElement("div");
                //                 let assigneduser = document.createElement("div");


                //                 taskcontainer.classList.add("taskcontainer");
                //                 taskbody.classList.add("taskbody");
                //                 taskdate.classList.add("taskdate");
                //                 taskrow.classList.add("taskrow");
                //                 taskitem.classList.add("taskitem");
                //                 coinicon.src = "../assets/coin icon.svg"
                //                 wall.innerHTML = "|"


                //                 taskcontainer.appendChild(taskbody);
                //                 taskbody.appendChild(taskdate);
                //                 taskbody.appendChild(taskrow);
                //                 taskrow.appendChild(taskname);
                //                 taskrow.appendChild(taskitem);
                //                 taskitem.appendChild(coinicon);
                //                 taskitem.appendChild(point);
                //                 taskitem.appendChild(wall);
                //                 taskitem.appendChild(assigneduser);


                //                 taskdate.innerHTML = datee;
                //                 taskname.innerHTML = tasknamee;
                //                 point.innerHTML = taskpointt;
                //                 assigneduser.innerHTML = assigneduserr;


















                // let taskname = document.getElementById("taskname");
                // let taskdate = document.getElementById("taskdate");
                // let point = document.getElementById("point");
                // let assigneduser = document.getElementById("assigneduser");
                // let taskcontainer = document.getElementById("taskcontainer");

                // let taskbody = document.createElement("div");
                // let taskdatee = document.createElement("div")
                // taskdatee.classList.add("taskdate");
                // let taskrow = document.createElement("div")
                // let tasknamediv = document.createElement('div');
                // let taskitem = document.createElement("div")
                // taskrow.appendChild(taskitem);
                // let coinicon = document.createElement("img");
                // let pointdiv = document.createElement("div");
                // let wall = document.createElement("div")
                // wall.innerHTML = "|";
                // let user = document.createElement("div");
                // taskrow.classList.add("taskrow");
                // taskrow.appendChild(tasknamediv);
                // taskitem.classList.add("taskitem");
                // taskitem.appendChild(coinicon);
                // taskitem.appendChild(pointdiv);
                // taskitem.appendChild(wall);
                // taskitem.appendChild(user);
                // taskbody.classList.add("taskbody");
                // taskbody.appendChild(taskdatee);
                // taskbody.appendChild(taskrow);
                // taskdatee.innerHTML = datee;
                // tasknamediv.innerHTML = tasknamee;
                // pointdiv.innerHTML = taskpointt;
                // user.innerHTM = assigneduserr
                // taskdate.innerHTML = datee;
                // taskname.innerHTML = tasknamee;
                // point.innerHTML = taskpointt;
                // assigneduser.innerHTML = assigneduserr;
                // taskcontainer.innerHTML = '';
                // taskcontainer.appendChild(taskbody);
                // task.appendChild(taskbody);
                // taskdiv.innerHTML = `Task Point: ${taskpointt} `;
                // userdiv.innerHTML = `AssignedUser: ${assigneduserr}`;
                // statusdiv.innerHTML = `Status: ${statuss}`;
                // tasknamediv.innerHTML = `TaskName: ${tasknamee}`;
                // taskdes.innerHTML = `TaskDescription: ${taskdess}`;
                // task.appendChild(taskdiv);
                // task.appendChild(userdiv);
                // task.appendChild(statusdiv);
                // task.appendChild(tasknamediv);
                // task.appendChild(taskdes);

            });
        })
}
const filter2 = () => {
    // let input = document.getElementById("filterinput").value;
    // console.log(input)
    let change = document.getElementById("filter");
    change.innerHTML = "Шалгуулах даалгавар";
    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    let change2 = document.getElementById("filter");
    change2.innerHTML = "Эзэнгүй даалгавар";
    db.collection("tasks").where("AssignedUser", "==", "")
        .get()
        .then((docs) => {
            console.log(docs)
            docs.forEach((doc) => {
                // let taskdiv = document.createElement("div");
                // let statusdiv = document.createElement("div");
                // let tasknamediv = document.createElement("div");
                // let userdiv = document.createElement("div");
                // let taskdes = document.createElement("div");
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
        })
}


const filter3 = () => {
    // let input = document.getElementById("filterinput").value;
    // console.log(input)
    let change = document.getElementById("filter");
    change.innerHTML = "Хийж байгаа даалгавар";

    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    db.collection("tasks").where("Status", "==", "inprogress")
        .get()
        .then((docs) => {
            console.log(docs)
            docs.forEach((doc) => {
                // let taskdiv = document.createElement("div");
                // let statusdiv = document.createElement("div");
                // let tasknamediv = document.createElement("div");
                // let userdiv = document.createElement("div");
                // let taskdes = document.createElement("div");
                console.log(doc.data());
                let data = doc.data();
                let taskpointt = doc.data().TaskPoint;
                let assigneduserr = doc.data().AssignedUser;
                let datee = doc.data().CreatedAt.toDate();
                let statuss = data.Status;
                let tasknamee = data.TaskName;
                let taskdess = data.TaskDes;


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
        })
}



const filter0 = () => {
    // let input = document.getElementById("filterinput").value;
    // console.log(input)
    let change = document.getElementById("filter");
    change.innerHTML = "Бүх даалгавар";

    let taskcontainer = document.getElementById("taskcontainer");
    taskcontainer.innerHTML = "";
    db.collection("tasks")
        .get()
        .then((docs) => {
            console.log(docs)
            docs.forEach((doc) => {
                console.log(doc.data());
                let data = doc.data();
                let taskpointt = doc.data().TaskPoint;
                let assigneduserr = doc.data().AssignedUser;
                let datee = doc.data().CreatedAt.toDate();
                let statuss = data.Status;
                let tasknamee = data.TaskName;
                let taskdess = data.TaskDes;


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
        })
}

//TASKS

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
        let p = document.createElement("h1");
        let remove = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");

        remove.className = "close";
        remove.appendChild(txt);


        remove.onclick = (() => {
            console.log(doc.id)
            db.collection("tasks").doc(doc.id).delete()
        })
        t.innerHTML = data.TaskName
        p.innerHTML = data.TaskPoint



        li.appendChild(t);
        li.appendChild(p);
        li.appendChild(remove);

        list.appendChild(li);

    });
});