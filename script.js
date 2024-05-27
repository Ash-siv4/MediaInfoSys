const fetchData = async () => {
    try {
        const response = await fetch('MarathonResults.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.results.athletes;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const populateTable = async () => {
    try {
        const athletes = await fetchData();
        const tableBody = document.getElementById('results-body');
        tableBody.innerHTML = '';
        athletes.forEach((athlete) => {
            const row = `<tr>
                            <td>${athlete.rank}</td>
                            <td>${athlete.bibnumber}</td>
                            <td>${athlete.firstname} ${athlete.surname}</td>
                            <td>${athlete.finishtime}</td>
                            <td>${athlete.flag}</td>
                        </tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error(error);
    }
};

const sortByRank = () => {
    const tableBody = document.getElementById('results-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.sort((a, b) => parseInt(a.cells[0].innerText) - parseInt(b.cells[0].innerText));
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
};

const sortByBib = () => {
    const tableBody = document.getElementById('results-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    rows.sort((a, b) => parseInt(a.cells[1].innerText) - parseInt(b.cells[1].innerText));
    tableBody.innerHTML = '';
    rows.forEach(row => tableBody.appendChild(row));
};

const exportToCSV = async () => {
    try {
        const athletes = await fetchData();
        let csvContent = "Rank,Full Name,Finish Time,Country Code\n";
        athletes.forEach((athlete) => {
            csvContent += `${athlete.rank},${athlete.firstname} ${athlete.surname},${athlete.finishtime},${athlete.flag}\n`;
        });
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'marathon_results.csv';
        a.click();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    populateTable();

    document.getElementById('sort-by-rank').addEventListener('click', sortByRank);
    document.getElementById('sort-by-bib').addEventListener('click', sortByBib);
    document.getElementById('export-csv').addEventListener('click', exportToCSV);
});
