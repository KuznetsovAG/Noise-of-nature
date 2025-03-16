var summer = document.querySelector("#summer");
var rainy = document.querySelector("#rainy");
var winter = document.querySelector("#winter");
var rainAudio = document.querySelector("#rainAudio");
var summerAudio = document.querySelector("#summerAudio");
var winterAudio = document.querySelector("#winterAudio");
var sunIcon = document.querySelector("#sunIcon");
var rainIcon = document.querySelector("#rainIcon");
var snowIcon = document.querySelector("#snowIcon");
var page = document.querySelector("body");
var volumeControl = document.getElementById("volumeControl");
var audioPlayers = [rainAudio, summerAudio, winterAudio];
audioPlayers.forEach(function (player) {
    var volume = parseFloat(volumeControl.value);
    player.volume = volume;
});
var toogleAudioSounds = function (typeAudio) {
    if (typeAudio === summerAudio) {
        summerAudio.play();
        rainAudio.pause();
        winterAudio.pause();
    }
    else if (typeAudio === rainAudio) {
        rainAudio.play();
        summerAudio.pause();
        winterAudio.pause();
    }
    else {
        winterAudio.play();
        summerAudio.pause();
        rainAudio.pause();
    }
};
summer.addEventListener("click", function () {
    if (summerAudio.paused) {
        sunIcon.src = "./files/assets/icons/sun.svg";
        page.style.backgroundImage = "url(" + "./files/assets/summer-bg.jpg" + ")";
        toogleAudioSounds(summerAudio);
    }
    else {
        summerAudio.pause();
        sunIcon.src = "./files/assets/icons/pause.svg";
    }
});
rainy.addEventListener("click", function () {
    if (rainAudio.paused) {
        rainIcon.src = "./files/assets/icons/cloud-rain.svg";
        page.style.backgroundImage = "url(" + "./files/assets/rainy-bg.jpg" + ")";
        toogleAudioSounds(rainAudio);
    }
    else {
        rainAudio.pause();
        rainIcon.src = "./files/assets/icons/pause.svg";
    }
});
winter.addEventListener("click", function () {
    if (winterAudio.paused) {
        snowIcon.src = "./files/assets/icons/cloud-snow.svg";
        page.style.backgroundImage = "url(" + "./files/assets/winter-bg.jpg" + ")";
        toogleAudioSounds(winterAudio);
    }
    else {
        winterAudio.pause();
        snowIcon.src = "./files/assets/icons/pause.svg";
    }
});
volumeControl.addEventListener("input", function () {
    var _this = this;
    audioPlayers.forEach(function (player) {
        var volume = parseFloat(_this.value);
        player.volume = volume;
    });
});
