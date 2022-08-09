// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
// var filters = {}

// 3. Use this function to update the filters. 
// function updateFilters() {

//     // 4a. Save the element that was changed as a variable.
   
//     // 4b. Save the value that was changed as a variable.
//     // 4c. Save the id of the filter that was changed as a variable.
  
//     // 5. If a filter value was entered then add that filterId and value
//     // to the filters list. Otherwise, clear that filter from the filters object.
  
  
//     // 6. Call function to apply all filters and rebuild the table
//     updateFilters(buildTable);
  
//   }
  
  // 7. Use this function to filter the table when data is entered.
    let date = d3.select("#datetime").property("value");
    let inputCity = d3.select("#city").property("value");
    let inputState = d3.select("#state").property("value");
    let inputCountry = d3.select("#country").property("value");
    let inputShape = d3.select("#shape").property("value"); function filterTable() {
 

    let filteredData = tableData;

    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (inputCity) {
      filteredData = filteredData.filter(row => row.city === inputCity);
    }
    if (inputState) {
      filteredData = filteredData.filter(row => row.state === inputState);
    }
    if (inputCountry) {
      filteredData = filteredData.filter(row => row.country === inputCountry);
    }
    if (inputShape) {
      filteredData = filteredData.filter(row => row.shape === inputShape);
    }

    // 8. Set the filtered data to the tableData.
    // let filteredData = tableData
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    // filteredData = filteredData.filter(function(item){
    //   for (var key in filters) {
    //     if (item[key] === this)
    //       filteredData.append(filters);
    //     else {
    //       console.log("BLERP ERROR");
    //     }
    //   } 
    // });
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", filterTable);

  
  // Build the table when the page loads
  buildTable(tableData);
