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

	if(screen.width > 900){

		headerBar.innerHTML = "<div id='headerContents'><img onclick='"+'window.open("https://gcparksandresorts.github.io/travelorasnou")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'></div>";

		const headerContents = document.getElementById("headerContents");

		headerContents.innerHTML += "<a>Places to Visit</a> <a>Things to Do</a> <a>Vacation Planning</a> <a>Menu</a>";

	}else{
		console.log("Minimized Header");
		headerBar.innerHTML = "<div id='headerContents' style='text-align:center;'><img onclick='"+'window.open("https://gcparksandresorts.github.io/travelorasnou")'+"' src='https://gcparksandresorts.github.io/travelorasnou/files/images/logos/travelONlogo.png' id='headerLogo'> <a onclick='openHeaderMenu()'>MENU</a></div>";
	}
	createFooter();
}

// If small screen width, this menu will create the normal header elements inside the expandable menu
function openHeaderMenu(){

}

// Create the Footer and Populate it
function createFooter(){
	footer.innerHTML = "<br><div class='spacer'></div><div class='container'>(C) Oras Nou Ministry of Recreation | Department of Tourism</div><br><br> \
		<p><a>Legal Information</a> | <a>Business</a> | <a>MCBPO</a></p>";
}
