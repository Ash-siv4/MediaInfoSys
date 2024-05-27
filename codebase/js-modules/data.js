const fetchData = async (filePath) => {
    try {
        const response = await fetch(filePath);
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

export { fetchData };