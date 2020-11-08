import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://codopedia.herokuapp.com/'
});

export default instance;