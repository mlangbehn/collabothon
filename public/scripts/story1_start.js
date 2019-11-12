const url = 'data/balance.txt';

const bla = fetch(url)
	.then((resp) => resp.json()) // Transform the data into json
	.then(function (data) { prepareData(data);});

let chart1Container;
let balanceContainter;
let endBalanceContainter;
let chartData1 = [];
let balances = [];
let lastBalance = 0;
let currentBalance = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    chart1Container = document.getElementById('chart1');
    balanceContainter = document.getElementById('balancelist');
    endBalanceContainter = document.getElementById('endbalance');
    balanceContainter.innerHTML = '';
	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawChart1);

});


function prepareData(data) {
	let currentBalanceContainer;
	let className;
	let saldo;
	let endSaldo = 0;
	for(let i = 0; i < data.length; i++) {
		/* append data for google charts */
		chartData1.push([data[i].date, data[i].withoutinterest]);

		currentBalance = data[i].withoutinterest;
		
		if (currentBalance === lastBalance) continue;

		/* update content */
		if (currentBalance > lastBalance) {
			className = 'income';
			saldo = currentBalance - lastBalance;
			endSaldo += saldo;
		} else {
			className = 'outcome';
			saldo =  lastBalance - currentBalance;
			endSaldo -= saldo;
		}

		lastBalance = currentBalance;

		currentBalanceContainer = document.createElement('div');
		currentBalanceContainer.className = className;
		currentBalanceMonth = document.createElement('div');
		currentBalanceMonth.innerHTML = data[i].date;
		currentBalanceValue = document.createElement('div');
		currentBalanceValue.innerHTML = saldo;
		currentBalanceContainer.appendChild(currentBalanceMonth);
		currentBalanceContainer.appendChild(currentBalanceValue);
		balanceContainter.appendChild(currentBalanceContainer);
	}
	endBalanceContainter.innerHTML = endSaldo;
}

function drawChart1() { drawAxisTickColors(chartData1, chart1Container); }

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
