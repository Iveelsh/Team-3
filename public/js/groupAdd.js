let button = document.getElementById("button");


const toggle = () => {
    if (screen1.classList.contains("displaychange")) {
        screen1.classList.remove("displaychange");
        screen2.classList.add("displaychange");
    } else {
        screen1.classList.add("displaychange");
        screen2.classList.remove("displaychange");
    }

}

const showJoinForm = () => {
    let join = document.getElementsByClassName('group-join')[0];
    let create = document.getElementsByClassName('group-create')[0];
    let createForm = document.getElementsByClassName('create')[0];
    join.classList.add('group-toggled');
    join.classList.remove('group-hide-right');
    create.classList.remove('group-toggled')
    create.classList.add('group-hide-left')
        // createForm.style.display = "none"
        // join.style.display = "flex"
}
const showCreateForm = () => {
    let join = document.getElementsByClassName('group-join')[0];
    let create = document.getElementsByClassName('group-create')[0];
    join.classList.remove('group-toggled');
    join.classList.add('group-hide-right');
    create.classList.add('group-toggled')
    create.classList.remove('group-hide-left')
        // join.style.display = "flex"
}

function makeid(length, char) {
    var result = '';
    var charactersLength = char.length;
    for (var i = 0; i < length; i++) {
        result += char.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const createGroup = async() => {
    let groupName = document.getElementById("groupName").value;
    let user = firebase.auth().currentUser;
    if (user) {
        let userUid = user.uid
        let roomCode = makeid(6, groupName)
        console.log(roomCode);
        await db.collection('groups').doc(roomCode).set({
            groupname: groupName,
            joinCode: roomCode,
        })
        await db.collection(`groups/${roomCode}/members`).add({
            member: user.uid
        })
        await db.collection('users').doc(userUid).update({
            groupId: roomCode,
            role: 'admin',
        })
        window.location.href = "groupHomepage.html"
    } else {
        window.alert("Login first")
        window.location.href = "index.html"
    }


}


const joinGroup = async() => {
    let groupCode = document.getElementById("groupCode").value;
    let user = firebase.auth().currentUser;
    let userUid = user.uid

    if (user) {
        db.collection('groups').doc(groupCode).get().then(async(doc) => {
            console.log(doc.data())
            if (doc.exists) {
                await db.collection(`groups/${groupCode}/members`).add({
                    member: user.uid
                })
                await db.collection('users').doc(userUid).update({
                    groupId: groupCode,
                    role: 'kid',
                })
                window.location.href = "wishlist-Iveel-kid.html"
            } else {
                window.alert("No Group Found")
            }
        })
    } else {
        window.alert("Login first")
        window.location.href = "index.html"
    }
}