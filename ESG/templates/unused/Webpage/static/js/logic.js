var url = "../static/data/ESG_Database.json";

// Create a map object
d3.json(url).then((data) => {
  var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

  var tile = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
  });


  tile.addTo(myMap);
  var markers = L.markerClusterGroup();

  var new_data = [];
  for (const [key, value] of Object.entries(data['Company Name'])) {
    var temp = {};
    temp['ESG Risk Score'] = 1/data['ESG Risk Score'][key];
    temp['Coordinates'] = [data['Latitude'][key], data['Longitude'][key]];
    temp['Latitude'] = data['Latitude'][key];
    temp['Longitude'] = data['Longitude'][key];
    temp['Market Cap'] = String(data['Market Cap'][key]).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    temp['Company Name'] = value;
    new_data.push(temp);
    var message = "<p>ESG score: " + data['ESG Risk Score'][key] + "</p><p>Company Name: " + temp['Company Name'] + "</p><p>Market Capital $: " + temp['Market Cap'];
    markers.addLayer(L.marker(temp["Coordinates"]).bindPopup(message)).addTo(myMap);
  }

  //myMap.addLayer(markers)
/**
 
 full_data = {
   max: 8,
   data: new_data
  }
  
  var config = {
    "radius": 0.5,
    "maxOpacity": .8,
    "scaleRadius": true,
    "useLocalExtrema": true,
    latField: 'Latitude',
    lngField: 'Longitude',
    valueField: 'ESG Risk Score'
  }
  
  var heatmapLayer = new HeatmapOverlay(config);
  
  heatmapLayer.addTo(myMap)
  heatmapLayer.setData(full_data)
*/

  /**
  for (var i = 0; i < new_data.length; i++) {

    console.log(new_data[i]["ESG Risk Score"]);
    console.log("HELLO");
    //alert("test");

    // Conditionals for countries points
    var color = "";
    if (new_data[i]["ESG Risk Score"] > 75) {
      color = "red";
    }
    else if (new_data[i]["ESG Risk Score"] > 50) {
      color = "yellow";
    }
    else if (new_data[i]["ESG Risk Score"] > 25) {
      color = "green";
    }
    else {
      color = "blue";
    }

    // Add circles to map
    L.circle(new_data[i]['Coordinates'], {
      fillOpacity: 0.65,
      color: color,
      fillColor: color,
      // Adjust radius
      radius: new_data[i]["ESG Risk Score"]*600000,
      //radius: 80000
      stroke: false
    }).bindPopup("<h1>" + new_data[i]["Company Name"] + "</h1> <hr> <h3>ESG Risk Score: " + new_data[i]["ESG Risk Score"] + "</h3> <hr> <h4>Market Capital $: " + new_data[i]["Market Cap"] + "</h4>").addTo(myMap);
  
  }
  */
});






// Loop through locations and create city and state markers
//for (var i = 0; i < locations.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  //stateMarkers.push(
    //L.circle(locations[i].coordinates, {
      //stroke: false,
      //fillOpacity: 0.75,
      //color: "white",
      ///fillColor: "white",
      //radius: markerSize(locations[i].state.population)
    //})
  //);















 