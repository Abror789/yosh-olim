import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import Icon from '../../Components/Icon';
import { NavLink, useLocation } from 'react-router-dom'
import routes from './routes';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {


     const location = useLocation()
     const [openKeys, setOpenKeys] = useState([])
     const [selectedKeys, setSelectedKeys] = useState([])
     const [collapsed, setCollapsed] = useState(localStorage.getItem('collapsed') === 'true')


     useEffect(() => {
          const path = location.pathname.split('/').filter(item => item)
          if (path) {
               if (path[0] === 'agents' || path[0] === 'product') {
                    setSelectedKeys([path[1]] || [])
                    setOpenKeys([...openKeys, path[0]])
               } else {
                    setSelectedKeys([path[0]] || [])
               }
          }
     }, [location])

     useEffect(() => {
          localStorage.setItem('collapsed', collapsed)
     }, [collapsed])

     const openKeysChange = (current) => {
          if (openKeys.includes(current)) {
               const i = openKeys.indexOf(item => item === current)
               openKeys.splice(i, 1)
          } else {
               openKeys.push(current)
          }
          setOpenKeys([...openKeys])
     }



     return <Sider trigger={null} collapsible collapsed={collapsed} width={256} theme='light'>
          <div className={`logo ${collapsed ? "collapsed" : ''}`}>
               <div className="img-wrapper">
                    <img src="/assets/icons/logo.svg" alt=""/>
                    <h6>Yosh olim</h6>
                    {/*<img src="/assets/icons/logo.svg" alt="" className='logo-icon' />*/}
               </div>
          </div>
          <div className="sidebar-scroll">
               <Menu
                    selectedKeys={selectedKeys}
                    defaultOpenKeys={openKeys}
                    mode="inline"
               >
                    {
                         routes.map((item, index) => {
                              return (
                                   item?.children ?
                                        <SubMenu onTitleClick={() => openKeysChange(item.path)} key={index.toString()} icon={item.icon} title={item.title} popupClassName="submenu-popup">
                                             {
                                                  item.children.map((el, i) => {
                                                       return (
                                                            <Menu.Item key={el.path} eventKey={el.key || el.path}>
                                                                 <NavLink to={`/${item.path}/${el.path}`}>{el.title}</NavLink>
                                                            </Menu.Item>
                                                       )
                                                  })
                                             }
                                        </SubMenu>
                                        :
                                        <Menu.Item key={index.toString()} eventKey={item.key || item.path} icon={<Icon icon={item.icon} />}>
                                             <NavLink to={`/${item.path}`}>{item.title}</NavLink>
                                        </Menu.Item>
                              )
                         })
                    }

               </Menu >
          </div >

          <div className={`toggle-menu ${collapsed ? 'collapsed' : ''}`}>
               <div className="icon-wrapper" onClick={() => setCollapsed(p => !p)}>
                    <Icon icon="menu-drop" />
               </div>
          </div>
     </Sider >
};

export default Sidebar;
