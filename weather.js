var onMainPage = true;
var unit = "\xB0C";

if (window.XMLHttpRequest) {

	document.getElementsByTagName("html")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.display = "flex";
	document.getElementsByTagName("body")[0].style["justify-content"] = "center";
	document.getElementsByTagName("body")[0].style["padding-top"] = "0px";
	document.getElementsByTagName("body")[0].style["padding-bottom"] = "0px";
	document.getElementsByTagName("header")[0].style["align-self"] = "center";
	document.getElementById("search-bar").focus();

}

function media() {
	var ds, gs, i;

	// PHONE
	if (document.documentElement.clientWidth < 480) {
		// set body padding
		document.getElementsByTagName("body")[0].style["padding-left"] = "5%";
		document.getElementsByTagName("body")[0].style["padding-right"] = "5%";
		// set header
		document.getElementsByTagName("header")[0].style.width = "100%";
		// set logo, search bar and submit button
		document.getElementById("logo").style.width = "100%";
		document.getElementById("logo").style["font-size"] = "48pt";
		document.getElementById("logo").style["margin-bottom"] = "15px";
		document.getElementById("search").style["flex-wrap"] = "wrap";
		document.getElementById("s").style.width = "100%";
		document.getElementById("submit").style["margin"] = "15px auto 0px auto";
		// set city name and weather description
		document.getElementById("city").style.width = "100%";
		document.getElementById("city-name").style["font-size"] = "42pt";
		document.getElementById("city-name").style["text-align"] = "center";
		document.getElementById("description").style["text-align"] = "center";
		// set temperature and weather icon
		document.getElementById("temperature").style.width = "auto";
		document.getElementById("weather-icon").style.width = "auto";
		// set graph width
		gs = document.getElementsByClassName("graph-container");
		for (i = 0; i < 5; i++) gs[i].style.width = "96%";
		// set forecast width
		ds = document.getElementsByClassName("day");
		for (i = 0; i < 5; i++) ds[i].style.width = "100%";
		// set wind and humidity
		document.getElementById("wind").style.width = "100%";
		document.getElementById("humidity").style.width = "100%";
	}
	// TABLET
	else if (document.documentElement.clientWidth > 480 && document.documentElement.clientWidth < 900) {
		// set body padding
		document.getElementsByTagName("body")[0].style["padding-left"] = "5%";
		document.getElementsByTagName("body")[0].style["padding-right"] = "5%";
		// set header
		document.getElementsByTagName("header")[0].style.width = "85%";
		// set logo and search bar
		document.getElementById("logo").style.width = "100%";
		document.getElementById("logo").style["font-size"] = "48pt";
		document.getElementById("logo").style["margin-bottom"] = "15px";
		document.getElementById("search").style["flex-wrap"] = "wrap";
		document.getElementById("s").style.width = "100%";
		document.getElementById("submit").style["margin"] = "15px auto 0px auto";
		// set city name and weather description
		document.getElementById("city").style.width = "100%";
		document.getElementById("city-name").style["font-size"] = "48pt";
		document.getElementById("city-name").style["text-align"] = "center";
		document.getElementById("description").style["text-align"] = "center";
		// set temperature and weather icon
		document.getElementById("temperature").style.width = "auto";
		document.getElementById("weather-icon").style.width = "auto";
		// set graph width
		gs = document.getElementsByClassName("graph-container");
		for (i = 0; i < 5; i++) gs[i].style.width = "96%";
		// set forecast width
		ds = document.getElementsByClassName("day");
		for (i = 0; i < 4; i++) ds[i].style.width = "50%";
		ds[4].style.width = "100%";
		// set wind and humidity
		document.getElementById("wind").style.width = "50%";
		document.getElementById("humidity").style.width = "50%";
	}
	// SMALL DESKTOP
	else if (document.documentElement.clientWidth > 900 && document.documentElement.clientWidth < 1200) {
		// set body padding
		document.getElementsByTagName("body")[0].style["padding-left"] = "10%";
		document.getElementsByTagName("body")[0].style["padding-right"] = "10%";
		// set header
		document.getElementsByTagName("header")[0].style.width = "85%";
		// set logo and search bar
		document.getElementById("logo").style.width = "100%";
		document.getElementById("logo").style["font-size"] = "48pt";
		document.getElementById("logo").style["margin-bottom"] = "15px";
		document.getElementById("search").style["flex-wrap"] = "wrap";
		document.getElementById("s").style.width = "100%";
		document.getElementById("submit").style["margin"] = "15px auto 0px auto";
		// set city name and weather description
		document.getElementById("city").style.width = "100%";
		document.getElementById("city-name").style["font-size"] = "54pt";
		document.getElementById("city-name").style["text-align"] = "center";
		document.getElementById("description").style["text-align"] = "center";
		// set temperature and weather icon
		document.getElementById("temperature").style.width = "auto";
		document.getElementById("weather-icon").style.width = "auto";
		// set graph width
		gs = document.getElementsByClassName("graph-container");
		for (i = 0; i < 5; i++) gs[i].style.width = "46%";
		// set forecast width
		ds = document.getElementsByClassName("day");
		ds[0].style.width = "50%";
		ds[1].style.width = "50%";
		for (i = 2; i < 5; i++) ds[i].style.width = "33.3%";
		// set wind and humidity
		document.getElementById("wind").style.width = "50%";
		document.getElementById("humidity").style.width = "50%";
	}
	// DESKTOP
	else if (document.documentElement.clientWidth > 1200 && document.documentElement.clientWidth < 1440) {
		// set body padding
		document.getElementsByTagName("body")[0].style["padding-left"] = "10%";
		document.getElementsByTagName("body")[0].style["padding-right"] = "10%";
		// set header
		document.getElementsByTagName("header")[0].style.width = "85%";
		// set logo and search bar
		document.getElementById("logo").style.width = "100%";
		document.getElementById("logo").style["font-size"] = "48pt";
		document.getElementById("logo").style["margin-bottom"] = "15px";
		document.getElementById("search").style["flex-wrap"] = "wrap";
		document.getElementById("s").style.width = "70%";
		document.getElementById("submit").style["margin"] = "0px 0px 0px 10px";
		// set city name and weather description
		document.getElementById("city").style.width = "60%";
		document.getElementById("city-name").style["font-size"] = "54pt";
		document.getElementById("city-name").style["text-align"] = "left";
		document.getElementById("description").style["text-align"] = "left";
		// set temperature and weather icon
		document.getElementById("temperature").style.width = "auto";
		document.getElementById("weather-icon").style.width = "auto";
		// set graph width
		gs = document.getElementsByClassName("graph-container");
		for (i = 0; i < 5; i++) gs[i].style.width = "46%";
		// set forecast width
		ds = document.getElementsByClassName("day");
		ds[0].style.width = "50%";
		ds[1].style.width = "50%";
		for (i = 2; i < 5; i++) ds[i].style.width = "33.3%";
		// set wind and humidity
		document.getElementById("wind").style.width = "50%";
		document.getElementById("humidity").style.width = "50%";
	}
	// LARGE DESKTOP
	else if (document.documentElement.clientWidth > 1440) {
		// set body padding
		document.getElementsByTagName("body")[0].style["padding-left"] = "10%";
		document.getElementsByTagName("body")[0].style["padding-right"] = "10%";
		// set header
		document.getElementsByTagName("header")[0].style.width = "85%";
		// set logo and search bar
		document.getElementById("logo").style["margin-bottom"] = "0px";
		document.getElementById("search").style["flex-wrap"] = "nowrap";
		document.getElementById("logo").style["font-size"] = "24pt";
		document.getElementById("logo").style.width = "160px";
		document.getElementById("logo").style.margin = "0px 10px 0px 0px";
		document.getElementById("s").style.width = "70%";
		document.getElementById("submit").style["margin"] = "0px 0px 0px 10px";
		// set city name and weather description
		document.getElementById("city").style.width = "65%";
		document.getElementById("city-name").style["font-size"] = "64pt";
		document.getElementById("city-name").style["text-align"] = "left";
		document.getElementById("description").style["text-align"] = "left";
		// set temperature and weather icon
		document.getElementById("temperature").style.width = "auto";
		document.getElementById("weather-icon").style.width = "auto";
		// set graph width
		gs = document.getElementsByClassName("graph-container");
		for (i = 0; i < 5; i++) gs[i].style.width = "29.3%";
		// set forecast width
		ds = document.getElementsByClassName("day");
		for (i = 0; i < 5; i++) ds[i].style.width = "20%";
		// set wind and humidity
		document.getElementById("wind").style.width = "50%";
		document.getElementById("humidity").style.width = "50%";
	}
}

function get_weather() {
	onMainPage = false;
	if (document.getElementById("unit").checked == false) {
		unit = "\xB0C";
	} else {
		unit = "\xB0F";
	}
	var bar = document.getElementById("search-bar");
	var x = bar.value;
	if (document.getElementById("unit").checked == true) {
		getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&units=imperial", function(err, data) {
			if (err != null) {
				console.log("Failed to read json data");
			}
			update_weather(data);
		});
		getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&cnt=6&units=imperial", function(err, data) {
			if (err != null) {
				console.log("Failed to read json data");
			}
			update_forecast(data);
		});
		getJSON("http://api.openweathermap.org/data/2.5/forecast?q=" + x + "&APPID=c6a5060483924264de49050df47e6584&units=imperial", function(err, data) {
			if (err != null) {
				console.log("Failed to read json data");
			} else update_hourly_forecast(data);
		});
	} else {
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

	media();
	// values once button is clicked
	document.getElementById("search").style["flex-wrap"] = "nowrap";
	document.getElementById("weather-icon").style.display = "flex";
	document.getElementById("city").style.display = "block";
	document.getElementById("temperature").style.display = "flex";
	document.getElementById("main").style.display = "block";
	document.getElementsByTagName("html")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.height = "100%";
	document.getElementsByTagName("body")[0].style.display = "block";
	document.getElementsByTagName("body")[0].style["justify-content"] = "center";
	document.getElementsByTagName("body")[0].style["padding-top"] = "0px";
	document.getElementsByTagName("body")[0].style["padding-bottom"] = "0px";
	document.getElementsByTagName("body")[0].style["padding-top"]= "2%";
	document.getElementById("submit").style.margin = "0px 0px 0px 10px";
	document.getElementById("s").style.width = "70%";
	document.getElementById("s").style["justify-content"] = "";
	document.getElementById("search-bar").style.width = "100%";
}

function update_weather(data) {

	document.getElementById("city-name").innerHTML = data.name;
	document.getElementById("description").innerHTML = toTitleCase(data.weather[0].description);
	document.getElementById("w-icon").src = "./images/" + data.weather[0].icon + ".png";
	document.getElementById("temp").innerHTML = Math.round(data.main.temp) + unit;
	document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
	if (document.getElementById("unit").checked == true) {
		document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " mph";
	} else {
		document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " m/s";
	}

	document.getElementById("timestamp").innerHTML =  Date();

	media();
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

	mins[0].innerHTML = Math.round(data.list[0].temp.min) + unit;
	mins[1].innerHTML = Math.round(data.list[1].temp.min) + unit;
	mins[2].innerHTML = Math.round(data.list[2].temp.min) + unit;
	mins[3].innerHTML = Math.round(data.list[3].temp.min) + unit;
	mins[4].innerHTML = Math.round(data.list[4].temp.min) + unit;

	maxs[0].innerHTML = Math.round(data.list[0].temp.max) + unit;
	maxs[1].innerHTML = Math.round(data.list[1].temp.max) + unit;
	maxs[2].innerHTML = Math.round(data.list[2].temp.max) + unit;
	maxs[3].innerHTML = Math.round(data.list[3].temp.max) + unit;
	maxs[4].innerHTML = Math.round(data.list[4].temp.max) + unit;
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
					left_scales[s].innerHTML += '<div style="height: 20px;">' + scale + unit + '</div>';
			}
			scale--;
		}
	} else {
		while (scale > 0) {
			for (s = 0; s < 5; s++) {
				// add new scale
					left_scales[s].innerHTML += '<div style="height: 20px;">' + scale + unit + '</div>';
			}
			scale--;
		}
	}

	// iterate through every temperature and populate graphs
	for (i = 0; i < data.cnt; i++) {
		var today = new Date();
		var d = today.getUTCDate();

		var dataD = data.list[i].dt_txt;
		var dd = parseInt(dataD.substring(8,11), 10);

		if (dd > d) {
			// get the time of the data
			var timestamp = data.list[i].dt_txt.toString();

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

function toggle() {
	if (onMainPage == false) {
		document.getElementById("submit").click();
	}
}

function submit(e) {
	if (e.keyCode == 13) {
        document.getElementById("submit").click();
		onMainPage = false;
    }
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
