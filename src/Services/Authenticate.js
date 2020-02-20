import axios from 'axios'
const URL = 'https://reqres.in/api'

const handleUserLogin= value => {
    console.log('ascasc', value)
    return axios.post(`${URL}/login`, value)
                .then(res => res.data)
}
export const AuthServices = {
    handleUserLogin
}