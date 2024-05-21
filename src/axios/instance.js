import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8081", // Your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type
    // Other default headers if needed
  },
});

export default instance;