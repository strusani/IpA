function checkHoursModule(pages, mod){
  window.console && console.log("checking hours for mod " + mod);
	hours = pages[mod].data.hours_data;
	var isOpen = checkHours(hours);
	if(isOpen){
		window.console && console.log("open!");
		$("#mod"+mod +" img").attr("src", "modules/hours/hours_open.png");
	}else{
		window.console && console.log("closed :-(");
		$("#mod"+mod +" img").attr("src", "modules/hours/hours_closed.png");
	}
}

function checkForNewData(pages) {
	var type = '';
	for(mod in pages){
		type = pages[mod].name;
		switch (type){
			case "hours":
				//check opening hours
				window.console && console.log("found hours module: " + mod);
				checkHoursModule(pages, mod);
				break;
		}
	}
}
