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
	document.getElementById("city").innerHTML = data.name;
	document.getElementById("description").innerHTML = toTitleCase(data.weather[0].description);
	document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
	document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
	document.getElementById("timestamp").innerHTML =  Date();
}

function update_forecast(data) {
	document.getElementById("graph").innerHTML = create_graph(data);
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function create_graph(data) {
	var greatest = -9999;
	var graph = "";
	var i;

	for (i = 0; i < data.cnt; i++) {
		var cur = Math.abs(Math.round(data.list[i].main.temp));
		if (cur > greatest) greatest = cur;
	}
	var height = 10 * (greatest + 5) * 2;
	document.getElementById("graph").style.height = height.toString() + "px";
	for (i = 0; i < data.cnt; i++) {
		var width = 100 / data.cnt;
		var temp = Math.round(data.list[i].main.temp);
		var temp_bar = document.getElementById("graph").clientHeight / 2;
		if (temp < 0) temp_bar -= Math.abs(temp) * 10;
		else temp_bar += Math.abs(temp) * 10;
		if (i % 2 == 0) graph += '<div class="graph-entry" style="height:' + temp_bar + 'px; background-color: #ffa64d; width:' + width + '%">' + temp + '</div>';
		else graph += '<div class="graph-entry" style="height:' + temp_bar + 'px; width:' + width + '%">' + temp + '</div>';
	}

	return graph;
}
