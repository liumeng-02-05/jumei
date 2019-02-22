import state from "./state";
import * as type from "./type"
const reducer = (previousStata = state ,action)=> {
    let new_state = {...previousStata};
    switch (action.type) {
        case type.DETAIL_DATA:
            //用户操作
            new_state.DetailULdata = action.payload;
            break;
        case type.DETAIL_DETAIL:
            new_state.detailDate = action.payload;
        default:
            break;
    }
    return new_state;
}
export default reducer;



