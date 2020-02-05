// Fetch data to build pie charts showing sectors as slices
// Segmented by different market caps -- 
// Small Cap(< $2B)
// Mid Cap ($2B to $10B)
// Large Cap (> $10B)

var url_sector = "../static/data/sector_count.json";
var url_small = "../static/data/small_cap.json";
var url_mid = "../static/data/mid_cap.json";
var url_large = "../static/data/large_cap.json";

d3.json(url_sector).then((importedSectorData) => {
  // console.log(importedSectorData);
 
  var all_obj = importedSectorData['Ticker']
  // console.log(all);
 
  var all_labels = Object.keys(all_obj)
  // console.log(all_labels);
 
  var all = Object.values(all_obj);
  // console.log(all);

d3.json(url_small).then((scData) => {
  // console.log(scData);
  var sc_obj = scData['Ticker']
  // console.log(all);
  // var sc_labels = Object.keys(sc_obj)
  // console.log(sc_labels);
  var sc = Object.values(sc_obj);
  // console.log(sc);
  
d3.json(url_mid).then((mcData) => {
  var mc_obj = mcData['Ticker']
  // var mc_labels = Object.keys(mc_obj)
  var mc = Object.values(mc_obj);

d3.json(url_large).then((lcData) => {
  var lc_obj = lcData['Ticker']
  // var lc_labels = Object.keys(lc_obj)
  var lc = Object.values(lc_obj);

// Display the default plot
function init() {
  var data = [{
    values: all,
    labels: all_labels,
    textinfo: "label+percent",
    hole: 0.3,
    type: "pie",
    rotation: 90,
    automargin: true
  }];

  var layout = {
    annotations: [{
      font: {size: 16},
      showarrow: false,
      text: '% of Companies'}],   
    height: 700,
    width: 700,
    showlegend: false
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the data
  var data = [];

  if (dataset == 'sc') {
      data = sc;
  }
  else if (dataset == 'mc') {
      data = mc;
  }
  else if (dataset == 'lc') {
      data = lc;
  }
  else if (dataset == 'all') {
      data = all;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();

})
})
})
})