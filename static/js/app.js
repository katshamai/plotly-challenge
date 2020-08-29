// Create a horizontal bar chart using sample_values, otu_ids, otu_labels
// Read in data from sample.json

//function getData(id) {
d3.json("samples.json").then((incomingData) => {
    console.log(incomingData);

// For each individual, sort Sample Values in descending order
    var otuID = incomingData.samples[0].otu_ids;
    console.log(otuID);
    var top10Samples = incomingData.samples[0].sample_values.slice(0,10).reverse();
    console.log(top10Samples);
    var top10labels = incomingData.samples[0].otu_labels.slice(0,10).reverse();
    console.log(top10labels);
    var top10ID = otuID.slice(0,10).reverse();
    console.log(top10ID);
    var OTU_id = top10ID.map(d => "OTU " + d);
        console.log(`OTU IDS: ${OTU_id}`)

    // Create plot
    var trace1 = {
        x: top10Samples,
        y: OTU_id,
        text: top10labels,
        type:"bar",
        orientation: "h",
    };
    // create data variable
    var data = [trace1];

    // create layout
    var layout = {
        title: "Top 10 OTU",
        margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 30
        },
        }

     // create the bar plot
     Plotly.newPlot("bar", data, layout);

    // Create a bubble chart for each sample
    var trace2 = {
        x: incomingData.samples[0].otu_ids,
        y: incomingData.samples[0].sample_values,
        mode: 'markers',
        marker: {
        size: incomingData.samples[0].sample_values,
        color: incomingData.samples[0].otu_ids
        },
        text: incomingData.samples[0].otu_labels,
    };
    
    var data2 = [trace2];
    
    var layout2 = {
        title: 'Marker Size',
        showlegend: false,
        height: 600,
        width: 1000
    };
    
    Plotly.newPlot('bubble', data2, layout2);
    });
//}

// Create function to gather metadata for each individual
function indivInfo(id) {
    d3.json("samples.json").then((incomingData) => {
        var metadata = incomingData.metadata;
        console.log(metadata);

        // clear demographic info panel before new info is updated
        demoInfo.html("");

        // filter for specified id
        var result = metadata.filter(row => row.id.toString() === id)[0];

        // display to demographic info panel
        var demoInfo = d3.select("#sample-metadata");

    })
}
