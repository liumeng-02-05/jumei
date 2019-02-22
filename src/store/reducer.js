//真正统一管理分片的reducer  管理的工具是combineReducers 
import { combineReducers } from 'redux';
import HOME from "./Homelistdate/reducer"
import Roll from "./RollList/reducer"
import Detail from "./Detail/reducer"
import Login from "./Login/reducer"
import Register from "./Register/reducer"
import Shopcar from "./Shopcar/reducer"
const reducer = combineReducers({
    HOME,Roll,Detail,Login,Register,Shopcar
})

export default reducer