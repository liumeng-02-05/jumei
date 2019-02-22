import React,{ Component } from 'react'
import './index.scss'
import {GroupDetail} from "../../../module/GroupDetail"
import {GroupShopcar} from "../../../module/GroupShopcar/index"
import {Link} from "react-router-dom";
import {Toast} from 'antd-mobile'

class Detail extends Component{
    constructor(props){
        super(props)
        this.goback = this.goback.bind(this)
        this.goshopcar = this.goshopcar.bind(this)
    }
    componentWillMount(){
        let {gatDataUL,getData} = this.props;
        gatDataUL();
        var id = this.props.location.search.substring(2);
        getData(id);
        
    }
    renderUl(){
        let { DetailULdata} = this.props;
        // console.log(DetailULdata)
        if(DetailULdata){
            return(
                <ul>
                    {DetailULdata.map(item =>{
                        return(
                            <li key={item.brand_id} >
                                <Link
                                    to={{
                                        pathname : '/detail',
                                        search: `/${item.brand_id}`
                                    }}
                                >
                                    <img src={item.image_url_set.dx_image[320] ? item.image_url_set.dx_image[320] : item.image }  alt="" />
                                    <p>{item.short_name}</p>
                                    <span>¥{item.jumei_price}</span>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            )
        }
    }
    shopcars(data){
        let username = localStorage.getItem("username")
       let { addCar } = this.props;
        let {push} = this.props.history;
        if(username){
            let user = {
                id : data.item_id,
                img : data.image_url_set.dx_image[320],
                price :Number(data.price_detail.desp.substring(3,9))+ Number(data.price_detail.desp.substring(15)),
                name : data.name,
                num : 1
            }
            
        addCar(user,() => {
            Toast.info('加入购物车成功')
        })
        }else{
        setTimeout(() => {
            push("/login")
        }, 2000);
        Toast.info('请先登录',2)
        }
    }
    goback(){
        let{go} = this.props.history;
        go(-1);
    }
    goshopcar(){
        let{push} = this.props.history;
        push('/shopcar')
    }
    renderData(){
        let { detailDate ,cars} = this.props ;
        // console.log(cars)
        if(detailDate){
            return(
                <div>
                    <div className="Detail-top">
                    <a href='javascript:;' className="goback" 
                    onClick={this.goback}
                    ></a>
                    <span>兰蔻粉水清滢柔肤水(干性)400ml</span>
                    <a href="javascript:;" className="home"></a>
                    </div>
                    <div className="Detail-shopingmsg">
                        <div className="Detail-shopingmsg-img">
                            <img src={detailDate.image_url_set.dx_image[320]} className="img1"  alt="" />
                            <img src={detailDate.image_url_set.dx_image[320]}  alt="" />
                        </div>
                        <p>
                            <i>￥{Number(detailDate.price_detail.desp.substring(3,9))+ Number(detailDate.price_detail.desp.substring(15))}</i>
                            <s>￥270</s>
                            <span>
                                价格详情
                                <img src="http://placehold.it/12x12/"  alt="" />
                            </span>
                            <b>185人已购买</b>
                        </p>
                        <span>还剩9:47:26</span>
                        <b>
                            <i>聚美自营</i>
                            {detailDate.name}
                        </b>
                        <ul>
                            <li>
                                <span>分期</span>
                                <b>该商品最多可享花呗12期分期购买福利</b>
                            </li>
                            <li>
                                <span>运费</span>
                                <b>本商品满299元或2件包邮（新疆部分区域除外）</b>
                            </li>
                            <li>
                                <span>说明</span>
                                <i>
                                    <p>
                                        <b>
                                            <i></i>
                                            <span>自营保税仓发货</span>
                                        </b>
                                        <b>
                                            <i></i>
                                            <span>24小时内发货</span>
                                        </b>
                                    </p>
                                    <p>
                                        <b>
                                            <i></i>
                                            <span>7天拆封无条件退货</span>
                                        </b>
                                        <b>
                                            <i></i>
                                            <span>支持分期</span>
                                        </b>
                                    </p>
                                </i>
                                <u></u>
                            </li>
                        </ul>
                    </div> 
                    <div className="Detail-bottom">
                        <p>
                            <i className="fa fa-hand-peace-o"></i>
                            <span>店铺</span>
                        </p>
                        <p
                            onClick={this.goshopcar}
                        >
                            <i className="fa fa-shopping-bag"></i>
                            <span>购物车</span>
                            <s>{cars.length}</s>
                        </p>
                        <button
                             onClick = {this.shopcars.bind(this,detailDate)} 
                        >加入购物车</button>
                        <button>立即购买</button>
                    </div>
                </div>
            )
        }
    }
    render() {
       
        return(
            <div id="Detail-box">
                
                {this.renderData()}
                {/* 推荐 */}
                <div className="Detail-ecommend">
                    <h2>您也许还喜欢</h2>
                    {/* <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="http://placehold.it/162x162/"  alt="" />
                                <p>【韩国版】兰芝气垫霜15g*2</p>
                                <span>¥209</span>
                            </a>
                        </li>
                        
                    </ul> */}
                    {this.renderUl()}
                </div>
               
            </div>
        )       
    }
}

export default GroupShopcar(GroupDetail(Detail));