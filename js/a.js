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