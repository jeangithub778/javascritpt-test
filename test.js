var smallBox = document.getElementById("smallBox");
var containerSection = document.getElementById("containerSection");
var fullSectionWidth = containerSection.clientWidth; 
var leftSide = containerSection.offsetLeft; 
var smallBoxWidth = smallBox.clientWidth;
var smallBoxPos = leftSide; 
var marginEqualizer = fullSectionWidth/8;
var testRealWidth = Math.floor(fullSectionWidth + marginEqualizer) - (smallBoxWidth/2);


window.addEventListener("resize", calculateBrowserMetrics);

function calculateBrowserMetrics(){

	 fullSectionWidth = containerSection.clientWidth; 
	 leftSide = containerSection.offsetLeft;

	 //fullSectionWidth is divided by eight to get 10% of fullSectionWidth because fullSection is 80%
	 marginEqualizer = fullSectionWidth/8;
     testRealWidth = Math.floor(fullSectionWidth + marginEqualizer) - (smallBoxWidth/2);

     //1 added to the leftSide so that it doesnt conflict with reverseBlock function
     smallBoxPos = leftSide + 1;
}


startAnimation();

function startAnimation(){
	
	var interVal;

	startForward();

	function startForward() {
		interval = setInterval(forwardBlock, 1);
	}

	function startReverse(){
		interval = setInterval(reverseBlock, 1);
	}

	function forwardBlock(){
		smallBox.style.left = smallBoxPos+'px';
		smallBoxPos++;

        if (smallBoxPos === testRealWidth){
           clearInterval(interval);
           startReverse();
        }
	}

	function reverseBlock(){
		smallBox.style.left = smallBoxPos+'px';
		smallBoxPos--;

        if (smallBoxPos === leftSide){
           clearInterval(interval);
           startForward();
        }
	}
}