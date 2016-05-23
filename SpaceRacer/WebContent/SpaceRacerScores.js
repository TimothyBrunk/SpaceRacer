
var table = document.createElement('table');
var scoresDiv = document.getElementById('scoresDiv');

function submitProcess() {
	addScore();


}

function addScore() {


	var userScore = {name:document.getElementById('name').value, score:document.getElementById('playerScore').value}
	console.log(userScore);
	var jsonString = JSON.stringify(userScore);
	console.log(jsonString);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', "rest/scores");
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}
	};
	xhr.send(jsonString);


};

addEventListener('load', function() {
	// Check that js file loads
	console.log('LOADED');
	//  var score =window.document.getElementById('globalScore');
	// console.log(score);
	//  window.document.getElementById('playerScore').value = score;


	// Call function to build table with initial request
	buildTableWithRequest();
});

// Create convenience function to remove table
var clearScoresTable = (function(){
	var table = document.getElementById('scoresTable');
	table.parentElement.removeChild(table);
});

// Make request for resorts data, use response to build table
var buildTableWithRequest = (function (){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'rest/scores');

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			var data = JSON.parse(xhr.responseText);

			// Call function construct table with available data
			buildScoresTable(data);
		}
	};

	xhr.send(null);
});

// Construct Table
var buildScoresTable = (function(data){


	var scoresDiv = document.getElementById('scoresDiv');

	var table = document.createElement('table');

	table.id = 'scoresTable';

	// Construct Headers
	var trHead = document.createElement('tr');
	var headers = [" ", "Names", "Scores"];

	headers.forEach(function(val,ind,arr){
		var th = document.createElement('th');
		th.textContent = val;
		trHead.appendChild(th);
	});

	table.appendChild(trHead); // Add headers to table

	data.forEach(function(val,ind,arr){
		// Construct resort table rows
		var tr = document.createElement('tr');

		for (p in val) {
			var td = document.createElement('td');
			td.textContent = val[p];
			tr.appendChild(td);
		}


		table.appendChild(tr);
	});
	// append table
	document.body.appendChild(table);
});
