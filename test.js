var smallBox = document.getElementById("smallBox");
var containerSection = document.getElementById("containerSection");
var fullSectionWidth = containerSection.clientWidth; 
var leftSide = containerSection.offsetLeft; 
var rightSide = containerSection.offsetRight; 
var smallBoxPos = leftSide; 
var marginEqualizer = fullSectionWidth/8;
var testRealWidth = Math.floor(fullSectionWidth + marginEqualizer);

console.log(testRealWidth);
console.log(fullSectionWidth);


window.addEventListener("resize", calculateBrowserMetrics);

function calculateBrowserMetrics(){

	 console.log("the window is being resized");

	 smallBox = document.getElementById("smallBox");
	 containerSection = document.getElementById("containerSection");
	 fullSectionWidth = containerSection.clientWidth; 
	 leftSide = containerSection.offsetLeft; 
	 rightSide = containerSection.offsetRight; 
	 marginEqualizer = fullSectionWidth/8;
     testRealWidth = Math.floor(fullSectionWidth + marginEqualizer);
		
	 //console.log(fullSectionWidth);
	 //console.log(boundingParentTest); 
}



//var boundingParentTest = containerSection.getBoundingClientRect();



startAnimation();

function startAnimation(){


	//var fullSectionWidth = 1140; 
	
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

		//console.log(fullSectionWidth);

        if (smallBoxPos === testRealWidth){
           clearInterval(interval);
           startReverse();
           console.log("dit wordt een keer uitgevoerd");
        }

        //console.log(boundingParentTest);
	}


	function reverseBlock(){
		smallBox.style.left = smallBoxPos+'px';
		smallBoxPos--;
		//console.log(leftSide);

        if (smallBoxPos === leftSide){
           clearInterval(interval);
           startForward();
        }
	}
}