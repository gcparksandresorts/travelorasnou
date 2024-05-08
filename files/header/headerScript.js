const header = document.getElementById("header");
const footer = document.getElementById("footer");
const loader = document.getElementById("loader");

function endPageLoad() {
	// Close the loader after delay num
	loader.style.opacity = 0;
  	setTimeout(function(){loader.style.display='none'},1000);
}

// Create the Header and Populate it Depending on Screen Size
function createHeader(){
	console.clear();

	loader.innerHTML = "<div></div>";
	header.innerHTML = "<div id='headerSpacer'></div><div id='headerBar'></div>";

	const headerBar = document.getElementById("headerBar");

	headerBar.innerHTML = "<img onclick='"+'window.open("https://gcparksandresorts.github.io/travelorasnou")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'>";

	createFooter();
}

// If small screen width, this menu will create the normal header elements inside the expandable menu
function openHeaderMenu(){

}

// Create the Footer and Populate it
function createFooter(){
	
}
