# Marathon Results Media Information System

This is a Media Information System designed to display marathon race results in a user-friendly interface. It allows users to view, sort, and export marathon results in CSV format.

## Features

- Display marathon race results in a table format.
- Sort athletes by rank or bib number.
- Export results to a CSV file in the format: Rank,Full Name,Finish Time,Country Code.
- Designed with a user-friendly interface and styling.

## Prerequisites

- Web browser (Google Chrome, Firefox, etc.)
- VSCode
- Python installed on your system (optional, for running the local server).

## Installation

1. Clone the repository or download the ZIP file.
2. Open the project directory in your code editor.

## Usage

1. Open `index.html` in your web browser via the LiveServer in VSCode.
2. View the marathon results displayed in the table.
3. Click on the "Sort by Rank" or "Sort by Bib Number" buttons to sort the results accordingly.
4. Click on the "Export to CSV" button to download the results in CSV format.

## Alternative Ways to Run the Application

### Using Python's Built-in HTTP Server

If you encounter CORS issues while running the application locally, you can use Python's built-in HTTP server to serve the files. Follow these steps:

1. Install Python if not already installed. You can download and install Python from the official website: [Python Downloads](https://www.python.org/downloads/).

2. Open your terminal or command prompt and navigate to the project directory.

3. Run the following command to start the HTTP server:

   ```
   python -m http.server
   ```

   This will start a server on port 8000 by default.

4. Open your web browser and navigate to `http://localhost:8000/codebase` to access the application.

## File Structure (within the *codebase* folder)

- `MarathonResults.json`: JSON file containing sample marathon race results.
- `index.html`: Main HTML file for the application.
- `styles.css`: CSS file for styling the interface.
- `main.js`: JavaScript file containing the compilation of the application logic.
- `js-modules/data.js`: Contains functions for fetching data from the JSON file.
- `js-modules/ui.js`: Contains functions for populating the UI with data.
- `js-modules/sorting.js`: Contains functions for sorting the data.
- `js-modules/export.js`: Contains functions for exporting the data to a CSV file.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Author

Aswene Sivaraj (https://github.com/Ash-siv4/)