import state from "./state";
import * as type from "./type"
const reducer = (previousStata = state ,action)=> {
    let new_state = {...previousStata};
    switch (action.type) {
        case type.ROLL_DATA:
            //用户操作
            new_state.RollList = action.payload;
            break;
        default:
            break;
    }
    return new_state;
}
export default reducer;



