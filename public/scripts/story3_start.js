const url = 'data/balance.txt';

const bla = fetch(url)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) { console.log(data);});

document.addEventListener("DOMContentLoaded", function(event) {

    chart1Container = document.getElementById('chart1');
	//google.charts.load('current', {packages: ['corechart', 'line']});
	//google.charts.setOnLoadCallback(drawChart1);

});
