import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-ec662.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-ec662/us-central1/api'    
});

export default instance;