window.onload = function() {

var dataPoints = [];

var options =  {
	animationEnabled: true,
	theme: "light1",
	title: {
		text: "State & Gender Ratio"
	},
	axisX: {
		title: "State",
		titleFontSize: 24,

	},
	axisY: {
		title: "Gender Ratio",
		titleFontSize: 24,

	},
	data: [{
		type: "bar", 
		yValueFormatString: "###,###",
		dataPoints: dataPoints
	}]
};

function addData(data) {
    data=data.data;
	for (var i = 0; i < data.length; i++) {
		dataPoints.push({
			y: parseInt(data[i]["Gender Ratio"]),
			label: data[i]["State / Union Territory"]
		});
	}
	$("#chartContainer").CanvasJSChart(options);

}
$.getJSON("http://localhost:3000/api/population_india_census2011", addData);

}