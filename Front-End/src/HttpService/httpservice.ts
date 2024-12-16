import axios from "axios";


export const get = async (url :string, params = {}) => {
  try {
    const response = await axios.get(url, { params });
    return response.data; 
  } catch (error) {
    console.error("GET request error:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
};

export const post = async (url:string, data = {}, config = {}) => {
  try {
    const response = await axios.post(url, data, config);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error("POST request error:", error);
    throw error; 
  }
};
