var isClick;
var i;
var t;
var r;
var s;
var blink;
var wait;
var colr;

$(".btn").click(function(e) {
  if (i != -1) {

    isClick = $(this).attr("id");
    press(isClick);


    if (isClick != colr) {
      $("body").css("background-color", "red");
      $("h1").text("Wrong button!. Press any Key to start again.");
      playsound("wrong");
      setTimeout(function() {
        $("body").css("background-color", "#1A3C40");
      }, 100);
      i = -1;
    } else {
      if (t > 0) t--;
      else {
        t = 4;
        i += 1;
      }
      start();
    }

  }
});


document.addEventListener("keypress", function() {
  i = 1;
  t = 4;
  start();
});


function start() {
  if (i === 6) {
    $("h1").text("Congratulations you are the fastest. Press any Key to start again.");
    i = -1;
  } else {
    $("h1").text("Level " + i);

    blink = 100;
    wait = 2000;
    isClick = "nc";

    setTimeout(function() {}, wait);

    r = Math.ceil(Math.random() * 4);

    if (r === 1) s = "#red";
    else if (r === 2) s = "#green";
    else if (r === 3) s = "#yellow";
    else s = "#blue";

    colr = s.substr(1);
    playsound(colr);
    $(s).css("background-color", "black");
    setTimeout(function() {
      $(s).css("background-color", colr);
    }, blink);
    


  }
}

function playsound(input) {
  switch (input) {
    case "red":
      new Audio("sounds/red.mp3").play();
      break;
    case "green":
      new Audio("sounds/green.mp3").play();

      break;
    case "yellow":
      new Audio("sounds/yellow.mp3").play();

      break;
    case "blue":
      new Audio("sounds/blue.mp3").play();

      break;
    default:
      new Audio("sounds/wrong.mp3").play();
  }

}

function press(inp){

  $("#"+inp).css("background-color","grey");

  setTimeout(function() {
    $("#"+inp).css("background-color",inp);
  }, 100);

}
