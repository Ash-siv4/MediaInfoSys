// import statements - retrieve functions from other JS files to initialise and use here
import { initUI } from "./js-modules/ui.js";
import { sortByRank, sortByBib } from "./js-modules/sorting.js";
import { exportToCSV } from "./js-modules/export.js";

const filePath = "MarathonResults.json"; // You can dynamically set this path - JSON file to get data from

// the following could have been done as inline event handlers, e.g: <button id="sort-by-rank" onClick="sortByRank()">Sort by Rank</button>
// or use JS frameworks like React or direct assignments
// chose the below because: better for readability, keeps JS separate from HTML(principle of separation adhered) so cod is modular and well maintained so it's scalable
document.addEventListener("DOMContentLoaded", () => {
  // eventListener called when initial HTML doc has been loaded
  initUI(filePath); //json file passed as argument to the funtion

  //below are basically buttons which when clicked, call their relevant functions
  document.getElementById("sort-by-rank").addEventListener("click", sortByRank);

  document.getElementById("sort-by-bib").addEventListener("click", sortByBib);

  document
    .getElementById("export-csv")
    .addEventListener("click", () => exportToCSV(filePath));
});
