google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart); 
function drawChart() { 
var data = new google.visualization.DataTable();
data.addColumn('string', 'From');
data.addColumn('string', 'To');
data.addColumn('number', 'Weight');
data.addRows([ 
	['Science','3-5 Life Science',1], 
	['3-5 Life Science','Drugs',1], 
	['Drugs','Dynamics',1], 
	['3-5 Earth & Space Science','Climate',1], 
	['Climate','Elements',1], 
	['Science','3-5 Earth & Space Science',1], 
	['3-5 Phyical Science','Demolition',1], 
	['Demolition','Pollinators',1], 
	['Science','3-5 Phyical Science',1], 
	['6-8 Life Science','Earthquake',1], 
	['Earthquake','Wrecking Ball',1], 
	['Science','6-8 Life Science',1], 
	['6-8 Earth & Space Science','Drugs',1], 
	['Drugs','Safety',1], 
	['Science','6-8 Earth & Space Science',1], 
	['6-8 Physical Science','Climate',1], 
	['Climate','Dynamics',1], 
	['Science','6-8 Physical Science',1], 
	['K-2 Life Science','Demolition',1], 
	['Demolition','Elements',1], 
	['Science','K-2 Life Science',1], 
	['K-2 Earth & Space Science','Earthquake',1], 
	['Earthquake','Pollinators',1], 
	['Science','K-2 Earth & Space Science',1], 
	['K-2 Phyical Science','Drugs',1], 
	['Drugs','Wrecking Ball',1], 
	['Science','K-2 Phyical Science',1], 
	['K-2 Engineering Design','Climate',1], 
	['Climate','Safety',1], 
	['Engineering','K-2 Engineering Design',1], 
	['3-5 Engineering Design','Demolition',1], 
	['Demolition','Dynamics',1], 
	['Engineering','3-5 Engineering Design',1], 
	['6-8 Engineering Design','Earthquake',1], 
	['Earthquake','Safety',1], 
	['Engineering','6-8 Engineering Design',1] 
]);

var options = {

  width: 900,
  height: 500,

}
var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
} 
