// This function sorts the rows of an HTML table by the values in the first column (rank)
export const sortByRank = () => {
  // selects the table body (<tbody>) element by its ID (results-body), which contains the rows of the HTML table
  const tableBody = document.getElementById("results-body");
  // converts the collection of table rows (<tr>) into an array using Array.from()
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  // sorts the array of rows based on the values in the first column (cells[0]), which represent the rank of each athlete
  rows.sort(
    (a, b) => parseInt(a.cells[0].innerText) - parseInt(b.cells[0].innerText)
  );
  // clears the existing content of the table body (innerHTML = '')
  tableBody.innerHTML = "";
  // appends the sorted rows back to the table body, effectively reordering the rows in the HTML table
  rows.forEach((row) => tableBody.appendChild(row));
};

// This function sorts the rows of an HTML table by the values in the second column (bib number)
export const sortByBib = () => {
  // selects the table body and converts the collection of rows into an array
  const tableBody = document.getElementById("results-body");
  const rows = Array.from(tableBody.querySelectorAll("tr"));
  // sorts the array of rows based on the values in the second column (cells[1]), which represent the bib number of each athlete
  rows.sort(
    (a, b) => parseInt(a.cells[1].innerText) - parseInt(b.cells[1].innerText)
  );
  // clears the existing content of the table body
  tableBody.innerHTML = "";
  // appends the sorted rows back to the table body, reordering the rows based on bib number
  rows.forEach((row) => tableBody.appendChild(row));
};

// Both functions are exported using the export keyword, which allows other parts of the application to import and use them
