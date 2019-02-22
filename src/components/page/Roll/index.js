import React,{ Component } from 'react'
import './index.scss'
import {GroupRoll} from "../../../module/GroupRoll/index"
import {Link} from "react-router-dom"
class Roll extends Component{
    constructor(props){
        super(props)
       
    }
    componentWillMount(){
        let {getDate} = this.props;
        getDate(); 
    }
    renderUl(){
        let {RollList} = this.props;
        // console.log(RollList)
        if(RollList){
            return (
                <ul>
                    {RollList.map(item => {
                           return(
                            <li key={item.item_id}>
                                <Link 
                                    to={{
                                         pathname: '/detail',
                                         search: `/${item.item_id}`
                                    }}
                                >
                                    <div className="Roll-shopping-top">
                                        <img src={item.image} alt="" />
                                        <span>{item.buyer_number_text}</span>
                                    </div>
                                    <div className="Roll-shopping-bottom">
                                        <p >
                                            <i>{item.group_name_tag}</i>
                                            <span>{item.short_name}</span>
                                        </p>
                                        <span>
                                            <b>{item.jumei_price}</b>
                                            <u>单买价¥192</u>
                                            <button>去开团</button>
                                        </span>
                                    </div>
                                </Link>
                            </li>
                           )
                        })}
                </ul>
            ) 
        }
    }
    render() {
        return(
            <div id="Roll-box">
                <div className="Roll-shopping">
                    {/* <ul> */}
                        {/* <li>
                            <a href="javascript:;">
                                <div className="Roll-shopping-top">
                                    <img src="http://mp5.jmstatic.com/product/002/291/2291887_std/2291887_1000_1000.jpg?v=1458721588&imageView2/2/w/440/q/90" alt="" />
                                    <span>9.4万条评论</span>
                                </div>
                                <div className="Roll-shopping-bottom">
                                    <p >
                                        <i>[2人团]</i>
                                        <span>[手机专享] AHC 玻尿酸BS补水洗面奶</span>
                                    </p>
                                    <span>
                                        <b>¥69</b>
                                        <u>单买价¥192</u>
                                        <button>去开团</button>
                                    </span>
                                </div>
                            </a>
                        </li> */}
                    {/* </ul> */}
                    {this.renderUl()}
                </div>
                <div className="Roll-left-float"></div>
            </div>
        )       
    }
}

export default GroupRoll(Roll)