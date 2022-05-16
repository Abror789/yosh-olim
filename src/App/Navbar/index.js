import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu, Dropdown, Image } from 'antd';
import { connect } from 'react-redux';
import { fileURL, fallback } from '../../Components/Variable';
import routes from './routes';
import {BellOutlined} from "@ant-design/icons";


const { Header } = Layout;

const Navbar = ({ userData }) => {

     const history = useHistory()
     const location = useLocation()

     const [title, setTitle] = useState('')

     const logout = () => {
          localStorage.clear()
          history.push('/login')
          window.location.reload()
     }

     useEffect(() => {

          const path = location.pathname.split('/').filter(item => item)

          if (path) {

               if (path[0] === 'agents' || path[0] === 'product') {
                    setTitle(routes.find(item => item.key === path[1])?.title)

                    if(location.pathname.startsWith('/agents/no_activated/create')){

                    setTitle(routes.find(item => item?.status === path[2])?.title)

                    }
               }
                else {

                    setTitle(routes.find(item => item.key === path[0])?.title)
               }
          }
     }, [location])
     const notificationUser = (e) => {
          e.stopPropagation()
     }

     const menuUser = (
          <Menu className='user-dropdown'>
               <Menu.Item key={'1'} onClick={() => { history.push('/dashboard/settings') }}>Settings</Menu.Item>
               <Menu.Item key={'2'} className='red' onClick={logout}>Logout</Menu.Item>
          </Menu>
     );


     return <Header className="site-layout-background" style={{ padding: 0 }}>
          <span className='nav-title medium-20 ml-40'>{title}</span>
          <div className="right">
               <div className="notification">
                    <BellOutlined />
                    <div className="num">
                         <span>12</span>
                    </div>
               </div>
               <Dropdown overlay={menuUser} trigger={['click']} placement="bottomRight">
                    <div onClick={notificationUser} className="user">
                         <div className="user-img">
                              {
                                   userData?.image ?
                                       <Image src={fileURL + userData?.image} fallback={"/assets/icons/no-img.svg"} height="40px" width="40px" preview={false} />
                                       : <Image src={"/assets/icons/no-img.svg"} preview={false} />
                              }
                         </div>
                         <div className="user-name">
                              <span>{userData?.first_name + ' ' + userData?.last_name}</span>
                         </div>
                    </div>
               </Dropdown>
          </div>
     </Header >
};

export default connect(({ reducer: { userData } }) => ({ userData }))(Navbar);

