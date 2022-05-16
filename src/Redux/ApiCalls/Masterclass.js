import axios from 'axios'

import {baseURL, Token} from '../../Components/Variable'
import { checkNetworkErr } from '../../Components/Utils'
import { error } from '../../Components/MyAlerts'

export const getAllMasterclasses = async (setLoading, query) => {
    return await axios({
        baseURL,
        url: `https://webxost2.ru/rounded/api.php?type=class-get&token=${Token}${query || ''}`,
        method: 'GET',
        // headers: {
        //     Authorization: localStorage.getItem('token'),
        // },

    })
        .catch((err) => {
            error(err.response?.data.message)
            setLoading && setLoading(false)
            checkNetworkErr(err)
        })
}
export const createMasterclass = async (data, setLoading,query) => {
    return await axios({
        url: `https://webxost2.ru/rounded/api.php?type=class-set&token=${Token}${query || ''}`,
        method: 'POST',
        // headers: {
        //     Authorization: localStorage.getItem('token'),
        // },
        data,
    })
        .catch((err) => {
            setLoading(false)
            error(err.response?.data.message)
            checkNetworkErr(err)
        })
}

export const deleteMasterclass = async (id, setLoading) => {
    return await axios({
        // baseURL,
        url: `https://webxost2.ru/rounded/api.php?type=delete-class&token=${Token}&id=${id}`,
        method: 'DELETE',
        // headers: {
        //     Authorization: localStorage.getItem('token'),
        // },
    })
        .catch((err) => {
            setLoading(false)
            error(err.response?.data.message)
            checkNetworkErr(err)
        })
}
export const getOneMasterclass = async (id, setLoading) => {
    return await axios({
        baseURL,
        url: `https://webxost2.ru/rounded/api.php?type=class-one&token=${Token}&id=${id}`,
        method: 'GET',
        // headers: {
        //     Authorization: localStorage.getItem('token'),
        // },
    })
        .catch((err) => {
            setLoading(false)
            error(err.response?.data.message)
            checkNetworkErr(err)
        })
}
