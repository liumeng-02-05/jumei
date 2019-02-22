import * as  type from "./type"
import axios from "axios"
const actionCreator = {
    gatDataUL(){
        //http://h5.jumei.com/recommend/sale?item_id=ht190207p1308285t1&type=global_deal
        return dispatch =>{
            axios.get("jumei/recommend/sale",{
                params : {
                    item_id: 'ht190207p1308285t1',
                    type: 'global_deal'
                }
            })
            .then((res) => {
                // console.log(res);
                let action = {
                    type: type.DETAIL_DATA,
                    payload: res.data.item_list
                 }
                 dispatch(action)
            })
            .catch(err => console.log(err))
       }
    },
    getData(id){
        return dispatch =>{
            //http://h5.jumei.com/product/ajaxStaticDetail?item_id=ht190210p2211432t1&type=global_deal
            axios.get("jumei/product/ajaxStaticDetail?",{
                params : {
                    item_id: id,
                    type: 'global_deal'
                }
            })
            .then((res) => {
                // console.log(res);
                let action = {
                    type: type.DETAIL_DETAIL,
                    payload: res.data.data
                 }
                 dispatch(action)
            })
            .catch(err => console.log(err))
       }
    }


}
export default actionCreator;