addEventListener('load', function() {
	// Check that js file loads
	console.log('LOADED');

	// Call function to build table with initial request
	buildTableWithRequest();

});
//******************************Clear Scores******************************
var clearScoresTable = (function(){
	var table = document.getElementById('scoresTable');
	table.parentElement.removeChild(table);
});
//************************Build Table************************************
var buildScoresTable = (function(data){
	// Sort data by snowDepth
	// data.sort(function(a,b){
	// 	return b.score - a.snowDepth;
	// });


	var scoresDiv = document.getElementById('scores');

	var table = document.createElement('table');

	table.id = 'scoresTable';

  //*******************Build Table with Requests*************************
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



//*********************Headers********************************************
//
//var trHead = document.createElement('tr');
//var headers = ["Player Name" , "Player Score"];
//
//headers.forEach(function(val,ind,arr){
//  var th = document.createElement('th');
//  th.textContent = val;
//  trHead.appendChild(th);
//});
//
//table.appendChild(trHead); // Add headers to table
//
//data.forEach(function(val,ind,arr){
//  // Construct resort table rows
//  var tr = document.createElement('tr');
//
//  for (p in val) {
//    var td = document.createElement('td');
//    td.textContent = val[p];
//    tr.appendChild(td);
//  }
//});


