import * as  type from "./type"
import axios from "axios"
const actionCreator = {
    template1(){
        let action = {
            type : type.ADD_CHANGE,
        }
        return action;
    },
    template2(payload){
        let action = {
            type : type.ADD_CHANGE,
            payload
        }
        return action
    }

}
export default actionCreator;