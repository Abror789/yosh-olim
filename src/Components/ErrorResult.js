import React from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'

const ErrorResult = ({ title, status, goBack }) => {
     const history = useHistory()
     return (
          <Result
               status={status || "500"}
               title={title || 'Xatolik yuz berdi'}
               extra={goBack ?
                    <Button onClick={() => history.goBack()} type="primary">Ortga qaytish</Button>
                    : null}
          />
     )
}

export default ErrorResult