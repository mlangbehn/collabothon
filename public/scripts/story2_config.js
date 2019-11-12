	const chartData1 = [
        ['Jan 18', 36.34],
        ['Feb 18', 46.79],
        ['Mär 18', 73.34],
        ['Apr 18', 97.14],
        ['Mai 18', 20.23],
        ['Jun 18', 16.13],
        ['Jul 18', 89.34],
        ['Aug 18', 56.49],
        ['Sep 18', 37.34],
        ['Okt 18', 70.56],
        ['Nov 18', 43.34],
        ['Den 18', 11.00],
        ['Jan 19', 66.66],
        ['Feb 19', 89.34],
        ['Mär 19', 12.34],
        ['Apr 19', 54.34],
        ['Mai 19', 34.34],
        ['Jun 19', 90.34],
        ['Jul 19', 56.34],
        ['Aug 19', 89.34],
        ['Sep 19', 45.34]
        ];
	const chartData2 = [
        ['Jan 18', 34.34],
        ['Feb 18', 45.34],
        ['Mär 18', 36.34],
        ['Apr 18', 67.34],
        ['Mai 18', 34.89],
        ['Jun 18', 38.34],
        ['Jul 18', 12.34],
        ['Aug 18', 56.34],
        ['Sep 18', 37.34],
        ['Okt 18', 56.34],
        ['Nov 18', 43.34],
        ['Den 18', 11.34],
        ['Jan 19', 45.34],
        ['Feb 19', 78.34],
        ['Mär 19', 67.34],
        ['Apr 19', 54.34],
        ['Mai 19', 36.34],
        ['Jun 19', 90.34],
        ['Jul 19', 12.34],
        ['Aug 19', 15.34],
        ['Sep 19', 36.34]
        ];
	const chartData3 = [
        ['Jan 18', 34.34],
        ['Feb 18', 35.34],
        ['Mär 18', 36.34],
        ['Apr 18', 23.34],
        ['Mai 18', 67.34],
        ['Jun 18', 38.34],
        ['Jul 18', 16.34],
        ['Aug 18', 66.34],
        ['Sep 18', 37.34],
        ['Okt 18', 99.34],
        ['Nov 18', 43.34],
        ['Den 18', 11.34],
        ['Jan 19', 89.34],
        ['Feb 19', 89.34],
        ['Mär 19', 67.34],
        ['Apr 19', 54.34],
        ['Mai 19', 44.34],
        ['Jun 19', 90.34],
        ['Jul 19', 33.34],
        ['Aug 19', 23.34],
        ['Sep 19', 23.34]
        ];
	const chartData4 = [
        ['Jan 18', 34.34],
        ['Feb 18', 35.34],
        ['Mär 18', 36.34],
        ['Apr 18', 23.34],
        ['Mai 18', 67.34],
        ['Jun 18', 76.34],
        ['Jul 18', 16.34],
        ['Aug 18', 88.34],
        ['Sep 18', 37.34],
        ['Okt 18', 39.34],
        ['Nov 18', 66.34],
        ['Den 18', 11.34],
        ['Jan 19', 45.34],
        ['Feb 19', 89.34],
        ['Mär 19', 67.34],
        ['Apr 19', 90.34],
        ['Mai 19', 36.34],
        ['Jun 19', 90.34],
        ['Jul 19', 90.34],
        ['Aug 19', 15.34],
        ['Sep 19', 50.34]
        ];

let chart1Container;
let chart2Container;
let chart3Container;
let chart4Container;

document.addEventListener("DOMContentLoaded", function(event) {

	const selectsalarydate = document.getElementById('salarydate12');
	const inputetf1share = document.getElementById('etf1share');
	const inputetf2share = document.getElementById('etf2share');
	const inputetf3share = document.getElementById('etf3share');
	const inputetf4share = document.getElementById('etf4share');

	if (selectsalarydate) {
		for (let i = 1; i < 32; i++) {
			let option = document.createElement('option');
			option.value = i;
			option.innerHTML = i;
			selectsalarydate.appendChild(option);
		}
	}

	const checketf1 = document.getElementById('etf1');

	checketf1.addEventListener('change', (e) => {
		inputetf1share.value = 100;
		if (checketf1.checked == false) {
			inputetf1share.value = 0;
		}
		checkETFS(inputetf1share);
	});

	const checketf2 = document.getElementById('etf2');
	checketf2.addEventListener('change', (e) => {
		inputetf2share.value = 100;
		if (!checketf2.checked) {
			inputetf2share.value = 0;
		}
		checkETFS(inputetf2share);
	});

	const checketf3 = document.getElementById('etf3');
	checketf3.addEventListener('change', (e) => {
		inputetf3share.value = 100;
		if (!checketf3.checked) {
			inputetf3share.value = 0;
		}
		checkETFS(inputetf3share);
	});

	const checketf4 = document.getElementById('etf4');
	checketf4.addEventListener('change', (e) => {
		inputetf4share.value = 100;
		if (!checketf4.checked) {
			inputetf4share.value = 0;
		}
		checkETFS(inputetf4share);
	});

    chart1Container = document.getElementById('etfdiagram1');
    chart2Container = document.getElementById('etfdiagram2');
    chart3Container = document.getElementById('etfdiagram3');
    chart4Container = document.getElementById('etfdiagram4');

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawChart1);
	google.charts.setOnLoadCallback(drawChart2);
	google.charts.setOnLoadCallback(drawChart3);
	google.charts.setOnLoadCallback(drawChart4);

});


function checkETFS(input) {
	let sum = 0;
	const val1 = (checketf1.checked) ? parseFloat(inputetf1share.value) : 0;
	const val2 = (checketf2.checked) ? parseFloat(inputetf2share.value) : 0;
	const val3 = (checketf3.checked) ? parseFloat(inputetf3share.value) : 0;
	const val4 = (checketf4.checked) ? parseFloat(inputetf4share.value) : 0;

	sum = ((val1 + val2 + val3 + val4) > 0 ? (val1 + val2 + val3 + val4) : 0);
	let	checked = ((checketf1.checked) ? 1 : 0) + ((checketf2.checked) ? 1 : 0) + ((checketf3.checked) ? 1 : 0) + ((checketf4.checked) ? 1 : 0);

	let part;
	part = 100 / checked;
	if (checketf1.checked) {
		inputetf1share.value = part;
	}

	if (checketf2.checked) {
		inputetf2share.value = part;
	}

	if (checketf3.checked) {
		inputetf3share.value = part;
	}

	if (checketf4.checked) {
		inputetf4share.value = part;
	}
}

function drawChart1() { drawAxisTickColors(chartData1, chart1Container);}
function drawChart2() { drawAxisTickColors(chartData2, chart2Container);}
function drawChart3() { drawAxisTickColors(chartData3, chart3Container);}
function drawChart4() { drawAxisTickColors(chartData4, chart4Container);}

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
