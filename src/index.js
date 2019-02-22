import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "./module/rem"
//引入全局的样式
import "./stylesheets/main.scss"
// 引入全局字体库
import "../node_modules/font-awesome/css/font-awesome.css"//引入全局的工具库
import {BrowserRouter as Router} from "react-router-dom"
//全局引入axios 
import axios from 'axios'
//插件的按需引入  antd-mobile的样式 
import 'antd-mobile/dist/antd-mobile.css';
//引入容器组件
//引入redux   Previder 
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}> 
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));



