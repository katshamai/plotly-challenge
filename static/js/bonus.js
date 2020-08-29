// Adapt gauge chart to plot weekly washing frequency of individual
function gaugeInfo(id) {
    d3.json("samples.json").then((incomingData) => {
        // console.log(incomingData);
    
        var metadata = incomingData.metadata;
        // console.log(metadata);
    
        // Filter for specified id
        var metaResult = metadata.filter(row => row.id.toString() === id)[0];
    
        // Identify frequency of washing
        var wfreqData = metaResult.wfreq;

        // Modify gauge to account for values ranging from 0 to 9
        var data = [
            {
              type: "indicator",
              mode: "gauge+number+delta",
              value: wfreqData,
              title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
              gauge: {
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "red" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                steps: [
                  { range: [0, 1], text: "0-1", color: "white" },
                  { range: [1, 2], text: "1-2", color: "cream" },
                  { range: [2, 3], text: "1-2", color: "beige" },
                  { range: [3, 4], text: "1-2", color: "coffee" },
                  { range: [4, 5], text: "1-2", color: "mustard" },
                  { range: [5, 6], text: "1-2", color: "light green" },
                  { range: [6, 7], text: "1-2", color: "green" },
                  { range: [7, 8], text: "1-2", color: "forest green" },
                  { range: [8, 9], text: "1-2", color: "dark green" },
                ],
              }
            }
          ];
          
          var layout = {
            width: 500,
            height: 400,
            margin: { t: 25, r: 25, l: 25, b: 25 },
            font: { color: "black", family: "Arial" }
          };
          
        // Create plot
          Plotly.newPlot('gauge', data, layout);
        });
}


// Update the chart whenever a new sample is selected
// Create function for default data
function init() {

    // Link to drop down menu
    var dropDownMenu = d3.select("#selDataset");
    // read the data 
    d3.json("samples.json").then((data)=> {
        // console.log(data)

        // Populate ID data into drop down menu
        data.names.forEach(function(name) {
            dropDownMenu.append("option").text(name).property("value");
        });

        // call the functions to display the data and the plots to the page
        var id = d3.select("#selDataset").node().value;
        console.log(id);
      
        // Build the plot with the new stock
        gaugeInfo(id);
    });
}

// Create change event trigger
function optionChanged(id) {
    gaugeInfo(id);
}

init();