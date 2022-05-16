import React, { useState, useEffect } from 'react'
import Auth from './App/Auth'
import { Switch, Route, useHistory } from 'react-router-dom'
import MainApp from './App/index'
import { connect } from 'react-redux'
import { getUserData } from './Redux/ApiCalls/System'
import {Token} from "./Components/Variable";
import Loader from './Components/Loaders/Loader'

const App = ({ isAuth }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   let token = localStorage.getItem('token')
  //   let id = localStorage.getItem('id')
  //   if (id && token) {
  //     setLoading(true)
  //     getUserData(id, history, setLoading)
  //   } else {
  //     history.push('/login')
  //   }
  // }, [])


  return (
    <div className='app'>
      <Switch>
        {!Token && <Route path='/login' component={Auth} />}
        {Token && <Route path='/' component={MainApp} />}
        {!Token && <Route path="*" component={Auth} />}
      </Switch>
      <Loader bg="#fff" size={48} loading={loading} effect={false} />
    </div>
  )
}

const mapStateToProps = ({ reducer: { isAuth } }) => ({ isAuth })

export default connect(mapStateToProps)(App)
