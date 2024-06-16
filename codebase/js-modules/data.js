// declare a variable called fetchdata which is given an arrow function(used for shorter & simpler functions)
// async - for tasks that take time to finish, e.g. fetching data. using the keyword allows the function to start the task and move on to do other tasks whilst waiting for the task to complete
// returns a promise object, a ticket to say "i'll tell you when i'm done"
const fetchData = async (filePath) => {
  // try-catch block -  to handle potential errors (in-case data from the file can't be retrieved)
  try {
    const response = await fetch(filePath); // uses the fetch API to make an HTTP request to the URL specified by filePath. await - pauses the execution of the function until the promise returned by fetch is resolved
    if (!response.ok) {
      //checks HTTP status codes, if not ok(200-299), returns an error
      throw new Error("Failed to fetch data");
    }
    const data = await response.json(); // extracts the JSON body content from the response. await ensures that the function waits until the promise resolves
    return data.results.athletes; // gets the data from the json file, finds results property then finds the athletes array in the results and returns it
  } catch (error) {
    //catch any errors that occured in the try block
    console.error(error); //logs the error to the console
    return []; //returns empty array if there was an error - so function always returns same data type
  }
};
// export statement required at the end of the file so that this function can be imported and used in other files. could export whole file if there were multiple functions to use elsewhere or list them in the {} brackets
export { fetchData };
