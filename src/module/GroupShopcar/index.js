import actionCreator from "../../store/Shopcar/actionCreator"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


const GroupShopcar = connect(state => state.Shopcar,
     dispatch =>  bindActionCreators(actionCreator,dispatch)
)
export {GroupShopcar};
