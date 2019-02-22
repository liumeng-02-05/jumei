import React,{ Component } from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import img1 from "../../../assets/unpaid.png"
import img2 from "../../../assets/unconfirm.png"
import img3 from "../../../assets/uncomment.png"
import img4 from "../../../assets/refund.png"
import img5 from "../../../assets/myorder.png"
import img6 from "../../../assets/myfund.png"
import imgu1 from "../../../assets/rmaservice.png"
import imgu2 from "../../../assets/feedback.png"
import imgu3 from "../../../assets/address.png"
import imgu4 from "../../../assets/logout.png"
import imgu5 from "../../../assets/tel.png"
class Mine extends Component{
    constructor(props){
        super(props)
        this.state = { 
            LoginFlag : true,
            usernamemsg : ""
        }
        this.goback = this.goback.bind(this)
        this.home = this.home.bind(this)
        this.quit = this.quit.bind(this)
        this.renderD = this.renderD.bind(this)
    }
    renderD(){
        let {data} = this.props;
       return (
        <ul>
        {data.map(item =>{
            return(
                <li key={item.id} >
                   <a href="javascript:;">
                        <img src={item.img} alt="" />
                        <span>{item.name}</span>
                    </a>
                </li>
            )
        })
        }
    </ul>
       )
    }
    renderDu(){
        let {data2} = this.props;
       return (
        <ul>
        {data2.map(item =>{
            return(
                <li key={item.id} >
                   <a href="javascript:;">
                        <img src={item.img}  alt="" />
                        <span>{item.name}</span>
                        <i></i>
                    </a>
                </li>
            )
        })
        }
    </ul>
       )
    }
    componentWillMount(){
       this.renderD()
        let username = localStorage.getItem("username")
        let {LoginFlag,usernamemsg} = this.state
        if(username){
            this.setState({
                LoginFlag : false,
                usernamemsg : username
            })
        }
    }
 
    goback(){
        let {go}  = this.props.history
        go(-1)
    }
    home(){
        let {push} = this.props.history
        push("home")
    }
    quit(){
        let {push} = this.props.history;
        localStorage.setItem("username","")
        push('/home')
    }
    render() {
        let {LoginFlag,usernamemsg} = this.state
        return(
            <div id="Mine-box">
                <div className="Mine-top">
                   <p>
                        <a href='javascript:;' className="goback"
                            onClick={this.goback}
                        ></a>
                        <span>我的聚美</span>
                        <a href="javascript:;" className="home"
                            onClick={this.home}
                        ></a>
                   </p>
                    <i></i>
                     { LoginFlag ?  <span>
                        <Link
                            to="/register"
                        >注册</Link>
                        <b></b>
                        <Link
                            to="/login"
                        >登录</Link>
                    </span>
                    : ""}
                    {!LoginFlag ? 
                        <span>
                            <i>{usernamemsg}:您好</i>
                        </span>
                    : ""}
                </div>
                {/* 订单 */}
                <div className="Mine-indent">
                    <p>
                    <img src={img5} alt="" />
                        <span>我的订单</span>
                        <u></u>
                        <b>查看我的全部订单</b>
                    </p>
                    {this.renderD()}
                </div>
                {/* 我的资产 */}
                <div className="Mine-property">
                    <p>
                        <img src={img6} alt="" />
                        <span>我的资产</span>
                    </p>
                    <ul>
                        <li>
                            <a href="javascript:;">现金卷</a>
                        </li>
                        <li>
                            <a href="javascript:;">红包</a>
                        </li>
                        <li>
                            <a href="javascript:;">聚美余额</a>
                        </li>
                        <li>
                            <a href="javascript:;">礼品卡</a>
                        </li>
                    </ul>
                </div>
                {/* 售后服务 */}
                <div className="Mine-service">
                    {/* <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="http://placehold.it/20x20/"  alt="" />
                                <span>售后服务</span>
                                <i></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://placehold.it/20x20/"  alt="" />
                                <span>意见反馈</span>
                                <i></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://placehold.it/20x20/"  alt="" />
                                <span>收货地址</span>
                                <i></i>
                            </a>
                        </li>
                        <li
                            onClick = {this.quit}
                        >
                            <a href="javascript:;">
                                <img src="http://placehold.it/20x20/"  alt="" />
                                <span>退出登录</span>
                                <i></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img src="http://placehold.it/20x20/"  alt="" />
                                <span>400-123-8888</span>
                                <i></i>
                            </a>
                        </li>
                    </ul> */}
                    {this.renderDu()}
                </div>
                {/* 客服热线 */}
                <div className="Mine-phone">
                    <p>客服热线400-123-8888 (8:00-22:00)</p>
                    <p>拨打前请记录您的UID  0    </p>
                </div>
            </div>
        )       
    }
}
Mine.defaultProps = {
    data : [
        {
            id : '001',
            name : "待付款",
            img : img1
        }, 
        {
            id : '002',
            name : "待收货",
            img : img2
        },   
        {
            id : '003',
            name : "待评价",
            img : img3
        },   
        {
            id : '004',
            name : "退货/退款",
            img : img4
        }  
    ],
    data2 : [
        {
            id : '001',
            name : "售后服务",
            img : imgu1
        }, 
        {
            id : '002',
            name : "意见反馈",
            img : imgu2
        },   
        {
            id : '003',
            name : "收货地址",
            img : imgu3
        },   
        {
            id : '004',
            name : "退出登录",
            img : imgu4
        },     
        {
            id : '005',
            name : "400-123-8888",
            img : imgu5
        }     
    ]
}
export default Mine