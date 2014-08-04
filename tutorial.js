//Receive msg from left-right button
function receiveMsg(event)
{
	if(event.data=="left"){
		scrollBy(-10,0);
	}
	if(event.data=="right"){
		scrollBy(10,0);
	}
}
addEventListener("message", receiveMsg, false);