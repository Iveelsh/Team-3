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
        db.collection('users').doc(userUid).onSnapshot(doc => {
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let phone = document.getElementById("phone");
            let role = document.getElementById("role");
            name.innerHTML = doc.data().name;
            email.innerHTML = doc.data().mail;
            phone.innerHTML = doc.data().phoneNumber;
            role.innerHTML = doc.data().role;
            if(doc.data().profilePic){
                document.getElementById('profile-pic').src = doc.data().profilePic
            }else{
                document.getElementById('profile-pic').src = './assets/poroooo.svg'
            }
            console.log(doc.data())
        });
    } else {
        console.log("please login")
        window.location.href = "index.html"
    }
});



// db.collection("groups").where("fuck", "==", userGroup)
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });



// let avatar1 = document.getElementsByName(./assets/)


const arr = ['./assets/avatarboy.svg', 
'./assets/avatarwoman.svg', 
'./assets/avatarbatman.svg', 
'./assets/avatarharley.svg', 
'./assets/avatargirl.svg','./assets/avatarman.svg',
'./assets/avatarsheep.svg'];

arr.forEach((item, index) => {
    let temp = document.createElement('div');

})
let left = 0  //zun f
let mid = 1 //gol s
let right = 2 //barun t 
let neg = document.getElementById('neg')
let hoyr = document.getElementById('hoyr')
let gurav = document.getElementById('gurav')
neg.src = arr[0]
hoyr.src = arr[1]
gurav.src = arr[2]


const next = () => {
    if (mid == 6) {
        mid = 0;
        left = 6;
        right = 1;
    }
    else if (mid == 5) {
        left = mid;
        mid++;
        right = 0;
    }
    else {
        left = mid;
        mid++;
        right++;
    }

    neg.src = arr[left];
    hoyr.src = arr[mid];
    gurav.src = arr[right];
}
const back = () => {
    if (mid == 0) {
        mid = 6;
        left = 5;
        right = 0;
    }
    else if (mid == 6) {
        left = 4;
        right = 6;
        mid--;
    }
    else if (mid == 1) {
        left = 6;
        mid--;
        right = 1;
    }
    else {
        left--;
        mid--;
        right--;
    }

    neg.src = arr[left];
    hoyr.src = arr[mid];
    gurav.src = arr[right];
}

let change_pic = document.getElementById("change-pic");
let not_change = document.getElementById("not-change");
let change_btns = document.getElementById("change-btns");
let change = document.getElementById("change");

let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let phoneInp = document.getElementById("phone");

let namesave = nameInp.innerHTML;
let phonesave = phoneInp.innerHTML;

const goToEdit =  () => {
    namesave = nameInp.innerHTML;
    phonesave = phoneInp.innerHTML;


    change_pic.classList.remove("none");
    not_change.classList.add("none");
    change_btns.classList.remove("none");
    change.style.display = "none";
    nameInp.contentEditable = true;
    phoneInp.contentEditable = true;
}
const backToPro = () => {

    nameInp.contentEditable = false;
    phoneInp.contentEditable = false;

    nameInp.innerHTML = namesave; 
    phoneInp.innerHTML = phonesave; 

    change_pic.classList.add("none");
    not_change.classList.remove("none");
    change_btns.classList.add("none");
    change.style.display = "block";

} 

const edit = () => {
    db.collection('users').doc(user.uid).update({
        name:  nameInp.innerHTML,
        phoneNumber: phoneInp.innerHTML,
        profilePic: arr[mid]
    })
    change_pic.classList.add("none");
    not_change.classList.remove("none");
    change_btns.classList.add("none");
    change.style.display = "block";
}

const BackToHomeParents = () => {
    window.location.href = 'home-parents.html'
}

const BackToHomeKids = () => {
    window.location.href = 'home-kids.html'
}
