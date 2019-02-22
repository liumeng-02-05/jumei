import * as  type from "./type"
import axios from "axios"
const actionCreator = {
    getDate(){
        return dispatch =>{
            // axios.get("./data/Roll.json")
            // .then((res) => {
            //     // console.log(res);
            //     let action = {
            //         type: type.ROLL_DATA,
            //         payload: res.data.data
            //      }
            //      dispatch(action)
            // }).catch((err) => {
            //     console.log(err)
            // });
            //index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
            //index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
            axios.get("jumei/yiqituan/tab_list",
               {
                    params:{
                        tab: 'coutuan_home',
                        page: 1,
                        per_page: 20
                    }
               }
            )
            .then((res) => {
                // console.log(res)
                let action = {
                            type: type.ROLL_DATA,
                            payload: res.data.data
                         }
                         dispatch(action)
            })
            .catch(err => console.log(err))
        }
    }
}
export default actionCreator;