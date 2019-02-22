import {createStore,applyMiddleware} from  "redux"
/*要想使用异步操作,actionCreator.js返回的是actions,如果使用异步操作那么返回值就不是actions
所以引入了redus的插件 redux-thunk 解决这个问题  在actionsCreator返回dispatch是一个函数将异步操作
放在函数内 dispatch(cations)
*/
import thunk from "redux-thunk"
//引入管理全局reducer的
import reducer from "./reducer"
//将数据发送到reduces中
const stote = createStore(reducer,applyMiddleware(thunk))

export default stote;


