"use strict";
const frames = ["frame1", "frame2", "frame3"];
const frameOut = document.querySelector(".frameOut");
const frame = document.querySelector("#boobs");

function Ani() {
  for(let i = 2; i >= 0; i--) {
    frame.src = "frames/" + frames[i] + ".png"; // С этой строкой все ок
    frameOut.appendChild(frame)
  };
}

function BoobsAnimation() {
  for(let i = 1; i < frames.length; i++) {
    frame.src = "frames/" + frames[i] + ".png"; // С этой строкой все ок
    frameOut.appendChild(frame); // С этой строкой все ок
  }
}

frame.addEventListener("click", function() {
  console.log("Жмяк");
  BoobsAnimation();
  setTimeout(Ani, 100);
})





