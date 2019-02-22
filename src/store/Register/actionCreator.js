import * as  type from "./type"
import axios from "axios"
const actionCreator = {
    Register(payload){
        let action = {
            type : type.REGISTER,
            payload
        }
        return action;
       
    }

}
export default actionCreator;