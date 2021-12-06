import axios from 'axios'
const KEY ='AIzaSyCnGqsXINjHiIYzyyu1cdQbkqwLgo_yaKE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult : 15,
        key : KEY
    }
})