const state = {
    cars: shop(),
    userinfo: info()
}

 function shop(){
    return localStorage.cars ? JSON.parse(localStorage.cars) : [];
 }
 function info(){
    return localStorage.userinfo ? JSON.parse(localStorage.userinfo) : [];
 }

export default state