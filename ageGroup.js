//age group
window.onload = function() {
 
	var dataPoints = [];
	 
	var chart1 = new CanvasJS.Chart("ageGroup", {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Age Group Details"
		},
		axisY: {
			title: "Cases",
			titleFontSize: 24
		},
		axisX: {
			title: "Age Group",
			titleFontSize: 24
		},
		data: [{
			type: "line",
            color: "#db1b46",
			yValueFormatString: "#,### case",
			dataPoints: dataPoints
		}]
	});
	 
	function addData(data) {
		data = data.data;
		for (var i = 0; i < data.length; i++) {
			dataPoints.push({
				label: data[i].AgeGroup,
				y: parseInt(data[i].TotalCases)
			});
		}
		chart1.render();
	 
	}
	 
	$.getJSON(https://covid19-ayusha.herokuapp.com/api/AgeGroupDetails", addData);
	 
	}
