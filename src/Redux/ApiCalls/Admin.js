import { api } from '../../Components/Utils'
import { error } from '../../Components/MyAlerts'

export const getAllEmployee = async (setLoading) => {
     return await api.get(`/admin/all`)
          .catch((err) => {
               error(err.response?.data.message)
               setLoading(false)
          })
}

export const deleteEmployee = async (id, setLoading) => {
     return await api.get(`/admin/${id}`)
          .catch((err) => {
               setLoading(false)
               error(err.response?.data.message)
          })
}
