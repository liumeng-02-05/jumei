import React,{ Component } from 'react'
import './index.scss'
import {GroupLogin} from "../../../module/GroupLogin/index"
import {Toast} from "antd-mobile"
import {Link} from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.goback = this.goback.bind(this)
    }
    login(){
        let username = this.value.value;
        let password = this.value2.value;
        let { login} = this.props;
        let user = {
            username,password
        }
        login(user);
        let {push} = this.props.history
        let usernames = localStorage.getItem("username");
        if(usernames){
            if(usernames !== username){
                Toast.info("用户名错误",1)
            }else{
                Toast.info("登录成功",1)
                push("mine");
            }
        }else{
            Toast.info("用户名不存在",1)
        }
    }
    goback(){
        let {go} = this.props.history;
        go(-1)
    }
    render() {
        return(
            <div id="Login-box">
                 <div className="Login-top">
                    <img src="http://placehold.it/44x44/"  alt="" 
                        onClick={this.goback}
                    />
                    <span>登录</span>
                    <Link
                        to="/register"
                    >注册</Link>
                </div>
                <div className="Login-phone">
                    <h3>使用手机登录</h3>
                    <p>
                        <input type="text" placeholder="请输入11位手机号"  ref = {el =>this.value= el} />
                    </p>
                    <p>
                        <input  type="password" placeholder="请输入短信验证码"  ref = {el =>this.value2= el} />
                        <button>验证</button>
                    </p>
                    <p>
                        <b>使用聚美帐号登录</b>
                        <s>30天免登录</s>
                    </p>
                    <button
                        onClick={this.login}
                    >登录</button>
                </div>
            </div>
        )       
    }
}

export default GroupLogin(Login)
