import state from "./state";
import * as type from "./type"
const reducer = (previousStata = state ,action)=> {
    let new_state = {...previousStata};
    switch (action.type) {
        case type.ADD_CAR:
                //用户操作
               
                new_state.cars = handler.addCar(new_state.cars,action.payLoad)
                localStorage.setItem('cars',JSON.stringify(new_state.cars))
            break;
        case type.REDUCE_CAR:
                //用户操作
                new_state.cars = handler.del(new_state.cars,action.payLoad)
                localStorage.setItem('cars',JSON.stringify(new_state.cars))
            break;
        case type.ADD_JIAN:
                //用户操作
                new_state.cars = handler.jian(new_state.cars,action.payLoad)
                localStorage.setItem('cars',JSON.stringify(new_state.cars))
            break;
        default:
            break;
    }
    return new_state;
}
let handler = {
    addCar(cars,goodInfo){
            let _cars = cars.slice();
            let iShas = _cars.some(item=>{
                if(item.id === goodInfo.id){
                    item.num += goodInfo.num
                    return true
                }
                return false
            })
            if(!iShas){
                _cars.push(goodInfo)
            }
            return _cars;
    },
    
    jian(cars,goodId){
        let _cars = cars.slice()
        // console.log(_cars,goodId);
        _cars.forEach((item,index) => {
            
            if( item.id === goodId.id ){
                if( item.num === 1 ){
                    _cars.splice(index,1)
                }else{
                    item.num-- 
                }
                return true
            }
            return true
        });

        return _cars 
    },
    del(cars,goodId){
        let _cars = cars.slice()
        _cars.forEach((item,index) => {
            if( item.id === goodId.id ){
                _cars.splice(index,1)
                if(!_cars){
                    _cars  = null 
                }
                return true
            }
            return true
        });

        return _cars 
    }
    // 
}
export default reducer;



