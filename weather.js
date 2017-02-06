if (window.XMLHttpRequest) {

	var getJSON = function(url, callback) {
	    var xhr = new XMLHttpRequest();
	    xhr.open("get", url, true);
	    xhr.responseType = "json";
	    xhr.onload = function() {
	      var status = xhr.status;
	      if (status == 200) {
	        callback(null, xhr.response);
	      } else {
	        callback(status);
	      }
	    };
	    xhr.send();
	};

	getJSON("cur_weather.json", function(err, data) {
		if (err != null) {
			console.log("Failed to read cur_weather.json");
		}
		update_weather(data);
	});

	getJSON("forecast.json", function(err, data) {
		if (err != null) {
			console.log("Failed to read forecast.json");
		} else update_forecast(data);
	});

}

function update_weather(data) {
	document.getElementById("city-name").innerHTML = data.name;
	document.getElementById("description").innerHTML = toTitleCase(data.weather[0].description);
	document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
	document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
	document.getElementById("timestamp").innerHTML =  Date();
}

function update_forecast(data) {
	create_graphs(data);
}

function create_graphs(data) {
	// initiate variables
	var greatest = -9999;
	var graph = "";
	var i, j;
	var g = 0;
	var l = 0;
	var b = 0;

	// get all the graphs
	var graphs = document.getElementsByClassName("graph");
	// get all the left scales
	var left_scales = document.getElementsByClassName("left-scale");
	// get all the bottom scales
	var bottom_scales = document.getElementsByClassName("bottom-scale");

	// find greatest temperature
	for (i = 0; i < data.cnt; i++) {
		var cur = Math.abs(Math.round(data.list[i].main.temp));
		if (cur > greatest) greatest = cur;
	}

	// calculate graph height and scale based on the greatest temperature
	var scale = greatest + 1;

	// set the left scales
	//j = greatest + 2;
	while (scale >= -Math.abs(greatest + 1)) {
		//if (j % 4 == 0) {
			left_scales[0].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			left_scales[1].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			left_scales[2].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			left_scales[3].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			left_scales[4].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			scale--;
		//	j--;
		//} else {
		//	left_scales[0].innerHTML += '<div style="height: 20px;"></div>';
		//	left_scales[1].innerHTML += '<div style="height: 20px;"></div>';
		//	left_scales[2].innerHTML += '<div style="height: 20px;"></div>';
		//	left_scales[3].innerHTML += '<div style="height: 20px;"></div>';
		//	left_scales[4].innerHTML += '<div style="height: 20px;"></div>';
		//	scale--;
		//	j--;
		//}
	}

	// count
	var count = 1;
	var width;

	// iterate through every temperature and populate graphs
	for (i = 0; i < data.cnt; i++) {
		//count++;
		// get the time of the data
		var timestamp = data.list[i].dt_txt.toString();

		// set graph height and scale based on the greatest temperature
		var height = 20 * (greatest + 2) * 2;
		graphs[g].style.height = height + "px";

		// get temperature
		var temp = Math.round(data.list[i].main.temp);
		// initialize the height of the temperature bar to half of the graph's height
		var temp_bar = height / 2;

		width = 100 / 8;

		// if the temperature is below zero then subtract
		if (temp < 0) temp_bar -= Math.abs(temp) * 20;
		// if the temperature is above zero then add
		else temp_bar += Math.abs(temp) * 20;

		// add bar to the graph
		if (i % 2 == 0) graph += '<div class="graph-entry" style="height:' + temp_bar + 'px; background-color: #ffa64d; width:' + width + '%">' + temp + '</div>';
		else graph += '<div class="graph-entry" style="height:' + temp_bar + 'px; width:' + width + '%">' + temp + '</div>';

		var time = parseInt(timestamp.substring(11,13), 10);
		var timeDisplay;
		var timePeriod;

		if (time == 0) {
			timePeriod = "AM";
			timeDisplay = 12;
		}
		else if (time > 0 && time < 12) {
			timePeriod = "AM";
			timeDisplay = time;
		}
		else if (time == 12) {
			timePeriod = "PM";
			timeDisplay = time;
		}
		else {
			timePeriod = "PM";
			timeDisplay = time % 12;
		}

		// set bottom scale
		bottom_scales[b].innerHTML += '<div style="width: ' + width + '%;">' + timeDisplay + ':00<br />' + timePeriod + '</div>';

		if (i + 1 == data.cnt || data.list[i+1].dt_txt.toString().substring(11,13) == "00") {
				graphs[g++].innerHTML = graph;
				//scale = greatest + 4;
				graph = "";
				l++;
				b++;
				//if (count == 8) count = 1;
		}

	}

}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
