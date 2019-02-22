import React,{ Component } from 'react'
import './index.scss'
import {NavLink} from "react-router-dom"
class Foot extends Component{
    constructor(props){
        super(props)
    }
    render() {
        let { FootNavs } = this.props
        return(
            <div id="Foot-box">
                <ul>
                    {FootNavs.map((item) => {
                    return (
                        <li key = {item.id}>
                            <NavLink 
                                to={item.path}
                                activeClassName="active"
                                exact
                            >
                                <i className={'fa fa-'+item.icon} aria-hidden="true"></i>
                                <span>{ item.title }</span>
                            </NavLink>
                        </li>
                    )
                })}
                </ul>
            </div>
        )       
    }
}
Foot.defaultProps = {
    FootNavs: [
        {
            id: '1',
            title: '首页',
            path : "/",
            exact :　true,
            icon : "home"
        },
        {
            id: '2',
            title: '拼团',
            path : '/roll',
            icon : "user-circle"
        },
        {
            id: '3',
            title: '购物车',
            path : '/shopcar',
            icon : "shopping-bag"
        },
        {
            id: '4',
            title: '我的',
            path : "/mine",
            icon : "user-o"
        },
    ]
}

export default Foot