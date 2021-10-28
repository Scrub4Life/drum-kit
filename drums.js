$(".drum").click(function () {
  let userClick = $(this).attr("id");
  playSound(userClick);
  animatePress(userClick);
  // console.log(userClick);
});

// adding and playaing audio
function playSound(name) {
  let audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

// animating the click
function animatePress(currentClick) {
  $("#" + currentClick).addClass("pressed");
  setTimeout(function () {
    $("#" + currentClick).removeClass("pressed");
  }, 100);
}

$(document).keypress(function (e) {
  if (e.which == 119) {
    playSound("w");
  } else if (e.which == 97) {
    playSound("a");
  } else if (e.which == 115) {
    playSound("s");
  } else if (e.which == 100) {
    playSound("d");
  } else if (e.which == 106) {
    playSound("j");
  } else if (e.which == 107) {
    playSound("k");
  } else if (e.which == 108) {
    playSound("l");
  }
  console.log(e.which);
});
