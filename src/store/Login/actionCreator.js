import * as  type from "./type"
import axios from "axios"
const actionCreator = {
    login(payload){
        let action = {
            type : type.ADD_LOGIN,
            payload
        }
        return action;
       
    }

}
export default actionCreator;