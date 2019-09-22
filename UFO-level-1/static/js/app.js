// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(data);

data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  // Select the button
d3.select("#filter-btn").on("click",runEnter);
d3.select('form').on('submit',runEnter);
function runEnter() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var input_datetime = d3.select("#datetime");
  var input_state=d3.select("#state");
  var input_city = d3.select("#city");

  // Get the value property of the input element
  var dateValue = input_datetime.property("value");
  var stateValue=input_state.property("value");
  var cityValue=input_city.property("value");
  console.log(dateValue);
  console.log(stateValue);
  console.log(cityValue);
  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("h1>span").text(inputValue_datetime);
  function selectData(fData){
      return fData.datetime == dateValue && fData.state == stateValue &&fData.city == cityValue;
  }
  var filtData = data.filter(selectData);
    console.log(filtData) 
    loadFiltData = "y";
    if (loadFiltData == 'y') {
    console.log("in filt data y")
    finalData = filtData;
    }
    else {
    console.log("in filt data n")
    finalData = tableData;
    }
    console.log(finalData)
    //Clear all previuos data from UFO table
    d3.select("tbody").html("");

    finalData.forEach((UFOReport) => {
        var row = tbody.append("tr");
        Object.entries(UFOReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    return false;
}

