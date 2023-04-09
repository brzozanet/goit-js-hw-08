import Player from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);

player.on("play", function () {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

// // //

// const player = new Player("handstick", {
//   id: 236203659,
//   width: 640,
// });

// player.on("play", function () {
//   console.log("played the video!");
// });