// // Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);
  // clear the input value
  d3.select("#stockInput").node().value = "";
  // Build the plot with the new stock
  getCompanyInfo(stock)
  // build_Basic_Line_Plot(stock);
  build_Candlestick_Plot(stock);
  build_gauge_ESG(stock);
  build_gauge_E(stock);
  build_gauge_S(stock);
  build_gauge_G(stock);
  getAnnualData(stock)
}

function getCompanyInfo(stock) {
  var queryUrl = `https://financialmodelingprep.com/api/v3/company/profile/${stock}`;
  d3.json(queryUrl).then(function(data) {
    var profile_info = data['profile'];
    var company_name = profile_info['companyName'];
    console.log(company_name);
    var company_description = profile_info['description'];
    var company_exchange = profile_info['exchange'];
    var company_industry = profile_info['industry'];
    var company_website = profile_info['website'];
    var company_ceo = profile_info['ceo'];
    var company_sector = profile_info['sector'];
    var company_logo = profile_info['image'];
    // d3.event.preventDefault();
    d3.select("#Company-Name").text(company_name);
    d3.select("#Compant-Logo").attr("src", company_logo);
    d3.select("#Company-Description").text(company_description);
    d3.select("#Company-Details-Header").text("Company Details");

    var table = d3.select("#details-table");
    var tbody = table.select("tbody");
    tbody.node().innerHTML = "";
    var trow_website = tbody.append("tr");
    var trow_exchange = tbody.append("tr");
    var trow_ceo = tbody.append("tr");
    var trow_sector = tbody.append("tr");
    var trow_industry = tbody.append("tr");

    trow_website.append("td").text("Website: ");
    trow_website.append("td").text(company_website);
    trow_exchange.append("td").text("Exchange: ");
    trow_exchange.append("td").text(company_exchange);
    trow_ceo.append("td").text("CEO: ");
    trow_ceo.append("td").text(company_ceo);
    trow_sector.append("td").text("Sector: ");
    trow_sector.append("td").text(company_sector);
    trow_industry.append("td").text("Industry: ");
    trow_industry.append("td").text(company_industry);
  });
}


function build_gauge_ESG(stock) {
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: 30,
      title: { text: "ESG Score", font: { size: 16 } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 33], color: "green" },
          { range: [33, 66], color: "yellow" },
          { range: [66, 100], color: "red" }
        ]
      }
    }
  ];
  
  var layout = {
    width: 325,
    height: 300,
    // margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('Gauge_ESG', data, layout);

}

function build_gauge_E(stock) {
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: 30,
      title: { text: "Environment", font: { size: 16 } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 33], color: "green" },
          { range: [33, 66], color: "yellow" },
          { range: [66, 100], color: "red" }
        ]
      }
    }
  ];
  
  var layout = {
    width: 275,
    height: 250,
    // margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('Gauge_E', data, layout);

}

function build_gauge_S(stock) {
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: 30,
      title: { text: "Social", font: { size: 16 } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 33], color: "green" },
          { range: [33, 66], color: "yellow" },
          { range: [66, 100], color: "red" }
        ]
      }
    }
  ];
  
  var layout = {
    width: 275,
    height: 250,
    // margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('Gauge_S', data, layout);

}

function build_gauge_G(stock) {
  var data = [
    {
      type: "indicator",
      mode: "gauge+number",
      value: 30,
      title: { text: "Governance", font: { size: 16 } },
      gauge: {
        axis: { range: [null, 100], tickwidth: 1, tickcolor: "darkblue" },
        bar: { color: "darkblue" },
        bgcolor: "white",
        borderwidth: 2,
        bordercolor: "gray",
        steps: [
          { range: [0, 33], color: "green" },
          { range: [33, 66], color: "yellow" },
          { range: [66, 100], color: "red" }
        ]
      }
    }
  ];
  
  var layout = {
    width: 275,
    height: 250,
    // margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: 'rgba(0,0,0,0)',
    font: { color: "darkblue", family: "Arial" }
  };
  
  Plotly.newPlot('Gauge_G', data, layout);

}


function build_Candlestick_Plot(stock) {

  var url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?timeseries=1265`;

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var timeseries_data = data['historical'];
    console.log(timeseries_data);
    var end_date = timeseries_data['0']['date'];
    console.log(end_date);
    var start_date = timeseries_data['1264']['date'];
    console.log(start_date);

    var dates = timeseries_data.map(row => row['date']);
    console.log(dates);
    
    var closingPrices = timeseries_data.map(row => row['close']);
    console.log(closingPrices);

    var openingPrices = timeseries_data.map(row => row['open']);
    console.log(openingPrices);

    var highPrices = timeseries_data.map(row => row['high']);
    console.log(highPrices);

    var lowPrices = timeseries_data.map(row => row['low']);
    console.log(lowPrices);

      var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "Stock Price",
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      name: "Daily Range",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        title: "Date",
        range: [start_date, end_date],
        type: "date"
      },
      yaxis: {
        title: "Stock Price ($)",
        autorange: true,
        type: "linear"
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
    };

    Plotly.newPlot("Stock_Chart", data, layout);
  });
}



function getAnnualData(stock) {

  var queryUrl = `https://financialmodelingprep.com/api/v3/financials/income-statement/${stock}`;
  d3.json(queryUrl).then(function(data) {
    var financial_data = data['financials'];
    var dates = financial_data.map(row => row['date']).reverse();
    console.log(dates);
    var revenue = financial_data.map(row => row['Revenue']).reverse();
    console.log(revenue);
    var gross_profit = financial_data.map(row => row['Gross Profit']).reverse();
    console.log(gross_profit);
    console.log(data);
    buildTableHeaders(dates);
    buildTableRows(dates, revenue, gross_profit);
  });
}

function buildTableHeaders(dates) {
  var date_length = dates.length
  var table = d3.select("#summary-table");
  var thead = table.select("thead");
  var trow = thead.select('tr');
  trow.node().innerHTML = "";
  trow.append('th').text("Line Item");
  for (var i = 5; i < date_length; i++) {
    trow.append('th').text(dates[i]);
  }
}
function buildTableRows(dates, revenue, gross_profit) {
  var date_length = dates.length
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  tbody.node().innerHTML = "";
  var trevenue;
  trevenue = tbody.append('tr');
  trevenue.append('td').text("Revenue")
  for (var i = 5; i < date_length; i++) {
    trevenue.append('td').text(revenue[i])
  }
  var tgross_profit;
  tgross_profit = tbody.append('tr');
  tgross_profit.append('td').text("Gross Profit")
  for (var i = 5; i < date_length; i++) {
    tgross_profit.append('td').text(gross_profit[i])
  }
}

// function build_Basic_Line_Plot(stock) {
  
//   var url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?timeseries=1265`;

//   d3.json(url).then(function(data) {
//     var timeseries_data = data['historical'];
//     console.log(timeseries_data);
//     var end_date = timeseries_data['0']['date'];
//     console.log(end_date)
//     var start_date = timeseries_data['1264']['date'];
//     console.log(start_date)

//     var dates = timeseries_data.map(row => row['date']);
//     console.log(dates)
    
//     var closingPrices = timeseries_data.map(row => row['close']);
//     console.log(closingPrices)

//     var trace1 = {
//             type: "scatter",
//             mode: "lines",
//             name: 'Stock Price',
//             x: dates,
//             y: closingPrices,
//             line: {
//               color: "#17BECF"
//             }
//           };
      
//           var data = [trace1];
      
//           var layout = {
//             title: `${stock} Basic Line Chart`,
//             xaxis: {
//               range: [start_date, end_date],
//               type: "date"
//             },
//             yaxis: {
//               autorange: true,
//               type: "linear"
//             }
//           };
      
//           Plotly.newPlot("plot1", data, layout);

//     })

// };