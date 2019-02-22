import React,{ Component } from 'react'
import './index.scss'
import { Toast } from 'antd-mobile';
import {GroupShopcar} from "../../../module/GroupShopcar/index"
class Shopcar extends Component{
    constructor(props){
        super(props)
        this.state={
            showflag: true,
            flag2: false,
            flag : true,
            totalNum : 0 ,
            totalPrice : 0,
        }
        this.shopcar = this.shopcar.bind(this)
        this.total = this.total.bind(this)
        this.goback = this.goback.bind(this)
        this.gohome = this.gohome.bind(this)
        this.change = this.change.bind(this)
    }
    shopcar(){
        let {push} = this.props.history;
        push('/home')
    }
    total(){
        let { cars } = this.props
        let {showflag} = this.state;
        if( cars.length ){
            this.state.totalNum = 0
            this.state.totalPrice = 0
            cars.map( item => {
                this.state.totalNum += item.num
                this.state.totalPrice += (item.num * item.price)
                this.state.showflag = false
            })
            this.setState({})
        }else{
            this.setState({
                showflag : true
            })
        }
        
    }
    goback(){
        let {go}  = this.props.history;
        go(-1)
    }
    change(){
        let {flag2} = this.state;
        this.setState({
            flag2 : !flag2
        })
    }
    componentWillMount(){
        let user = localStorage.getItem("username");
        let {push} = this.props.history;
        if(!user){
            setTimeout(() => {
               push("/login")
            },100)
            Toast.info("请先登录",2)
        }
        this.total()
    }
    componentWillReceiveProps(){
        this.total();
    }
    changeNum(data){
        let {addCar} = this.props
        let datalist = {
            id : data.id ,
            num : 1 
        }
        addCar(datalist,() => {
            Toast.info("添加商品成功",2)
            this.total()
        }
        )
    }
    jian(data){
        let {jian} = this.props
        let datalist = {
            id : data.id ,
        }
        jian(datalist,() => {
            Toast.info("减少商品成功",2)
            this.total()
        })
    }
    del(data){
       
        let {del} = this.props
        let datalist = {
            id : data.id ,
        }
        del(datalist,() => {
            Toast.info("删除商品成功",2)
            this.total()
        })
    }
    renderul(){
        let {cars} = this.props;
        let {flag2} = this.state
        if(cars){
            // console.log(cars)
            return(
                <ul>
                    {cars.map(item =>{
                        return(
                            <li key={item.id}>
                            <i className="i-active"></i>
                            <img src={item.img}  alt="" />
                            <div className="Shopcarmsg-ul">
                                 <p>
                                     <s>[急速免税]</s>
                                     {item.name}
                                 </p>
                                 <b>
                                     <s>25ml*20ea</s>
                                     <u>×1</u>
                                 </b>
                                 {flag2 ? <s>
                                     <b
                                     onClick = {this.jian.bind(this,item)}
                                     ></b>
                                     <i> {item.num}</i>
                                     <b className="add"
                                       onClick={this.changeNum.bind(this,item)}
                                     ></b>
                                 </s> : ""}
                                 <i>
                                     <s>
                                         <i>¥{item.price}</i>
                                     </s>
                                     { flag2 ?   <b>
                                       <u
                                           onClick={this.del.bind(this,item)}
                                         >删除</u>
                                         <span></span>
                                         <u>完成</u>
                                         
                                     </b>  : ""}
                                     <u
                                        onClick={this.change}
                                     >编辑</u>
                                 </i>
                            </div>
                        </li>
                        )
                    })
                    }
                </ul>
            )
        }
    }
    gohome(){
        let {push} = this.props.history;
        push('/home')
    }
    render() {
        let {showflag,totalPrice,totalNum} = this.state
        let {cars} = this.props
        return(
            <div id="Shopcar-box">
               <div className="Shopcar-top">
                    <img src="http://placehold.it/24x17/"  className="img1" 
                        onClick={this.goback}
                    />
                    <p>购物车</p>
                    <img  src="http://placehold.it/18x18/"  className="img2" 
                        onClick={this.gohome}
                    />
                </div> 
                {showflag ? <div className="shopcar-shopmsg">
                    <img src="http://placehold.it/18x18/"  />
                    <p>您的购物车中没有商品，请先去挑选心爱的商品吧！</p>
                    <button
                        onClick={this.shopcar}
                    >去逛逛</button>
                </div> :
                <div id="Shopcarmsg-box">
                <div className="Shopcarmsg-top">
                    <p>
                        <img src="http://placehold.it/15x15/" />
                        <i>11:22:33</i>
                        <u>结算时间结束后，商品可能被抢空，请尽快结算</u>
                    </p>
                   <b>
                        <i className="i-active"></i>
                        <span>聚美优品发货</span>
                   </b>
                   {this.renderul()}
                   <p className="Shopcarmsg-avoid">
                        <i>免</i>
                        <span>已享指定商品包邮</span>
                    </p>
                </div>
                {!showflag ? <div className="Shopcarmsg-bottom">
                    <i className="i-active"></i>  
                    <span>全选</span>   
                    <s>合计</s>    
                    <u>¥{totalPrice}</u>   
                    <button>去结算({cars.length})</button>   
                </div> : ""}
            </div>
             }
            </div>
        )       
    }
}

export default GroupShopcar(Shopcar)
