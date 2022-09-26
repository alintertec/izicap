import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: process.env.REACT_APP_FOURSQUARE || ""
    },
});

export default instance;