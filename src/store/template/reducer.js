import state from "./state";
import * as type from "./type"
const reducer = (previousStata = state ,action)=> {
    let new_state = {...previousStata};
    switch (action.type) {
        case type.ADD_CHANGE:
            //用户操作
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;



