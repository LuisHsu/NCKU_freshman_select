var page=1;
var TimerCount=0;

function left_hover(tog){
	if(tog==1){
		document.getElementById("left_Button").style.backgroundImage="url('Resources/left_button_hover.png')";
	}else{
		document.getElementById("left_Button").style.backgroundImage="url('Resources/left_button.png')";
	}
}

function left_Click(){
	page-=1;
	var rightTimer=setInterval(function (){if(TimerCount<80){document.getElementById("Tutorial_Frame").contentWindow.postMessage("left", "*");TimerCount+=1;}else{clearInterval(rightTimer);TimerCount=0;}},1);
	if (page==1){document.getElementById("left_Button").style.visibility="hidden";}
	if (page==4){document.getElementById("right_Button").style.visibility="visible";}
}

function right_hover(tog){
	if(tog==1){
		document.getElementById("right_Button").style.backgroundImage="url('Resources/right_button_hover.png')";
	}else{
		document.getElementById("right_Button").style.backgroundImage="url('Resources/right_button.png')";
	}
}

function right_Click(){
	page+=1;
	var rightTimer=setInterval(function (){if(TimerCount<80){document.getElementById("Tutorial_Frame").contentWindow.postMessage("right", "*");TimerCount+=1;}else{clearInterval(rightTimer);TimerCount=0;}},1);
	if (page==2){document.getElementById("left_Button").style.visibility="visible";}
	if (page==5){document.getElementById("right_Button").style.visibility="hidden";}
}