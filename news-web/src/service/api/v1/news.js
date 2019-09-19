import axios from 'axios';

const API_ROOT = "https://newsapi.org/v2/top-headlines"

export async function getTopHeadlines(country) {
 const endpoint = `${API_ROOT}?country=${country}&apiKey=40758ebd2eab406abc6fc26826f34430`;
 const response = await axios.get(endpoint);
 return response;
};