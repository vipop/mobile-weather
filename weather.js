if (window.XMLHttpRequest) {

	document.getElementsByTagName("html")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.display = "flex";
	document.getElementsByTagName("body")[0].style["justify-content"] = "center";
	document.getElementsByTagName("body")[0].style["padding-top"] = "0px";
	document.getElementsByTagName("body")[0].style["padding-bottom"] = "0px";
	document.getElementsByTagName("header")[0].style["align-self"] = "center";
	document.getElementById("search-bar").focus();

	document.getElementById("weather-icon").style.display = "none";
	document.getElementById("city").style.display = "none";
	document.getElementById("temperature").style.display = "none";
	document.getElementById("main").style.display = "none";

}

function get_weather() {
	var bar = document.getElementById("search-bar");
	var x = bar.value;
	getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&units=metric", function(err, data) {
		if (err != null) {
			console.log("Failed to read json data");
		}
		update_weather(data);
	});
	getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&cnt=6&units=metric", function(err, data) {
		if (err != null) {
			console.log("Failed to read json data");
		}
		update_forecast(data);
	});
	getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&units=metric", function(err, data) {
		if (err != null) {
			console.log("Failed to read json data");
		} else update_hourly_forecast(data);
	});
}

function update_weather(data) {
	document.getElementById("city-name").innerHTML = data.name;
	document.getElementById("description").innerHTML = toTitleCase(data.weather[0].description);
	document.getElementById("w-icon").src = "./images/" + data.weather[0].icon + ".png";
	document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "&deg;";
	document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
	document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
	document.getElementById("timestamp").innerHTML =  Date();

	document.getElementsByTagName("html")[0].style.height = "initial";
	document.getElementsByTagName("body")[0].style.height = "initial";
	document.getElementsByTagName("body")[0].style.display = "block";
	document.getElementsByTagName("body")[0].style["justify-content"] = "initial";
	document.getElementsByTagName("body")[0].style["padding-top"] = "intial";
	document.getElementsByTagName("body")[0].style["padding-bottom"] = "0px";
	document.getElementsByTagName("body")[0].style["align-self"] = "initial";
	document.getElementsByTagName("body")[0].style["padding-left"] = "10%";
	document.getElementsByTagName("body")[0].style["padding-right"] = "10%";
	document.getElementsByTagName("body")[0].style["padding-top"] = "5%";

	document.getElementsByTagName("body")[0].style["padding-top"]= "2%";
	document.getElementById("search").style.width = "80%";
	document.getElementById("search").style.display = "flex";
	document.getElementById("search").style["flex-wrap"] = "wrap";
	document.getElementById("search-bar").style.width = "60%";
	document.getElementById("search-bar").style.margin = "0px";
	document.getElementById("logo").style["font-size"] = "24pt";
	document.getElementById("logo").style.width = "160px";
	document.getElementById("logo").style.margin = "0px 10px 0px 0px";
	document.getElementById("logo").style["align-self"]= "center";
	document.getElementById("submit").style.margin = "0px 0px 0px 10px";
	document.getElementById("weather-icon").style.display = "flex";
	document.getElementById("city").style.display = "block";
	document.getElementById("temperature").style.display = "flex";
	document.getElementById("main").style.display = "block";
}

function update_forecast(data) {
	var days = document.getElementsByClassName("forecast-day-title");
	var icons = document.getElementsByClassName("forecast-icon");
	var mins = document.getElementsByClassName("min");
	var maxs = document.getElementsByClassName("max");
	var i;

	for (i = 1; i < 6; i++) {
		var firstdate = parseInt(data.list[i].dt);
		var date = new Date(0);
		date.setUTCSeconds(firstdate);

		var month = date.getUTCMonth();

		var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		days[i-1].innerHTML = months[month] + " " + date.getUTCDate();
		days[i+4].innerHTML = months[month] + " " + date.getUTCDate();
		icons[i-1].src = "./images/" + data.list[i].weather[0].icon + ".png";
	}

	mins[0].innerHTML = Math.round(data.list[0].temp.min) + "&deg;";
	mins[1].innerHTML = Math.round(data.list[1].temp.min) + "&deg;";
	mins[2].innerHTML = Math.round(data.list[2].temp.min) + "&deg;";
	mins[3].innerHTML = Math.round(data.list[3].temp.min) + "&deg;";
	mins[4].innerHTML = Math.round(data.list[4].temp.min) + "&deg;";

	maxs[0].innerHTML = Math.round(data.list[0].temp.max) + "&deg;";
	maxs[1].innerHTML = Math.round(data.list[1].temp.max) + "&deg;";
	maxs[2].innerHTML = Math.round(data.list[2].temp.max) + "&deg;";
	maxs[3].innerHTML = Math.round(data.list[3].temp.max) + "&deg;";
	maxs[4].innerHTML = Math.round(data.list[4].temp.max) + "&deg;";
}

function update_hourly_forecast(data) {
	create_graphs(data);
}

function create_graphs(data) {
	// initiate variables
	var greatest = -9999;
	var smallest = 9999;
	var graph = "";
	var i, j;
	var g = 0;
	var l = 0;
	var b = 0;
	var s;
	var width;
	var scale;
	var height;
	var zero_bar = 0;
	var temp;

	// get all the graphs
	var graphs = document.getElementsByClassName("graph");
	// get all the left scales
	var left_scales = document.getElementsByClassName("left-scale");
	// get all the bottom scales
	var bottom_scales = document.getElementsByClassName("bottom-scale");

	// find greatest temperature
	for (i = 0; i < data.cnt; i++) {
		var cur = Math.round(data.list[i].main.temp);
		if (cur > greatest) greatest = cur;
	}

	// find smallest temperature
	for (i = 0; i < data.cnt; i++) {
		var cur = Math.round(data.list[i].main.temp);
		if (cur < smallest) smallest = cur;
	}

	// calculate graph height and scale based on the greatest and smallest temperature
	scale = greatest;

	// clear previous scales
	left_scales[0].innerHTML = "";
	left_scales[1].innerHTML = "";
	left_scales[2].innerHTML = "";
	left_scales[3].innerHTML = "";
	left_scales[4].innerHTML = "";
	bottom_scales[0].innerHTML = "";
	bottom_scales[1].innerHTML = "";
	bottom_scales[2].innerHTML = "";
	bottom_scales[3].innerHTML = "";
	bottom_scales[4].innerHTML = "";

	// set the new scales
	if (smallest < 1) {
		while (scale > smallest - 1) {
			for (s = 0; s < 5; s++) {
				// add new scale
					left_scales[s].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			}
			scale--;
		}
	} else {
		while (scale > 0) {
			for (s = 0; s < 5; s++) {
				// add new scale
					left_scales[s].innerHTML += '<div style="height: 20px;">' + scale + '&deg;</div>';
			}
			scale--;
		}
	}

	// iterate through every temperature and populate graphs
	for (i = 0; i < data.cnt; i++) {
		//count++;
		// get the time of the data
		var timestamp = data.list[i].dt_txt.toString();

		// set graph height and scale based on the greatest temperature
		//height = 20 * greatest;
		//graphs[g].style.height = height + "px";

		// get temperature
		temp = Math.round(data.list[i].main.temp);

		if (smallest < 0) {
			zero_bar = Math.abs(smallest) * 20 + 20;
		} else zero_bar = 0;

		width = 100 / 8;

		// if the temperature is below zero then subtract
		if (temp < 0) zero_bar -= Math.abs(temp) * 20;
		// if the temperature is above zero then add
		else zero_bar += Math.abs(temp) * 20;

		// add bar to the graph
		if (i % 2 == 0) graph += '<div class="graph-entry" style="height:' + zero_bar + 'px; background-color: #FF9C09; width:' + width + '%">' + temp + '</div>';
		else graph += '<div class="graph-entry" style="height:' + zero_bar + 'px; width:' + width + '%">' + temp + '</div>';

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
				scale = greatest + 1;
				graph = "";
				l++;
				b++;
		}

	}

}

function getJSON(url, callback) {
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

function submit(e) {
	if (e.keyCode == 13) {
        document.getElementById("submit").click();
    }
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
