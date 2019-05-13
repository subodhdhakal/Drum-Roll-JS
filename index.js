//If you put handleClick(), it will straight up call the function without checking click.
//So we need to use handleClick so that it passes the name of the function handleClick.
//This makes the function wait till click is triggered.
//document.querySelector("button").addEventListener("click", handleClick);
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    });

}

// var audio = new Audio("/sounds/tom-1.mp3"); //creating HTML audio Element
//     audio.play();