const hotspot = document.querySelector("#hotspot1");

const popup = document.querySelector("#popup");

const video = document.querySelector("#popupVideo");

const audio = document.querySelector("#popupAudio");

const closeBtn = document.querySelector("#closeBtn");


// Open Popup
hotspot.addEventListener("click", () => {

  popup.style.display = "flex";

  video.play();

  audio.play();

});


// Close Popup
closeBtn.addEventListener("click", () => {

  popup.style.display = "none";

  video.pause();

  audio.pause();

});