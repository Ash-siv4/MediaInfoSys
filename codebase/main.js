import { initUI } from './js-modules/ui.js';
import { sortByRank, sortByBib } from './js-modules/sorting.js';
import { exportToCSV } from './js-modules/export.js';

const filePath = 'MarathonResults.json'; // You can dynamically set this path

document.addEventListener('DOMContentLoaded', () => {
    initUI(filePath);

    document.getElementById('sort-by-rank').addEventListener('click', sortByRank);
    document.getElementById('sort-by-bib').addEventListener('click', sortByBib);
    document.getElementById('export-csv').addEventListener('click', () => exportToCSV(filePath));
});