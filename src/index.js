import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient, } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryParamProvider } from 'use-query-params';
import { Provider } from 'react-redux'
import store from './Redux/store'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'antd/es/modal/style';
import 'antd/es/slider/style';
import 'antd/dist/antd.less'
import "./App.scss";

const queryClient = new QueryClient()

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <QueryParamProvider ReactRouterRoute={Route}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide} />
        <QueryClientProvider client={queryClient}>
          <App />
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);

