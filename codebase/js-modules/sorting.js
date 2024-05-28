export const sortByRank = () => {
    const tableBody = document.getElementById('results-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.sort((a, b) => parseInt(a.cells[0].innerText) - parseInt(b.cells[0].innerText));
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
};

export const sortByBib = () => {
    const tableBody = document.getElementById('results-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.sort((a, b) => parseInt(a.cells[1].innerText) - parseInt(b.cells[1].innerText));
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
};