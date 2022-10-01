const axios = require('axios')
export const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
})