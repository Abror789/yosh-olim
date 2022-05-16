import React from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard'
import Masterclass from "./Masterclass";
import Ad from "./Ad";
import ActionMasterclass from "./Masterclass/Action";

const { Content } = Layout;

const Pages = () => {

     return (
          <Content className="pages-layout" id='pages-layout-sidebar'>
               <Switch>

                   <Route path={'/dashboard'} component={Dashboard} exact />
                   <Route path={'/masterclass'} component={Masterclass} exact />
                   <Route path={'/masterclass/create'} component={ActionMasterclass} exact />
                   <Route path={'/masterclass/update/:id'} component={ActionMasterclass} exact />
                   <Route path={'/ad'} component={Ad} exact />
                   <Redirect to='/dashboard' />
               </Switch>

          </Content>
     )
};

export default Pages;
