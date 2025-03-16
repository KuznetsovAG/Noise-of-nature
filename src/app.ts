const summer = document.querySelector("#summer") as HTMLElement;
const rainy = document.querySelector("#rainy") as HTMLElement;
const winter = document.querySelector("#winter") as HTMLElement;
const rainAudio = document.querySelector("#rainAudio") as HTMLMediaElement;
const summerAudio = document.querySelector("#summerAudio") as HTMLMediaElement;
const winterAudio = document.querySelector("#winterAudio") as HTMLMediaElement;
const sunIcon = document.querySelector("#sunIcon") as HTMLImageElement;
const rainIcon = document.querySelector("#rainIcon") as HTMLImageElement;
const snowIcon = document.querySelector("#snowIcon") as HTMLImageElement;
const page = document.querySelector("body") as HTMLElement;

const volumeControl = document.getElementById(
  "volumeControl"
) as HTMLInputElement;
const audioPlayers = [rainAudio, summerAudio, winterAudio];

audioPlayers.forEach((player) => {
  let volume: number = parseFloat(volumeControl.value);
  player.volume = volume;
});

const toogleAudioSounds = (typeAudio: HTMLMediaElement): void => {
  if (typeAudio === summerAudio) {
    summerAudio.play();
    rainAudio.pause();
    winterAudio.pause();
  } else if (typeAudio === rainAudio) {
    rainAudio.play();
    summerAudio.pause();
    winterAudio.pause();
  } else {
    winterAudio.play();
    summerAudio.pause();
    rainAudio.pause();
  }
};

summer.addEventListener("click", () => {
  if (summerAudio.paused) {
    sunIcon.src = "./files/assets/icons/sun.svg";
    page.style.backgroundImage = "url(" + "./files/assets/summer-bg.jpg" + ")";
    toogleAudioSounds(summerAudio);
  } else {
    summerAudio.pause();
    sunIcon.src = "./files/assets/icons/pause.svg";
  }
});

rainy.addEventListener("click", () => {
  if (rainAudio.paused) {
    rainIcon.src = "./files/assets/icons/cloud-rain.svg";
    page.style.backgroundImage = "url(" + "./files/assets/rainy-bg.jpg" + ")";
    toogleAudioSounds(rainAudio);
  } else {
    rainAudio.pause();
    rainIcon.src = "./files/assets/icons/pause.svg";
  }
});

winter.addEventListener("click", () => {
  if (winterAudio.paused) {
    snowIcon.src = "./files/assets/icons/cloud-snow.svg";
    page.style.backgroundImage = "url(" + "./files/assets/winter-bg.jpg" + ")";
    toogleAudioSounds(winterAudio);
  } else {
    winterAudio.pause();
    snowIcon.src = "./files/assets/icons/pause.svg";
  }
});

volumeControl.addEventListener("input", function () {
  audioPlayers.forEach((player) => {
    let volume: number = parseFloat(this.value);
    player.volume = volume;
  });
});
