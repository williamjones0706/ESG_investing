//* File Overview *
// Build a function to pull the company Environmental, Social, and Governance data from the database in order to build the plots
// The database connection is made by using the Flask app.py file route (whatever we call it) for the url
// The url from the Flask app.py file allows the user to pull the data from the database, but we have to JSONIFY the data for use with JavaScript/Plotly
// Plotly and D3 are not imported in this file but in the html files as a content delivery network link

// -------------------------------------------------------------------------------------------------------------

// Build the function for plotting the overall industry breakdown
// Pull the data by using the route from the app.py file that connects to the database and retrives the data  
// Use D3 to JSONIFY the data 
// Pull only the data necessary for industres 
// **********Remember to pull from the correct table from database using correct url route*************

function build_industrytop10_plot() {

    // var url = "/api/esg";

    d3.json("../static/data/ESG_Industry10_Table.json").then((data) => {
        // log the data in order to visualize it
        console.log(data);

        // convert json to array of objects
        var industries_top_10 = Object.values(data.Industry).reverse();
        console.log(industries_top_10);

        var industries_top_10_ESG = Object.values(data["ESG Risk Score"]).reverse();
        console.log(industries_top_10_ESG);

        // create the trace variable for the bar plot
        var labels = industries_top_10;

        var industrytop10_trace = {
            x: industries_top_10_ESG,
            y: industries_top_10,
            text: labels,
            opacity: 0.8,
            marker: {
                color: 'rgb(0,76,150)',
                line: {
                    color: 'rgb(0,0,102)',
                    width: 1.5
                }
            },
            type: "bar",
            orientation: "h",
        };

        // create data variable for the industry scores
        var dataESG = [industrytop10_trace];

        // create layout variable to set plots layout
        var layout = {
            title: "<b>Top 10 Industry AVG ESG Risk Scores</b><br>(lower scores are better)",
            yaxis: {
                tickmode: "linear",
                showgrid: true,
                zeroline: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
            },
            margin: {
                l: 250,
                r: 50,
                t: 100,
                b: 30
            }
            // automargin: true
        };
        // create the bar plot
        Plotly.newPlot("top10_industries_bar", dataESG, layout);
    });
};

build_industrytop10_plot();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

function build_Environment_industrytop10_plot() {

    // var url = "/api/esg";

    d3.json("../static/data/E_Industry10_Table.json").then((data) => {
        // log the data in order to visualize it
        console.log(data);

        // convert json to array of objects
        var industries_top_10_E = Object.values(data.Industry).reverse();
        console.log(industries_top_10_E);

        var industries_top_10_EScores = Object.values(data["Environment Risk Score"]).reverse();
        console.log(industries_top_10_EScores);

        // create the trace variable for the bar plot
        var labels = industries_top_10_E;

        var industrytop10_E_trace = {
            x: industries_top_10_EScores,
            y: industries_top_10_E,
            text: labels,
            opacity: 0.8,
            marker: {
                color: 'rgb(0,76,150)',
                line: {
                    color: 'rgb(0,0,102)',
                    width: 1.5
                }
            },
            type: "bar",
            orientation: "h",
        };

        // create data variable for the industry scores
        var dataE = [industrytop10_E_trace];

        // create layout variable to set plots layout
        var layout = {
            title: "<b>Top 10 Industry AVG Environmental Risk Scores</b><br>(lower scores are better)",
            yaxis: {
                tickmode: "linear",
                showgrid: true,
                zeroline: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
            },
            margin: {
                l: 210,
                r: 50,
                t: 100,
                b: 50
            }
            // automargin: true
        };
        // create the bar plot
        Plotly.newPlot("top10_E_industries_bar", dataE, layout);
    });
};

build_Environment_industrytop10_plot();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

function build_Social_industrytop10_plot() {

    // var url = "/api/esg";

    d3.json("../static/data/S_Industry10_Table.json").then((data1) => {
        // log the data in order to visualize it
        console.log(data1);

        // convert json to array of objects
        var industries_top_10_S = Object.values(data1.Industry).reverse();
        console.log(industries_top_10_S);

        var industries_top_10_SScores = Object.values(data1["Social Risk Score"]).reverse();
        console.log(industries_top_10_SScores);

        // create the trace variable for the bar plot
        var labels = industries_top_10_S;

        var industrytop10_S_trace = {
            x: industries_top_10_SScores,
            y: industries_top_10_S,
            text: labels,
            opacity: 0.8,
            marker: {
                color: 'rgb(0,76,150)',
                line: {
                    color: 'rgb(0,0,102)',
                    width: 1.5
                }
            },
            type: "bar",
            orientation: "h",
        };

        // create data variable for the industry scores
        var dataS = [industrytop10_S_trace];

        // create layout variable to set plots layout
        var layout = {
            title: "<b>Top 10 Industry AVG Social Risk Scores</b><br>(lower scores are better)",
            yaxis: {
                tickmode: "linear",
                showgrid: true,
                zeroline: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
            },
            margin: {
                l: 240,
                r: 50,
                t: 100,
                b: 50
            }
            // automargin: true
        };
        // create the bar plot
        Plotly.newPlot("top10_S_industries_bar", dataS, layout);
    });
};

build_Social_industrytop10_plot();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

function build_Governance_industrytop10_plot() {

    // var url = "/api/esg";

    d3.json("../static/data/G_Industry10_Table.json").then((data) => {
        // log the data in order to visualize it
        console.log(data);

        // convert json to array of objects
        var industries_top_10_G = Object.values(data.Industry).reverse();
        console.log(industries_top_10_G);

        var industries_top_10_GScores = Object.values(data["Governance Risk Score"]).reverse();
        console.log(industries_top_10_GScores);

        // create the trace variable for the bar plot
        var labels = industries_top_10_G;

        var industrytop10_G_trace = {
            x: industries_top_10_GScores,
            y: industries_top_10_G,
            text: labels,
            opacity: 0.8,
            marker: {
                color: 'rgb(0,76,150)',
                line: {
                    color: 'rgb(0,0,102)',
                    width: 1.5
                }
            },
            type: "bar",
            orientation: "h",
        };

        // create data variable for the industry scores
        var dataG = [industrytop10_G_trace];

        // create layout variable to set plots layout
        var layout = {
            title: "<b>Top 10 Industry AVG Governance Risk Scores</b><br>(lower scores are better)",
            yaxis: {
                tickmode: "linear",
                showgrid: true,
                zeroline: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
            },
            margin: {
                l: 210,
                r: 50,
                t: 100,
                b: 50
            }
            // automargin: true
        };
        // create the bar plot
        Plotly.newPlot("top10_G_industries_bar", dataG, layout);
    });
};

build_Governance_industrytop10_plot();

// --------------------------------------------------------------------
// --------------------------------------------------------------------

function build_industry_dynamic_plot(industry_name) {

    // var url = "/api/esg";

    d3.json("../static/data/ESG_Industry_Table.json").then((data) => {
        // log the data in order to visualize it
        console.log(data);

        // use the data array and indsutry array to navigate to the industry and find the key values for them
        // Once you find the keys for the industry, use the key for finding the corresponding ESG, E, S, and G scores

        var data_array = Object.entries(data);
        console.log(data_array);

        var data_array_industry = Object.entries(data.Industry);
        console.log(data_array_industry);

        var key = data_array_industry.find( e => e[1] === industry_name)[0];
        console.log(key)

        var industry_ESG = data_array[1][1][key];
        console.log(industry_ESG);

        var industry_E = data_array[2][1][key];
        console.log(industry_E);

        var industry_S = data_array[3][1][key];
        console.log(industry_S);

        var industry_G = data_array[4][1][key];
        console.log(industry_G);

        // create the trace variable for the bar plot
        var labels = industry_name;

        var industry_dynamic_trace = {
            x: ["ESG", "Environment", "Social", "Governance"],
            y: [industry_ESG, industry_E, industry_S, industry_G],
            text: labels,
            opacity: 0.8,
            marker: {
                color: 'rgb(0,76,150)',
                line: {
                    color: 'rgb(0,0,102)',
                    width: 1.5
                }
            },
            type: "bar",
            orientation: "v",
        };

        // create data variable for the industry scores
        var data_industry = [industry_dynamic_trace];

        // create layout variable to set plots layout
        var layout = {
            title: "<b>Selected Industry ESG Breakdown</b><br>(lower scores are better)",
            yaxis: {
                tickmode: "linear",
                showgrid: true,
                zeroline: true,
                showline: true,
                mirror: 'ticks',
                gridcolor: '#bdbdbd',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
            },
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
            }
            // automargin: true
        };
        // create the bar plot
        Plotly.newPlot("industry_individual", data_industry, layout);
    });
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// create the function to get the data for all industries
function get_industry_name(industry_name) {

        // select industry name data id in order to add the industry name
        var industry_select = d3.select("#industry_name");

        // empty the industry info each time before getting new info so that nothing is added to existing info displayed
        industry_select.html("");

        // get the necessary industry key for passing to the dynamic plot
        industry_select.append("h4").text(industry_name.toUpperCase());
    
};

// create the function for the industry name change event, so that the plots adjust to the new name selected
function optionChanged(industry_name) {
    build_industry_dynamic_plot(industry_name);
    get_industry_name(industry_name);
}

// create the function for the initial data displayed on the webpage
function init() {
    // select dropdown menu in index.html 
    var dropdown = d3.select("#selDataset");

    // read the data from samples.json
    d3.json("../static/data/ESG_Industry_Table.json").then((data) => {
        console.log(data)

        var data_array = Object.values(data.Industry);
        console.log(data_array);

        // get the industry name and append it to the dropdown so that it can be selected
        data_array.forEach(function (name) {
            dropdown.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        build_industry_dynamic_plot(data_array[0]);
        get_industry_name(data_array[0]);
    });
}

init();



