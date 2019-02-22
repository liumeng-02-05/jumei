import React,{ Component } from 'react'
import './index.scss'
import {GroupHome} from "../../../module/GroupHome/index"
import {Link} from "react-router-dom"
class  Home extends Component{
    constructor(props){
        super(props);
        this.daytime = this.daytime.bind(this);
        this.day = this.day.bind(this);
    }
    componentWillMount(){
        let {homelist} = this.props;
        homelist(); 
    }
    renderUl(){
        let {HomeLists} = this.props;
        // console.log(HomeLists)
        if(HomeLists){
            return (
                <ul>
                    {HomeLists.map(item => {
                           return(
                            <li key={item.item_id ? item.item_id : item.itemid}>
                            <Link 
                                to= {{
                                    pathname: '/detail',
                                    search: `/${item.item_id ? item.item_id : item.itemid}`
                                    
                                }}
                            >
                                {/* <img src={item.image_url_set.main[320] ?item.image_url_set.main[320] :item.area_icon[320] } /> */}
                                <div className="Home-shopping-msg">
                                    <p>{item.name}</p>
                                    <span>
                                        <s>{item.jumei_price ? '¥' : ""}<i>{item.jumei_price}</i></s>
                                        <u>{item.jumei_price ? '¥' : ""}{item.market_price}</u>
                                    </span>
                                    <b>{item.product_desc}</b>
                                </div>
                            </Link>
                        </li>
                           )
                        })}
                </ul>
            ) 
        }
       
    }
    daytime(){
        let {getDate2} = this.props;
        getDate2();
    }
    day(){
        let {homelist} = this.props;
        homelist();
    }
    render() {
       
        return( 
            <div id="Home-box">
                
                <div className="Home-time">
                    <a href="javascript:;"
                        onClick={this.day}
                    >今日十点上新</a>
                    <a href="javascript:;"
                        onClick={this.daytime}
                    >明日十点预告</a>
                </div>
                <div className="Home-shopping">
                    {/* <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="http://mp5.jmstatic.com/product/001/305/1305834_std/1305834_dx_1154_400.jpg?_t=1501410153&imageView2/2/w/800/q/90" />
                                <div className="Home-shopping-msg">
                                    <p>雅诗兰黛特润修护肌透精华露100ml,修复肌肤损伤</p>
                                    <span>
                                        <s>¥<i>978</i></s>
                                        <u>¥1099</u>
                                    </span>
                                    <b>4228条评论</b>
                                </div>
                            </a>
                        </li>
                    </ul> */}
                    {this.renderUl()}
                </div>
            </div>
        )       
    }
}

export default GroupHome(Home)