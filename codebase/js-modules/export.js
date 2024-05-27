import { fetchData } from './data.js';

export const exportToCSV = async (filePath) => {
    try {
        const athletes = await fetchData(filePath);
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