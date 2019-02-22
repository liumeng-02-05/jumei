import React,{ Component } from 'react'
import './index.scss'
import {Link} from "react-router-dom"
import img from "../../../assets/logo.png"
import img2 from "../../../assets/search_list2.png"
class Head extends Component{
    constructor(props){
        super(props)
        this.state={
            HeadFlag : true
        }
        this.change = this.change.bind(this) 
        
    }
    change(){
        let {HeadFlag} = this.state;
        this.setState({
            HeadFlag : false
        })
    }
   
    render() {
        let {HeadFlag} = this.state
        return(
            <div id="Head-box">
                {HeadFlag ?  <div className="Head-top"> 
                   <img src={img} alt=""  />
                    <p>聚美优品·我为自己代言</p>
                    <button>前往聚美</button>
                    <i
                        onClick={this.change}
                    ></i> 
                </div>
                : ''}
                <div className="Head-search clear">
                    <a href="javascript:;" >
                        <img src={require('../../../assets/search_btn.png')}  alt="" />
                        <span>搜索商品 分类 功效</span>
                    </a>
                    <img src={img2} alt="" />
                </div>
                <div className="Head-nav">
                    <ul>
                        <li>
                            <Link  className="a-nav"
                                 to= {{
                                    pathname: '/home',
                                }}
                            >首页</Link>
                        </li>
                        <li>
                            <a href="javascript:;">急速免税店</a>
                        </li>
                        <li>
                            <a href="javascript:;">母婴</a>
                        </li>
                        <li>
                            <a href="javascript:;">青奢</a>
                        </li>
                        <li>
                            <a href="javascript:;" >名品专卖</a>
                        </li>
                    </ul>
                </div>
            </div>
        )       
    }
}

export default Head