function myP() {
	alert("welcome to jacey's endless suffering :D");
}

function changeHeading() {
	document.getElementById('heading').style.color="red";
}

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scrolling").className = "scrolling";
  } else {
    document.getElementById("scrolling").className = "";
  }
}

function mouseDown() {
	document.getElementById("firstparagraph").style.color = "green";
}

function mouseUp() {
	document.getElementById("firstparagraph").style.color = "pink";
}

function fontSizeUp() {
	document.getElementById("secondparagraph").style.fontSize = "10em";
}

function fontSizeDown() {
	document.getElementById("secondparagraph").style.fontSize = "0.5em";
}

function myFunction() {
	document.querySelector(".thirdparagraph").style.backgroundColor = "red";
}

function changingColor() {
	var x = document.getElementById("lastP").querySelectorAll(".fourthP"); x[0].style.backgroundColor = "purple";
}