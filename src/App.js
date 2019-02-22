import React, { Component } from 'react';
import './App.css';
import Home from "./components/page/home"
import Foot from "./components/common/Foot"
import Roll from "./components/page/Roll"
import Head from "./components/common/Head"
import Shopcar from "./components/page/Shopcar"
import Mine from "./components/page/Mine"
import Login from "./components/page/Login"
import Register from "./components/page/Register"
import Detail from "./components/page/Detail"
import {Route,Switch,withRouter} from "react-router-dom"
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasFooter: true,
      hasHeader : true
    }
  }
  renderRoute(){
    let {Routes} = this.props;
    return Routes.map(item=><Route path={item.path} component={item.component} exact={item.exact} key={item.id}/>)
  }
  render() {
    let {hasFooter,hasHeader} = this.state
    return (
      <div className="App">
        {!hasHeader || <Head></Head>}
        <Switch>
          {this.renderRoute()}
        </Switch>
        {!hasFooter || <Foot></Foot>}
      </div>
    );
  }
  componentWillMount(){
    let {pathname} = this.props.location 
    let arr = ["/login","/register","/detail"]  //判断一个数组中有没有某一个字符
    let arr2 = ["/shopcar","/mine"]
    if( arr.indexOf(pathname) > -1 ){
      this.setState({
             hasFooter: false,
             hasHeader : false,
           })
    }else if(arr2.indexOf(pathname) > -1){
        this.setState({
          hasFooter: true,
          hasHeader : false,
        })
    }else{
      this.setState({
        hasFooter: true,
        hasHeader : true,
      })
    }
  }
  componentWillReceiveProps(props){
    // console.log(this.props.location.pathname,111)  //从前路由
    // console.log(props.location.pathname,222) //当前路由  
    let {pathname} = props.location 
    let arr = ["/login","/register","/detail"]  //判断一个数组中有没有某一个字符
    let arr2 = ["/shopcar","/mine"]
    if( arr.indexOf(pathname) > -1 ){
      this.setState({
             hasFooter: false,
             hasHeader : false
           })
    }else if( arr2.indexOf(pathname) > -1 ){
        this.setState({
          hasFooter: true,
          hasHeader : false
        })
    }else{
      this.setState({
        hasFooter: true,
        hasHeader : true
      })
    }
    // 判断是否登录  如果登录进入shopcar和mine  否则进入login页面
    // let username = localStorage.getItem("username")
    // let {push} =  props.history 
    // if(pathname === '/shopcar' || pathname === "/mine"){
    //     if(!username){
    //       push('/login')
    //     }
    // }
    
  }
}
App.defaultProps = {
  Routes : [
    {
      id : 1,
      path : "/",
      component : Home,
      exact : true
    },
    {
      id : 2,
      path : "/home",
      component : Home
    },
    {
      id : 3,
      path : "/login",
      component : Login
    },
    {
      id : 4,
      path : "/register",
      component : Register
    },
    {
      id : 5,
      path : "/roll",
      component : Roll
    },
    {
      id : 6,
      path : "/mine",
      component : Mine
    },
    {
      id : 7,
      path : "/shopcar",
      component : Shopcar,
    },
    {
      id : 8,
      path : "/detail",
      component : Detail,
    }

  ]
}
export default withRouter(App);
