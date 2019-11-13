	const chartData1 = [
        ['Jan 18', 36.34],
        ['Feb 18', 36.79],
        ['Mär 18', 37.34],
        ['Apr 18', 37.14],
        ['Mai 18', 37.23],
        ['Jun 18', 37.13],
        ['Jul 18', 37.34],
        ['Aug 18', 22.49],
        ['Sep 18', 23.34],
        ['Okt 18', 24.56],
        ['Nov 18', 25.34],
        ['Den 18', 26.00],
        ['Jan 19', 27.66],
        ['Feb 19', 28.34],
        ['Mär 19', 29.34],
        ['Apr 19', 30.34],
        ['Mai 19', 31.34],
        ['Jun 19', 32.34],
        ['Jul 19', 33.34],
        ['Aug 19', 34.34],
        ['Sep 19', 35.34]
        ];
	const chartData2 = [
        ['Jan 18', 24.34],
        ['Feb 18', 25.34],
        ['Mär 18', 26.34],
        ['Apr 18', 27.34],
        ['Mai 18', 27.89],
        ['Jun 18', 28.34],
        ['Jul 18', 12.34],
        ['Aug 18', 13.34],
        ['Sep 18', 14.34],
        ['Okt 18', 16.34],
        ['Nov 18', 17.34],
        ['Den 18', 18.34],
        ['Jan 19', 19.34],
        ['Feb 19', 20.64],
        ['Mär 19', 21.94],
        ['Apr 19', 22.34],
        ['Mai 19', 23.34],
        ['Jun 19', 24.34],
        ['Jul 19', 25.34],
        ['Aug 19', 26.34],
        ['Sep 19', 27.34]
        ];
	const chartData3 = [
        ['Jan 18', 134.34],
        ['Feb 18', 135.34],
        ['Mär 18', 136.34],
        ['Apr 18', 123.34],
        ['Mai 18', 124.34],
        ['Jun 18', 125.34],
        ['Jul 18', 125.94],
        ['Aug 18', 126.34],
        ['Sep 18', 127.34],
        ['Okt 18', 129.34],
        ['Nov 18', 130.34],
        ['Den 18', 132.34],
        ['Jan 19', 133.34],
        ['Feb 19', 134.34],
        ['Mär 19', 135.34],
        ['Apr 19', 136.34],
        ['Mai 19', 137.34],
        ['Jun 19', 138.34],
        ['Jul 19', 139.34],
        ['Aug 19', 140.34],
        ['Sep 19', 142.34]
        ];
	const chartData4 = [
        ['Jan 18', 4.34],
        ['Feb 18', 5.34],
        ['Mär 18', 6.34],
        ['Apr 18', 7.34],
        ['Mai 18', 8.34],
        ['Jun 18', 10.34],
        ['Jul 18', 3.34],
        ['Aug 18', 4.34],
        ['Sep 18', 6.34],
        ['Okt 18', 8.34],
        ['Nov 18', 9.34],
        ['Den 18', 11.34],
        ['Jan 19', 13.34],
        ['Feb 19', 13.34],
        ['Mär 19', 13.34],
        ['Apr 19', 14.34],
        ['Mai 19', 15.34],
        ['Jun 19', 15.34],
        ['Jul 19', 15.34],
        ['Aug 19', 15.34],
        ['Sep 19', 16.34]
        ];

let chart1Container;
let chart2Container;
let chart3Container;
let chart4Container;
let checketf1;
let checketf2;
let checketf3;
let checketf4;
let inputetf1share;
let inputetf2share;
let inputetf3share;
let inputetf4share;

document.addEventListener("DOMContentLoaded", function(event) {

	const selectsalarydate = document.getElementById('salarydate');
	 inputetf1share = document.getElementById('etf1share');
	inputetf2share = document.getElementById('etf2share');
	inputetf3share = document.getElementById('etf3share');
	inputetf4share = document.getElementById('etf4share');

	if (selectsalarydate) {
		for (let i = 1; i < 32; i++) {
			let option = document.createElement('option');
			option.value = i;
			option.innerHTML = i;
			selectsalarydate.appendChild(option);
		}
	}

	checketf1 = document.getElementById('etf1');

	checketf1.addEventListener('change', (e) => {
		inputetf1share.value = 100;
		if (checketf1.checked == false) {
			inputetf1share.value = 0;
		}
		checkETFS(inputetf1share);
	});

	checketf2 = document.getElementById('etf2');
	checketf2.addEventListener('change', (e) => {
		inputetf2share.value = 100;
		if (!checketf2.checked) {
			inputetf2share.value = 0;
		}
		checkETFS(inputetf2share);
	});

	checketf3 = document.getElementById('etf3');
	checketf3.addEventListener('change', (e) => {
		inputetf3share.value = 100;
		if (!checketf3.checked) {
			inputetf3share.value = 0;
		}
		checkETFS(inputetf3share);
	});

	checketf4 = document.getElementById('etf4');
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
        width: 700,
        height: 200,
        legend: null
      };
      var chart = new google.visualization.LineChart(elem);
      chart.draw(data, options);
    }
