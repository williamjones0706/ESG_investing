var gd = document.getElementById('funnel');
var data = [
    {type: 'funnel', 
    y: ["All Stocks", "> 0% Returns", "> 10% Returns", "> 20% Returns", "> 40% Returns", "> 60% Returns", "> 90% Returns", "> 110% Returns"], 
    x: [724, 623, 539, 421, 181, 61, 12, 4], 
    hoverinfo: 'x+percent previous+percent initial'}];

var layout = {margin: {l: 150}, width:600, height: 700}

Plotly.newPlot('funnel', data, layout);
