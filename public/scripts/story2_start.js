let chartData = [];

for (let i = 1; i < 366; i++) {
	if (Math.floor(Math.random() * 111) % 2) {
		let date = new Date(Date.now() - ((365-i)*60*60*24*1000));
		let curdate = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
		chartData.push([curdate, i*Math.random() * 3 / 15]);
	}
}

let chart1Container;

document.addEventListener("DOMContentLoaded", function(event) {

    chart1Container = document.getElementById('chart1');
console.log(chart1Container);
	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawChart1);

});


function drawChart1() { drawAxisTickColors(chartData, chart1Container);}

function drawAxisTickColors(chartData, elem) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Month');
      data.addColumn('number', 'Price');

      data.addRows(chartData);

      var options = {
        hAxis: {
          title: 'Time',
          textStyle: {
            color: '#01579b',
            fontSize: 10,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          titleTextStyle: {
            color: '#01579b',
            fontSize: 9,
            fontName: 'Arial',
            bold: false,
            italic: true
          }
        },
        vAxis: {
          title: 'Price',
          textStyle: {
            color: '#1a237e',
            fontSize: 10,
            bold: true
          },
          titleTextStyle: {
            color: '#1a237e',
            fontSize: 10,
            bold: true
          }
        },
        colors: ['#a52714'],
        width: 300,
        height: 80,
        legend: null
      };
      var chart = new google.visualization.LineChart(elem);
      chart.draw(data, options);
    }
