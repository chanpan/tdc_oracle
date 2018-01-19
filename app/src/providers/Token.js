export default class Token{
    static set_access_token(name,value){
        return localStorage.setItem(name, value);
    }
    static get_access_token(name=""){
        name = "" || "access_token";
        return localStorage.getItem(name);
    }
}