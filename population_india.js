window.onload = function() {
var dataPoints = [];
var options =  {
	animationEnabled: true,
	theme: "light1",
	title: {
		text: "Population Of India"
	},
	
	axisY: {
		title: "Population",
        titleFontSize: 24
	},

    axisX: {
		title: "States",
        titleFontSize: 24
	},

	data: [{
		type: "pie", 
		yValueFormatString: "#,###",
		dataPoints: dataPoints
	}]
};
function addData(data) {
    data=data.data;
	for (var i = 0; i < data.length; i++) {
		dataPoints.push({
			y: parseInt(data[i].Population),
			label: data[i]["State / Union Territory"]
		});
	}
	$("#chartContainer").CanvasJSChart(options);

}
$.getJSON("http://localhost:3000/api/population_india_census2011", addData);

}