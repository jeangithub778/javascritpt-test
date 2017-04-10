var smallBox = document.getElementById("smallBox");
var containerSection = document.getElementById("containerSection");
var fullSectionWidth = containerSection.clientWidth; 
var leftSide = containerSection.offsetLeft; 
var rightSide = containerSection.offsetRight; 
var smallBoxPos = leftSide; 




window.addEventListener("resize", calculateBrowserMetrics);

function calculateBrowserMetrics(){

	       console.log("the window is being resized");

	 smallBox = document.getElementById("smallBox");
	 containerSection = document.getElementById("containerSection");
	 fullSectionWidth = containerSection.clientWidth; 
	 leftSide = containerSection.offsetLeft; 
	 rightSide = containerSection.offsetRight; 
	 smallBoxPos = leftSide; 

}




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

        if (smallBoxPos === fullSectionWidth){
           clearInterval(interval);
           startReverse();
           console.log("dit wordt een keer uitgevoerd");
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