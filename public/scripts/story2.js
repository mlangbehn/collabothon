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

	google.charts.load('current', {packages: ['corechart', 'line']});
	google.charts.setOnLoadCallback(drawAxisTickColors);

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

function drawAxisTickColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'Dogs');
      data.addColumn('number', 'Cats');

      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: 'Time',
          textStyle: {
            color: '#01579b',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          titleTextStyle: {
            color: '#01579b',
            fontSize: 16,
            fontName: 'Arial',
            bold: false,
            italic: true
          }
        },
        vAxis: {
          title: 'Popularity',
          textStyle: {
            color: '#1a237e',
            fontSize: 24,
            bold: true
          },
          titleTextStyle: {
            color: '#1a237e',
            fontSize: 24,
            bold: true
          }
        },
        colors: ['#a52714', '#097138']
      };
      var chart = new google.visualization.LineChart(document.getElementById('etfdiagram1'));
      chart.draw(data, options);
    }
