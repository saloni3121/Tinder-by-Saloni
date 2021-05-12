import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://tinder-by-saloni.herokuapp.com',
})

export default instance