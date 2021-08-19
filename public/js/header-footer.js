const displayProfileDrop = () => {
    let profileDrop = document.getElementsByClassName("profile-dropdown-content")[0];
    if (profileDrop.style.display == "none") {
        profileDrop.style.display = "block";
    } else {
        profileDrop.style.display = "none";
    }
    // profileDrop.addEventListener("mouseout", () => {
    //     profileDrop.style.visibility = "hidden";

    // })
}