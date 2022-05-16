import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Pages from './Pages';

const MainApp = () => {

     return <Layout style={{ height: '100vh' }}>
          <Sidebar />
          <Layout className="site-layout">
               <Navbar />
               <Pages />
          </Layout>
     </Layout>
};

export default MainApp;