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
	document.getElementById("graphs").innerHTML = create_graph(data);
}

function create_graph(data) {
	var greatest = -9999;
	var graphs = "";
	var i;

	for (i = 0; i < data.cnt; i++) {
		var cur = Math.abs(Math.round(data.list[i].main.temp));
		if (cur > greatest) greatest = cur;
	}
	var height = 16 * (greatest + 4) * 2;
	var scale = greatest + 3;
	document.getElementById("graphs").style.height = height.toString() + "px";
	for (i = 0; i < data.cnt; i++) {
		var time = data.list[i].dt_txt.toString();

		if (scale >= (0 - (greatest + 3))) {
			if (i % 4 == 0) {
				document.getElementById("left-scale").innerHTML += '<div style="height: 16px;">' + scale-- + '&deg;</div>';
			} else {
				document.getElementById("left-scale").innerHTML += '<div style="height: 16px;"></div>';
				scale--;
			}
		}

		var width = 100 / data.cnt;
		var temp = Math.round(data.list[i].main.temp);
		var temp_bar = document.getElementById("graphs").clientHeight / 2;

		if (temp < 0) temp_bar -= Math.abs(temp) * 16;
		else temp_bar += Math.abs(temp) * 16;

		if (i % 2 == 0) graphs += '<div class="graph-entry" style="height:' + temp_bar + 'px; background-color: #ffa64d; width:' + width + '%">' + temp + '</div>';
		else graphs += '<div class="graph-entry" style="height:' + temp_bar + 'px; width:' + width + '%">' + temp + '</div>';

		if (time.substring(11,13) == "12") document.getElementById("bottom-scale").innerHTML += '<div style="width: ' + width + '%;">12:00<br>PM</div>';
		else if (time.substring(11,13) == "00")  document.getElementById("bottom-scale").innerHTML += '<div style="width: ' + width + '%;">12:00<br>AM</div>';
		else document.getElementById("bottom-scale").innerHTML += '<div style="width: ' + width + '%;"></div>';
	}

	return graphs;
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
