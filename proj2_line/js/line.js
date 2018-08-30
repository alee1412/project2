let years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
let industries = Object.keys(statedata)


// function to get average
const getAverage = arr => arr.reduce((a,b) => a + b, 0) / arr.length


// line graph
function getIndustry(industry){
  
  let industrySelection = Object.values(statedata[industry]);
  let average = [];

  for (let i = 0; i < industrySelection.length; i++){
    let year = Object.values(Object.values(industrySelection[i]));
    
    average.push(getAverage(year));
  };

  return average
};


function init() {
  data = [{
    x: years,
    y: getIndustry("Construction") }];
    
  var LINE = document.getElementById("plot");
  Plotly.plot(LINE, data);
  }
  
  function updatePlotly(newx, newy) {
    var LINE = document.getElementById("plot");
  
    // Note the extra brackets around 'newx' and 'newy'
    Plotly.restyle(LINE, "x", [newx]);
    Plotly.restyle(LINE, "y", [newy]);
  }
  
  // Only works when you try to switch the drop downs. Initially it'll be init, then after you click it'll be getData
  function getData(dataset) {
  
    // Initialize empty arrays to contain our axes
    var x = [];
    var y = [];
  
    // Fill the x and y arrays as a function of the selected dataset
    switch (dataset) {
    case "Construction": // we want this to be the same as the first data set up there
      x = years;
      y = getIndustry("Construction");
      break;
    case "Financial Activities":
      x = years;
      y = getIndustry("Financial Activities");
      break;
    case "Leisure and Hospitality":
      x = years;
      y = getIndustry("Leisure and Hospitality")
      break;
    case "Manufacturing":
      x = years;
      y = getIndustry("Manufacturing")
      break;
    case "Other Services":
      x = years;
      y = getIndustry("Other Services")
      break;
    case "Professional and Business Services":
      x = years;
      y = getIndustry("Professional and Business Services")
      break;
    case "Trade Transportation and Utilities":
      x = years;
      y = getIndustry("Trade Transportation and Utilities")
      break;
    case "Information":
      x = years;
      y = getIndustry("Information")
      break;
    case "Mining and Logging":
      x = years;
      y = getIndustry("Mining and Logging")
      break;
    default:
      x = years;
      y = getIndustry("Construction")
      break;
    }
  
    updatePlotly(x, y);
  }
  
  init();