
startAnimation();

function startAnimation(){

	var smallBox = document.getElementById("smallBox");
	var containerSection = document.getElementById("containerSection");
	var fullSectionWidth = containerSection.clientWidth; 
	var leftSide = containerSection.offsetLeft; 
	var rightSide = containerSection.offsetRight; 
	var smallBoxPos = leftSide; 

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
		//console.log(fullSectionWidth);

        if (smallBoxPos === leftSide){
           clearInterval(interval);
           startForward();
        }
	}
}