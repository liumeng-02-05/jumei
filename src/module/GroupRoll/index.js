import actionCreator from "../../store/RollList/actionCreator"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupRoll = connect(state => state.Roll,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupRoll};
