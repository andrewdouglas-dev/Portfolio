const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >0);
});


var MTModal = document.getElementById("MarketTrackerModal");
var MTBtn = document.getElementById("MarketTracker");
var MTspan = document.getElementById("MTclose");
var MTVideo = document.getElementById("MarketTrackingVideo")

var BAModal = document.getElementById("BankAppModal");
var BABtn = document.getElementById("BankApp");
var BAspan = document.getElementById("BAclose");

var MRModal = document.getElementById("MapReduceModal");
var MRBtn = document.getElementById("MapReduce");
var MRspan = document.getElementById("MRclose");


// When the user clicks on the button, open the modal
MTBtn.onclick = function() {
  MTModal.style.display = "block";
  MTVideo.play();
}

BABtn.onclick = function() {
  BAModal.style.display = "block";
}

MRBtn.onclick = function() {
  MRModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

MTspan.onclick = function() {
  MTModal.style.display = "none";
  MTVideo.pause();
  MTVideo.currentTime = 0;
}

BAspan.onclick = function() {
  BAModal.style.display = "none";
}

MRspan.onclick = function() {
  MRModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == MTModal && MTModal.style.display == "block") {
    MTModal.style.display = "none";
    MTVideo.pause();
    MTVideo.currentTime = 0;
  }

  if (event.target == BAModal && BAModal.style.display == "block") {
    BAModal.style.display = "none";
  }

  if (event.target == MRModal && MRModal.style.display == "block") {
    MRModal.style.display = "none";
  }
}