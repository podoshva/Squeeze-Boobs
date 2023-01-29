"use strict";
const frames = ["frame1", "frame2", "frame3"];
const frameOut = document.querySelector(".frameOut");
const frame = document.createElement("img");
const counter = document.querySelector("#counter");
let click = 0;
counter.innerHTML = click;

function letGoBoobs() {
  frame.style.cursor = "grab";
  for(let i = 2; i >= 0; i--) {
    frame.src = "frames/" + frames[i] + ".png";
    frameOut.appendChild(frame);
  };
}

function squeezeBoobs() {
  frame.style.cursor = "grabbing";
  for(let i = 1; i < frames.length; i++) {
    frame.src = "frames/" + frames[i] + ".png";
    frameOut.appendChild(frame);
  }
}

window.addEventListener("load", function() {
  frame.src = "frames/" + frames[0] + ".png";
  frameOut.appendChild(frame);
});


if(window.innerWidth < 500) {
  frame.style.width = "400px";
  frame.style.height = "400px";
  frame.addEventListener("touchstart", function(e) {
    click += 1;
    counter.innerHTML = click;
    squeezeBoobs();
  });
  frame.addEventListener("touchend", function(e) {
    letGoBoobs();
  });

} else {
  frame.addEventListener("mousedown", function(e) {
    click += 1;
    counter.innerHTML = click;
    squeezeBoobs();
  });
  
  frame.addEventListener("mouseup", function(e) {
    letGoBoobs();
  });
}







