// var tableData = data;

// var columns =["Date","City","State","Country","Shape","Duration","Comments"];

// Get a reference to the table body

var tbody = d3.select("tbody");

// Console.log the alien data from data.js
console.log(data);


// Step 1: Loop Through `data` and log each alien report object
data.forEach(alien => {
  console.log(alien);

  // Step 2:  Use d3 to append one table row `tr` for each alien report object
  var row = tbody.append("tr");

  // Step 3:  Use `Object.entries` to log each alein report value
  Object.entries(alien).forEach(([key, value]) => {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per alien report value (datetime, city, state, country, shape, duration, commments)
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    // alien  report values (datetime, city, state, country, shape, duration, commments)
    cell.text(value);
  });
});