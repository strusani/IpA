
var currentTime = new Date();
var dayOfWeek = currentTime.getDay();
function checkHours(hours){
  window.console && console.log("checking opening hours: " + hours);
	var todayHours = hours[dayOfWeek];
	var todayOpen = new Date(currentTime.toDateString()  + " " + todayHours[0]);
	var todayClose = new Date(currentTime.toDateString()  + " " + todayHours[1]);	
	
	window.console && console.log("today's hours: " + todayOpen + " to " + todayClose);
	
	var isOpen = false;
	//currentTime.isBetween(todayOpen, todayClose);
	if(currentTime >= todayOpen && currentTime <= todayClose){
		isOpen = true;
	}
	window.console && console.log("Is Open?:" + isOpen);
	return isOpen;
}

				
