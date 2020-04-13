window.onload = function() {

var dataPoints = [];

var options =  {
	animationEnabled: true,
	theme: "light1",

	title: {
		text: "Hospital Beds"
	},
	axisX: {
		title: "States",
		titleFontSize: 24
	},
	axisY: {
		title: "Public Beds",
		titleFontSize: 24,
	},
	data: [{
		type: "splineArea", 
        color: "LightSeaGreen",
		yValueFormatString: "#,#",
		dataPoints: dataPoints
	}]
};

function addData(data) {
    data=data.data;
	for (var i = 0; i < data.length; i++) {
		dataPoints.push({
			label: data[i]["State/UT"],
			y: parseInt(data[i]["NumPublicBeds_HMIS"])
		});
	}
	$("#chartContainer").CanvasJSChart(options);

}
$.getJSON("https://covid19-ayusha.herokuapp.com/api/HospitalBedsIndia", addData);

}
