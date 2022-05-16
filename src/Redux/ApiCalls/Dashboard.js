import axios from "axios";
import { api } from "../../Components/Utils";


export const getDashboarStats = async () => {
    const response = [
        '/rating/all',
        '/chart/all',
        '/statistics',
        '/category/all']

    const requestMap = response.map((item) => api.get(`${item}`))

    return await axios.all(requestMap)
}


