                // Used to toggle the menu on small screens when clicking on the menu button
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
