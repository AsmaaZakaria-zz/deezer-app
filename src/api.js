import axios from "axios";

// this is a workaround so I avoided CORS block
const URL = "https://api.deezer.com/";
const CORS_URL = `https://cors-anywhere.herokuapp.com/${URL}`;

export default axios.create({
    baseURL: CORS_URL,
});
