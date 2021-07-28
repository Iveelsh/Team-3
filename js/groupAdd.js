let button = document.getElementById("button")
    // let window = document.getElementsByClassName("small-container");

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