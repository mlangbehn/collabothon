google.charts.load('current', {packages: ['corechart', 'line']});

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
let lastGiro = 0;
let currentGiro = 0;

document.addEventListener("DOMContentLoaded", function(event) {

    chart1Container = document.getElementById('chart1');
    balanceContainter = document.getElementById('balancelist');
    endBalanceContainter = document.getElementById('endbalance');
    balanceContainter.innerHTML = '';
	//google.charts.setOnLoadCallback(drawChart1);

});

function prepareData(data) {
	let currentBalanceContainer;
	let className;
	let saldo;
	let endSaldo = 0;
	let saldoGiro = 0;
	let y = 0;

	balanceHeadContainer = document.createElement('div');
	balanceHeadContainer.className = "balancehead";
	balanceHeadDate = document.createElement('div');
	balanceHeadDate.className = "balanceheadline balanceheaddate";
	balanceHeadDate.innerHTML = "Date";
	balanceHeadContainer.appendChild(balanceHeadDate);
	balanceHeadValue = document.createElement('div');
	balanceHeadValue.className = "balanceheadline balanceheadvalue";
	balanceHeadValue.innerHTML = "Giro";
	balanceHeadContainer.appendChild(balanceHeadValue);
	giroHeadValue = document.createElement('div');
	giroHeadValue.className = "balanceheadline giroheadvalue";
	giroHeadValue.innerHTML = "Brokerage";
	balanceHeadContainer.appendChild(giroHeadValue);
	balanceContainter.appendChild(balanceHeadContainer);
	
	for(let i = 0; i < data.length; i++) {
		/* append data for google charts */
		chartData1.push([data[i].date, data[i].checking_acoount, data[i].brokerage_account]);

		currentBalance = data[i].checking_acoount;
		currentGiro = data[i].brokerage_account;
		
		//if (currentBalance === lastBalance) continue;

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
		
		if (currentGiro > lastGiro) {
			saldoGiro = currentGiro - lastGiro;
		} else {
			saldoGiro = lastGiro- currentGiro;
		}
		
		if (y % 2 === 0) {
			className += " odd";
		} else {
			className += " even";
		}
		y++;
		lastBalance = currentBalance;		
		lastGiro = currentGiro;		

		currentBalanceContainer = document.createElement('div');
		currentBalanceContainer.className = className;
		currentBalanceMonth = document.createElement('div');
		currentBalanceMonth.innerHTML = data[i].date;
		currentBalanceMonth.className = "balancedate";
		currentBalanceValue = document.createElement('div');
		currentBalanceValue.innerHTML = saldo + " €";
		currentBalanceValue.className = "balancevalue";
		currentGiroValue = document.createElement('div');
		currentGiroValue.innerHTML = saldoGiro + " €";
		currentGiroValue.className = "girovalue";
		currentBalanceContainer.appendChild(currentBalanceMonth);
		currentBalanceContainer.appendChild(currentBalanceValue);
		currentBalanceContainer.appendChild(currentGiroValue);
		balanceContainter.appendChild(currentBalanceContainer);
	}
	endBalanceContainter.innerHTML = endSaldo + " €";
	drawChart1();
}

function drawChart1() { drawAxisTickColors(chartData1, chart1Container); }

function drawAxisTickColors(chartData, elem) {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Date');
      data.addColumn('number', 'Account (checking)');
      data.addColumn('number', 'Account (broker)');

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
          title: 'Balance',
          textStyle: {
            color: '#1a237e',
            fontSize: 12,
            bold: true
          },
          titleTextStyle: {
            color: '#1a237e',
            fontSize: 14,
            bold: true
          }
        },
        colors: ['#000', '#0F0'],
        width: 1150,
        height: 550,
        legend: null
      };
      var chart = new google.visualization.LineChart(elem);
      chart.draw(data, options);
    }
