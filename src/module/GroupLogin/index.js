import actionCreator from "../../store/Login/actionCreator"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupLogin = connect(state => state.Login,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupLogin};
