window.onload = function() {

var dataPoints = [];

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light1",
	title: {
		text: "ICMRTesting"
	},
	axisY: {
		title: "Total-Positive-Cases",
		titleFontSize: 24
	},
    axisX: {
		title: "Total-Individuals-Tested",
		titleFontSize: 24
	},
	data: [{
		type: "column",
		
		yValueFormatString: "#total_Cases VS ### Positive_Cases",
		dataPoints: dataPoints
	}]
});

function addData(data) {
    data=data.data;
	for (var i = 0; i < data.length; i++) {
		dataPoints.push({
			x: parseInt(data[i].TotalIndividualsTested),
			y: parseInt(data[i].TotalPositiveCases)
		});
	}
	chart.render();

}

$.getJSON("https://covid19-ayusha.herokuapp.com/api/ICMRTestingDetails", addData);

}
