export const extractJsonFromResponse = response => {
    const startIndex = response.indexOf('{'); // Find the start index of the JSON data
    const endIndex = response.lastIndexOf('}'); // Find the end index of the JSON data
    return response.substring(startIndex, endIndex + 1); // Extract the JSON data
  };
  
  // Function to check if a string is valid JSON
export const isValidJson = str => {
    try {
      JSON.parse(str);
      return true;
    } catch (error) {
      return false;
    }
  };