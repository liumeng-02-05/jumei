import actionCreator from "../../store/Register/actionCreator"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupRegister = connect(state => state.Register,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupRegister};
