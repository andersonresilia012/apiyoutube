import axios from 'axios';
const KEY = 'AIzaSyBEd5VVrNh3_jb2UyRfsLcm52M5J4rFiiQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 11,
        key: KEY
    }
})