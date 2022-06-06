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