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


const filter = () => {
    let input = document.getElementById("filterinput").value;
    let div = document.createElement("div");
    console.log(input)
    db.collection("tasks").where("Status", "==", input)
        .get()
        .then((docs) => {
            console.log(docs)
            docs.forEach((doc) => {
                let taskdiv = document.createElement("div");
                let statusdiv = document.createElement("div");
                let tasknamediv = document.createElement("div");
                let userdiv = document.createElement("div");
                let taskdes = document.createElement("div");
                console.log(doc.data());
                let data = doc.data();
                let taskpointt = doc.data().TaskPoint;
                let assigneduserr = doc.data().AssignedUser;
                let statuss = data.Status;
                let tasknamee = data.TaskName;
                let taskdess = data.TaskDes;
                taskdiv.innerHTML = `Task Point: ${taskpointt} `;
                userdiv.innerHTML = `AssignedUser: ${assigneduserr}`;
                statusdiv.innerHTML = `Status: ${statuss}`;
                tasknamediv.innerHTML = `TaskName: ${tasknamee}`;
                taskdes.innerHTML = `TaskDescription: ${taskdess}`;
                task.appendChild(taskdiv);
                task.appendChild(userdiv);
                task.appendChild(statusdiv);
                task.appendChild(tasknamediv);
                task.appendChild(taskdes);

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}