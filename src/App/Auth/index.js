import React, { useState } from 'react'
import TextFeild from '../../Components/Inputes/TextFeild'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsAuth, setUserData } from '../../Redux/Reducers/Reducer'
import bg from '../../../src/images/bg.svg'
import axios from "axios";

const Auth = ({ setIsAuth, setUserData }) => {

     const history = useHistory()

     const [phone, setPhone] = useState('')
     const [password, setPassword] = useState('')
     const [error, setError] = useState(false)
     const [loading, setLoading] = useState(false)

     const submitFunc = e => {
          e.preventDefault()
          setLoading(true)
          axios.get(`https://webxost2.ru/rounded/api.php?type=login&login=${phone}&pass=${password}`)
              .then((res)=>{
                  res.data.token && localStorage.setItem('token',res.data.token)
                  setLoading(false)
                  window.location.reload()
                  history.push('/dashboard')
              })
              .catch((err)=>{
                  setLoading(false)
                  localStorage.clear()
              })

     }

     return (
          <div style={{backgroundImage: `url(${bg})`}} className='auth'>
               <div className="main">
                   <div className="text">
                        <div className="d-flex">
                             <img src="./logo.png" alt=""/>
                             <h6 className="">Yosh Olim</h6>
                        </div>
                        <p className="mb-40">Ant Design is the most influential web design specification in Xihu district</p>
                   </div>
                    <div className="form-wrapper">
                         <form onSubmit={submitFunc}>
                              <TextFeild placeholder="Login*" type="text" value={phone} setValue={setPhone} disabled={loading} error={error} setError={setError}/>
                              <TextFeild placeholder={'Parol*'} type="password" value={password} setValue={setPassword} disabled={loading} error={error} setError={setError} />
                              <Button type="primary" loading={loading} className='mt-16' htmlType='submit' disabled={phone.length<2 || !(password.length > 2)}>Kirish</Button>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default connect(null, { setIsAuth, setUserData })(Auth)
