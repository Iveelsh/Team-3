let i = 0;
const drop = () => {
    let dropdown = document.getElementById("dropdown");
    if (i != 1) {

        dropdown.classList.remove("none");
        i++
    } else {
        dropdown.classList.add("none");
        i--;
    }


}

const change = (a) => {
    let droptext = document.getElementById("droptext");
    let dropdown = document.getElementById("dropdown");

    if (a == "year") {
        droptext.innerHTML = "last year";
        dropdown.classList.add("none");
    } else if (a == "month") {
        droptext.innerHTML = " last month"
        dropdown.classList.add("none");
    } else if (a == "week") {
        droptext.innerHTML = "last week"
        dropdown.classList.add("none");
    }

}
const prohover = () => {
    let pro = document.getElementById("prohover");
    let edit = document.getElementById("edit");
    pro.classList.remove("none");
    edit.classList.add("none");
}
const prohoverr = () => {
    let pro = document.getElementById("prohover");
    pro.classList.add("none");
    edit.classList.remove("none");

}




firebase.auth().onAuthStateChanged((u) => {
    if (u) {
        user = u
        let userUid = user.uid
        let userGroup = db.collection('users').doc(userUid);
        db.collection('users').doc(userUid).get().then(doc => {
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let phone = document.getElementById("phone");
            let role = document.getElementById("role");
            name.innerHTML = doc.data().name;
            email.innerHTML = doc.data().mail;
            phone.innerHTML = doc.data().phone;
            role.innerHTML = doc.data().role;
            console.log(doc.data())
        });
    } else {
        console.log("please login")
        window.location.href = "../html/landingPage.html"
    }
});





const renderusertask = () => {

    let container = document.getElementById("container")
    let taskbody = document.createElement("div");
    let date = document.createElement("div");
    let taskitem = document.createElement("div");
    let item = document.createElement("div");
    let row = document.createElement("div");
    let coin = document.createElement("img");
    let itemm = document.createElement("div");

    // class uguh: \/

    taskbody.classList.add("taskbody");
    date.classList.add("date");
    taskitem.classList.add("taskitem");
    item.classList.add("item");
    row.classList.add("row");
    coin.src = "../assets/coin icon.svg";
    itemm.classList.add("item");
    itemm.style.margintop = "5px";

    // append child

    taskbody.appendChild(date);
    taskbody.appendChild(taskitem);
    taskitem.appendChild(item);
    taskitem.appendChild(row);
    row.appendChild(coin);
    row.appendChild(itemm);

    date.innerHTML = doc.data().date;
    item.innerHTML = doc.data().taskname;
    itemm.innerHTML = doc.date().point;

    container.appendChild(taskbody);
}


db.collection("groups").where("fuck", "==", userGroup)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });