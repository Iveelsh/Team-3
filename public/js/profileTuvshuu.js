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