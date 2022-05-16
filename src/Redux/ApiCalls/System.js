import store from '../store'
import { api } from '../../Components/Utils'
import { error } from '../../Components/MyAlerts'
import {baseURL} from "../../Components/Variable";
import axios from "axios";

const { dispatch } = store

// export const postToLogin = async (data) => {
//      return await axios({
//           url: `https://webxost2.ru/rounded/api.php?type=login${data}`,
//           method: 'POST',
//      })
// }


// export const getUserData = async (id, history, setLoading) => {
//      return await api.get(`admin/${id}`)
//           .then((res) => {
//                dispatch({
//                     type: "reducer/setIsAuth",
//                     payload: true
//                })
//                // dispatch({
//                //      type: "reducer/setUserData",
//                //      payload: res.data.data.admin
//                // })
//                setLoading(false)
//           })
//           .catch((err) => {
//                error(err.response?.data.message)
//                setLoading(false)
//                localStorage.clear()
//                history.replace('/login')
//           })
// }
