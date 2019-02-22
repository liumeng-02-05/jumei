import * as type from './type'
const actionCreator = {
    //1.初始化数据获取 2. 添加购物车 3.修改数据
    addCar(goodInfo,success,fail){
        return dispatch => {
            //后台逻辑
            // console.log('good-info',goodInfo);
            setTimeout(() => {
                let action = {
                    type: type.ADD_CAR,
                    payLoad: goodInfo
                }
                dispatch(action)
                if( success ) success()
                return false
            },50)
        }
    },
    jian(goodInfo,success,fail){
        return dispatch => {
            //后台逻辑
            setTimeout(() => {
                let action = {
                    type: type.ADD_JIAN,
                    payLoad: goodInfo
                }
                dispatch(action)
                if( success ) success()
                return false
            },50)
        }
    },
    del(goodInfo,success,fail){
        return dispatch => {
            //后台逻辑
            // console.log('good-info',goodInfo);
            setTimeout(() => {
                let action = {
                    type: type.REDUCE_CAR,
                    payLoad: goodInfo
                }
                dispatch(action)
                if( success ) success()
                return false
            },50)
        }
    }
}


export default actionCreator