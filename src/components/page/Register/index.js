
import React,{ Component } from 'react'
import './index.scss'
import {Toast} from "antd-mobile"
import {GroupRegister} from "../../../module/GroupRegister"
import {Link} from "react-router-dom"
class Register extends Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
        this.goback = this.goback.bind(this)
    }
    register(){
        let username = this.value.value;
        let password = this.value2.value;
        let { Register} = this.props;
        let user = {
            username,password
        }
        Register(user);
        let {push} = this.props.history
        let usernames = localStorage.getItem("username");
        if(usernames){
            Toast.info("注册成功",1)
            push("login")
           
        }
    }
    goback(){
        let {go} = this.props.history;
        go(-1)
    }
    render() {
        return(
            <div id="Register-box">
                <div className="Register-top">
                    <img src="http://placehold.it/44x44/"  alt="" 
                        onClick={this.goback}
                    />
                    <span>注册</span>
                    <Link 
                        to="/login"
                    >登录</Link>
                </div>
                <div className="Mine-phone">
                    <h3>使用手机注册</h3>
                    <p>
                        <input type="text" placeholder="请输入11位手机号"  ref = {el =>this.value= el} />
                    </p>
                    <p>
                        <input  type="text" placeholder="请输入短信验证码"   />
                        <button>验证</button>
                    </p>
                    <p>
                        <input type="password" placeholder="6-16位登录密码" ref = {el =>this.value2= el} />
                    </p>
                    <button
                        onClick={this.register}
                    >注册</button>
                    <b>点击注册，表示同意<a href="javascript:;">《聚美优品用户协议》</a></b>
                </div>
            </div>
        )       
    }
}

export default GroupRegister(Register)