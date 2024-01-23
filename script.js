const formElem = document.getElementById("sign-up"),
audioElem = document.getElementById("lofi-audio");

console.log(firstNameElem);

function toggleAudio() {
    if(audioElem.paused) {
        audioElem.play();
    }
    else {
        audioElem.pause();
    }
}

