import { fetchData } from "./data.js";

export const exportToCSV = async (filePath) => {
  try {
    // waits for the fetchData function to fetch data from the specified file path using await
    const athletes = await fetchData(filePath);

    // prepares the CSV content by iterating over each athlete's data and formatting it as a comma-separated string
    let csvContent = "Rank,Full Name,Finish Time,Country Code\n";
    athletes.forEach((athlete) => {
      csvContent += `${athlete.rank},${athlete.firstname} ${athlete.surname},${athlete.finishtime},${athlete.flag}\n`;
    });
    // creates a Blob (Binary Large Object - represents any type of binary data, e.g. text, images, audio, video, etc. used to package data for downloading from the web) containing the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });
    // creates a URL for the Blob using window.URL.createObjectURL
    const url = window.URL.createObjectURL(blob);
    // creates an <a> element and sets its href attribute to the URL of the Blob
    const a = document.createElement("a");
    a.href = url;
    // sets the download attribute of the <a> element to specify the filename of the downloaded file
    a.download = "race_results.csv";
    // programmatically clicks the <a> element to initiate the download of the CSV file
    a.click();
    // releases the URL created for the Blob using window.URL.revokeObjectURL
    window.URL.revokeObjectURL(url);
  } catch (error) {
    // catch and log any errors
    console.error(error);
  }
};
