// import data from data.js file as a const for one-time raw data to be filtered later
const tableData = data;

// Reference the html table using D3; this tells JS to look for tbody tags in html script
var tbody = d3.select("tbody");

// Function to create a table
function buildTable(data) {

    // clear table data
    tbody.html("");

    // loop through wach object in data and add a row and cells for each value in the object
    data.forEach((dataRow) => {

        // tell JS to look for <tbody> in html and append a table row ("tr")
        let row = tbody.append("tr");

        // loop through each iterable in dataRow and add values to table row; val represents each item in object (dict)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
})};

// Use D3 to begin formatting the table with filters
function handleClick() {

    // .select will match the very first element that matches selector string in parenthesis; .property
    // with selector string of "value" will grab the value in the "#datetime" HTML id tag and store it
    // in the the variable let date.
    let date = d3.select("#datetime").property("value");

    // set a default filter to new variable
    let filteredData = tableData;

    if (date) {

        // apply filter to original data using date filter created above.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the user-defined filters. If no date was entered, original data will be displayed.
    buildTable(tableData);
};

// Use D3 to listen for user click
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);