// imports a function named fetchData from another file (data.js). This function is responsible for fetching data from a specified file path
import { fetchData } from "./data.js";

// asynchronous function (async) called populateTable
const populateTable = async (filePath) => {
  try {
    // waits for the fetchData function to fetch data from the specified file path using the await keyword
    const athletes = await fetchData(filePath);
    // Once the data is fetched, it clears the existing content of the HTML table (results-body), preparing it for new data
    const tableBody = document.getElementById("results-body");
    tableBody.innerHTML = "";
    // iterates over each athlete's data fetched from the file and creates HTML table rows (<tr>) for each athlete, filling in their rank, bib number, name, finish time, and flag
    athletes.forEach((athlete) => {
      const row = `<tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.bibnumber}</td>
                            <td>${athlete.firstname} ${athlete.surname}</td>
                            <td>${athlete.finishtime}</td>
                            <td>${athlete.flag}</td>
                        </tr>`;
      // adds these table rows to the table body (<tbody>) of the HTML table
      tableBody.innerHTML += row;
    });
    // catch any errors thrown in the try-block and log it to the console
  } catch (error) {
    console.error(error);
  }
};

// simple function that calls the populateTable function, passing the filePath parameter to it
const initUI = (filePath) => {
  populateTable(filePath);
};
// exports the initUI function, making it available to other parts of the application.
export { initUI };
