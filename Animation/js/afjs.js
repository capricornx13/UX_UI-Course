                // Used to toggle the menu on small screens when clicking on the menu button
var myJet;

function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

//script for the form
function openForm(){
    document.getElementById("myForm").style.display="block";
}
                  
function closeForm(){
    document.getElementById("myForm").style.display="none";
}
  
function mySound(){
    myJet = new sound("./sounds/jet.mp3");
    myJet.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }
    this.stop = function(){
      this.sound.pause();
    }
  }
