import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://3.83.230.124:8080/api',
  headers: {
    "Content-type": "application/json"
  }
});

