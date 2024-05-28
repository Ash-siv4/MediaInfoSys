import { fetchData } from './data.js';

const populateTable = async (filePath) => {
    try {
        const athletes = await fetchData(filePath);
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

const initUI = (filePath) => {
    populateTable(filePath);
};

export { initUI };