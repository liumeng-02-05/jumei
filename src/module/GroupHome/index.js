import actionCreator from '../../store/Homelistdate/actionCreator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupHome = connect(state => state.HOME,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupHome};
