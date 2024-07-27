// getCoordinates
import axios from 'axios'

const API = 'http://127.0.0.1:8000/api/v1/coordinates/'

export const getCoordinates = async () => {
    let data = null

    await axios.get(API).then(res => {
        data = res.data
    })

    return data
}



