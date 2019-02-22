import * as  type from "./type"
import axios from "axios"
const actionCreator = {
   homelist(){
    return dispatch =>{
            axios.get("./data/Home.json")
            .then((res) => {
                // console.log(res.data.item_list)
                    let action = {
                    type: type.GET_HOME,
                    payload: res.data.item_list
                 }
                 dispatch(action)
            }).catch((err) => {
                console.log(err)
            });
            //https://h5.jumei.com/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=
            // axios.get("jumei/index/ajaxDealactList",{
            //     params : {
            //         card_id: 4057,
            //         client_v: 1,
            //         page: 1,
            //         platform: 'wap',
            //         type: 'formal',
            //         page_key: ''
            //     }
            // })
            // .then((res) => {
            //     console.log(res)
            // })
            // .catch(err => console.log(err))
       }
   },
   getDate2(){
        return dispatch =>{
            axios.get("./data/Home-day.json")
            .then((res) => {
                // console.log(res.data.item_list)
                    let action = {
                    type: type.GET_HOME2,
                    payload: res.data.item_list
                }
                dispatch(action)
            }).catch((err) => {
                console.log(err)
            });
        }
   }

}
export default actionCreator;