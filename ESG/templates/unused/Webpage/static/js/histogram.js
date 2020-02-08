var url = "../static/data/ESG_Database.json";

// declare initiation function
// select dropdown
// use D3 to get json from data source
// access the data
// create dropdown option for each sample id

function init() {
  
  d3.json(url).then((response2) => {

    var scoresObj = {};
    scoresObj.default = [];
    scoresObj.agg = Object.values(response2["ESG Risk Score"]);
    scoresObj.env = Object.values(response2["Environment Risk Score"]);
    scoresObj.soc = Object.values(response2["Social Risk Score"]);
    scoresObj.gov = Object.values(response2["Governance Risk Score"]);

    updateHist(scoresObj);

  });

}

function updateHist(scoresObj) {

  let aggArr = Object.values(scoresObj.agg);
  let envArr = Object.values(scoresObj.env);
  let socArr = Object.values(scoresObj.soc);
  let govArr = Object.values(scoresObj.gov);

  function makeTrace(i) {
    return {
      x: Object.values(scoresObj[i]),
      type: "histogram",
      autobonx: false,
      // opacity: 1,
      name:i+" count",
      histfunc: "count",
      histnorm: "count",
      marker: {
        color: "#adff2fa000",
        line: {
          color: "#000000",
          width: 1
        }
      },
      visible: i === 0,
      name: i + "-scores",
      // @TODO: user-specified bin size
      xbins: {
        size: 10
      }
    };
  }
 // @TODO: initialize with populated histogram 
  Plotly.react("histogram2", ["default","agg","env","soc","gov"].map(makeTrace), {
    updatemenus: [ 
      {
        x: 0.95,
        yanchor: "top",
        buttons: [{
          method: "restyle",
          args: ["visible", [true,false,false,false,false]],
          label: "Select Category"
        }, {
            method: "restyle",
            args: ["visible", [false,true,false,false,false]],
            label: "Aggregate"
        }, {
            method: "restyle",
            args: ["visible", [false,false,true,false,false]],
            label: "Environmental"
        }, {
            method: "restyle",
            args: ["visible", [false,false,false,true,false]],
            label: "Social"
        }, {
            method: "restyle",
            args: ["visible", [false,false,false,false,true]],
            label: "Governance"
        }]
    }],
    bargap: 2, 
    bargroupgap: 2, 
    barmode: "group", 
    title: "ESG Risk Score Distribution", 
    xaxis: {title: "Risk Score"}, 
    yaxis: {title: "Frequency"}
  });

}

init();


