import axios from "axios"

const client = axios.create({
    baseURL: "http://localhost:3300"
})

export default client