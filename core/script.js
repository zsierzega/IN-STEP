google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart); 
function drawChart() { 
var data = new google.visualization.DataTable();
data.addColumn('string', 'From');
data.addColumn('string', 'To');
data.addColumn('number', 'Weight');
data.addRows([ 
	['Science','3-5 Life Science',1], 
	['3-5 Life Science','LS 2: Ecosystems',1], 
	['LS 2: Ecosystems','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Life Science',1], 
	['3-5 Life Science','LS 4:  Biodiversity and Humans',1], 
	['LS 4:  Biodiversity and Humans','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Life Science',1], 
	['3-5 Earth & Space Science','ESS 1: Earth\'s Place in the Universe',1], 
	['ESS 1: Earth\'s Place in the Universe','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Earth & Space Science',1], 
	['3-5 Earth & Space Science','ESS 2:Earth\'s Systems',1], 
	['ESS 2:Earth\'s Systems','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Earth & Space Science',1], 
	['3-5 Earth & Space Science','ESS 3:Earth and Human Activity',1], 
	['ESS 3:Earth and Human Activity','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Earth & Space Science',1], 
	['3-5 Engineering Design','ETS 1: Engineering Design',1], 
	['ETS 1: Engineering Design','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Engineering','3-5 Engineering Design',1], 
	['3-5 Phyical Science','PS 3: Energy',1], 
	['PS 3: Energy','Human Climate',1], 
	['Human Climate','What’s for Dinner? The Human Climate',1], 
	['Science','3-5 Phyical Science',1], 
	['6-8 Physical Science','PS 1: Matter and Its Interactions',1], 
	['PS 1: Matter and Its Interactions','Illicit Drugs',1], 
	['Illicit Drugs','Proteins & Illicit Drugs',1], 
	['Science','6-8 Physical Science',1], 
	['6-8 Physical Science','PS 2: Motion and Stability',1], 
	['PS 2: Motion and Stability','Illicit Drugs',1], 
	['Illicit Drugs','Proteins & Illicit Drugs',1], 
	['Science','6-8 Physical Science',1], 
	['6-8 Life Science','LS1: Information Processiong ',1], 
	['LS1: Information Processiong ','Illicit Drugs',1], 
	['Illicit Drugs','Proteins & Illicit Drugs',1], 
	['Science','6-8 Life Science',1], 
	['6-8 Engineering Design','ETS1 Engineering Design',1], 
	['ETS1 Engineering Design','Illicit Drugs',1], 
	['Illicit Drugs','Proteins & Illicit Drugs',1], 
	['Engineering','6-8 Engineering Design',1], 
	['6-8 Engineering Design','ETS 1: Engineering Design',1], 
	['ETS 1: Engineering Design','Earthquake',1], 
	['Earthquake','Earthquake Hazard Mitigation',1], 
	['Engineering','6-8 Engineering Design',1], 
	['6-8 Earth & Space Science','ESS 3: Earth and Human Activity',1], 
	['ESS 3: Earth and Human Activity','Earthquake',1], 
	['Earthquake','Earthquake Hazard Mitigation',1], 
	['Science','6-8 Earth & Space Science',1], 
	['6-8 Physical Science','PS 2: Motion and Stability',1], 
	['PS 2: Motion and Stability','Earthquake',1], 
	['Earthquake','Earthquake Hazard Mitigation',1], 
	['Science','6-8 Physical Science',1], 
	['6-8 Physical Science','PS 3: Energy',1], 
	['PS 3: Energy','Earthquake',1], 
	['Earthquake','Earthquake Hazard Mitigation',1], 
	['Science','6-8 Physical Science',1], 
	['6-8 Physical Science','PS 1: Matter and Its Interactions',1], 
	['PS 1: Matter and Its Interactions','Earthquake',1], 
	['Earthquake','Earthquake Hazard Mitigation',1], 
	['Science','6-8 Physical Science',1], 
	['3-5 Phyical Science','PS 1: Matter and Its Interactions',1], 
	['PS 1: Matter and Its Interactions','Population Density',1], 
	['Population Density','Density - not just for Boats and Rocks!',1], 
	['Science','3-5 Phyical Science',1], 
	['3-5 Life Science','LS 1: From Molecules to Organisms',1], 
	['LS 1: From Molecules to Organisms','Population Density',1], 
	['Population Density','Density - not just for Boats and Rocks!',1], 
	['Science','3-5 Life Science',1], 
	['3-5 Earth & Space Science','ESS 3: Earth and Human Activity',1], 
	['ESS 3: Earth and Human Activity','Population Density',1], 
	['Population Density','Density - not just for Boats and Rocks!',1], 
	['Science','3-5 Earth & Space Science',1], 
	['3-5 Engineering Design','ETS 1: Engineering Design',1], 
	['ETS 1: Engineering Design','Population Density',1], 
	['Population Density','Density - not just for Boats and Rocks!',1], 
	['Engineering','3-5 Engineering Design',1] 
]); 
var options = { 
 	width: 900,
	height: 500,
}

var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));

chart.draw(data, options);
}