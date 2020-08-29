# Plot.ly Homework - Belly Button Biodiversity

We built an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Part 1: Plotly

Using Plotly, we read in JSON data to created two interactive visualisations (a horizontal bar graph and a bubble chart) to show data specific to an individual.

We then created a call to pull an individual's metadata (demographic information) from the JSON data and inserted the metadata into a table.

An event trigger was created to update all plots when a new sample / individual is selected from the drop down menu.

## Part 2: Gauge Chart

Using the Plotly gauge chart template, we adapted it to suit the intervals for the frequency of belly button washing (0 through 9). 

The gauge chart was then linked to the event trigger so it is updated whenever a new sample is selected.

## Part 3: Deployment

The app was then deployed to Github Pages - https://katshamai.github.io/plotly-challenge/.

### About the Data

Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
