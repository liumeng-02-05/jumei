import state from "./state";
import * as type from "./type"
const reducer = (previousStata = state ,action)=> {
    let new_state = {...previousStata};
    switch (action.type) {
        case type.GET_HOME:
            //用户操作
            new_state.HomeLists = action.payload;
            break;
        case type.GET_HOME2:
            new_state.HomeLists = action.payload;
        default:
            break;
    }
    return new_state;
}
export default reducer;










