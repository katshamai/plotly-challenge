// Read in data from sample.json
d3.json("samples.json").then((incomingData) => {
    console.log(incomingData);
// For each individual, sort Sample Values in descending order

//var sortedIndividuals = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);    

//var sorted = numArray.sort(function sortFunction(a, b) {
        //return b - a;
    });

// Filter for the Top 10 OTU 
    //function filterTopTenOTU(otu) {
        //return otu.imdbRating < 9;
    //}
    //function filterGreatMovieRatings(movie) {
        //return movie.imdbRating > 9;
    //}

// Create horizontal bar chart using sample_values, otu_ids, otu_labels




    
    /* var okMovies = incomingData.filter(filterOkMovieRatings);
    var greatMovies = incomingData.filter(filterGreatMovieRatings);
    console.log(okMovies);
    console.log(greatMovies);
    function makeTrace(filteredMovies, color) {
      // Use the map method with the arrow function to return all the filtered movie titles.
      var titles = filteredMovies.map(movies =>  movies.title);
      // Use the map method with the arrow function to return all the filtered movie metascores.
      var ratings = filteredMovies.map(movies => movies.metascore);
      // Check your filtered metascores.
      console.log(ratings);
      // Create your trace.
      var trace = {
        x: titles,
        y: ratings,
        type: "bar",
        marker: {
          color: color
        }
      };
      return trace;
    }
    var okTrace = makeTrace(okMovies, "#CC0000");
    var greatTrace = makeTrace(greatMovies, "#00CC00");
    // Create the data array for our plot
    var data = [okTrace, greatTrace];
    // Define the plot layout
    var layout = {
      title: "The highest critically acclaimed movies.",
      xaxis: { title: "Title" },
      yaxis: { title: "Metascore (Critic) Rating"}
    };
    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);
  });

// Initializes the page with a default plot
function init() {
    data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 5],
    }];
  
    var layout = {
      title: "My Plot"
    };
  
    // Create initial plot
    Plotly.newPlot("plot", data, layout); 
  }
  
  d3.selectAll("body").on("change", updatePlotly);
  
  // Call updatePlotly() when a change takes place to the DOM
  function updatePlotly() {
    
  // This function is called when a dropdown menu item is selected
    // Use D3 to select the dropdown menu
      var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
      var selectedValue = dropdownMenu.node().value;
  
    // Initialize x and y arrays
      var x = [];
      var y = [];
  
  // depending on the selected value set 'x and 'y'
      switch (selectedValue) {
        case "dataset1":
          x = [1, 2, 3, 4, 5];
          y = [1, 2, 4, 8, 16];
          break;
        case "dataset2":
          x = [10, 20, 30, 40, 50];
          y = [1, 10, 100, 1000, 10000];
          break;
        case "dataset3":
          x = [100, 200, 300, 400, 500];
          y = [10, 100, 50, 10, 0];
          break;
        default:
          x: [1, 2, 3, 4, 5];
          y: [1, 2, 3, 4, 5];
          break;
      }
    // Restyle the existing chart
    // Note the extra brackets around 'x' and 'y'
      Plotly.restyle("plot", "x", [x]);
      Plotly.restyle("plot","y",[y]);
      };
  
  init();
   */