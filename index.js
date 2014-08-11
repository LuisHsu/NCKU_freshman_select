var Tutor_StartPage=0;
var Tutor_MinPage=0;
var Tutor_MaxPage=6;
var TimerCount=0;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53567358-1', 'auto');
  ga('send', 'pageview');

function left_hover(tog){
	if(tog==1){
		document.getElementById("left_Button").style.backgroundImage="url('Resources/left_button_hover.png')";
	}else{
		document.getElementById("left_Button").style.backgroundImage="url('Resources/left_button.png')";
	}
}

function left_Click(){
	Tutor_StartPage-=1;
	var rightTimer=setInterval(function (){if(TimerCount<80){document.getElementById("Tutorial_Frame").contentWindow.postMessage("left", "*");TimerCount+=1;}else{clearInterval(rightTimer);TimerCount=0;}},1);
	if (Tutor_StartPage==Tutor_MinPage){document.getElementById("left_Button").style.visibility="hidden";}
	if (Tutor_StartPage==(Tutor_MaxPage-1)){document.getElementById("right_Button").style.visibility="visible";}
}

function right_hover(tog){
	if(tog==1){
		document.getElementById("right_Button").style.backgroundImage="url('Resources/right_button_hover.png')";
	}else{
		document.getElementById("right_Button").style.backgroundImage="url('Resources/right_button.png')";
	}
}

function right_Click(){
	Tutor_StartPage+=1;
	var rightTimer=setInterval(function (){if(TimerCount<80){document.getElementById("Tutorial_Frame").contentWindow.postMessage("right", "*");TimerCount+=1;}else{clearInterval(rightTimer);TimerCount=0;}},1);
	if (Tutor_StartPage==(Tutor_MinPage+1)){document.getElementById("left_Button").style.visibility="visible";}
	if (Tutor_StartPage==Tutor_MaxPage){document.getElementById("right_Button").style.visibility="hidden";}
}