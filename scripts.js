
var myGridlines = {
	color: '#FF0000',
	count: '8'}

// Set chart options
var options = {
	'title' : 'Pizza Eating',
	'width' : 600,
	'height' : 500,
	'vAxis': {} //end of hAxis
}; //end of options


options.vAxis.gridlines = myGridlines; 

  // Load the Visualization API and the piechart package.
  //credit Google with code sample
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {
      	
      	var alltheDataArray = []; 
      	
      	var Obs = alltheData.observations;
      	
      	for(var i=0; i<Obs.length; i++){
      		
      		var Item = [];
      		
      		Item.push(Obs[i].date);
      		Item.push(Number(Obs[i].value));
      		alltheDataArray.push(Item);
      		
      	}
			//console.log(alltheDataArray); 
			
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows(alltheDataArray);

        

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }