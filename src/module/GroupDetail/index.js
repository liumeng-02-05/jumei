import actionCreator from "../../store/Detail/actionCreator"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupDetail = connect(state => state.Detail,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupDetail};
