//If you put handleClick(), it will straight up call the function without checking click.
//So we need to use handleClick so that it passes the name of the function handleClick.
//This makes the function wait till click is triggered.
//document.querySelector("button").addEventListener("click", handleClick);
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("/sounds/tom-1.mp3"); //creating HTML audio Element
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("/sounds/tom-2.mp3"); //creating HTML audio Element
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("/sounds/tom-3.mp3"); //creating HTML audio Element
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("/sounds/tom-4.mp3"); //creating HTML audio Element
                tom4.play();
                break;

            case "j":
                var snare = new Audio("/sounds/snare.mp3"); //creating HTML audio Element
                snare.play();
                break;

            case "k":
                var crash = new Audio("/sounds/crash.mp3"); //creating HTML audio Element
                crash.play();
                break;

            case "l":
                var kick = new Audio("/sounds/kick-bass.mp3"); //creating HTML audio Element
                kick.play();
                break;

            default: console.log(buttonInnerHTML);

            }
    });
}
