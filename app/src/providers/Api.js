import url from "./Urls";
class Api{
    static Login(username, password){
        let headers = new Headers();
        headers.append('Authorization', 'Basic '+btoa(username + ":" + password));
        return new Promise((resolve,reject)=>{
            fetch(url.tdc_service()+"user", 
            {
                method:'GET',
                headers: headers,
            }).then(response =>resolve(response.json()))
            .catch(err => reject(err));
        });
    }
    static get_new_his_type(){
       return new Promise((resolve,reject)=>{
        fetch(url.tdc_service_new_his_type(),{
            method:"GET"
        })
         .then(res=>resolve(res.json()))
         .catch(err=>reject(err));
       });  
    }
    static get_save_his_type(his_name){
        return new Promise((resolve,reject)=>{
         fetch(url.tdc_service_save_his_type(his_name),{
             method:"GET"
         })
          .then(res=>resolve({status:'Success',message:'Save his_type success',data:res.json()}))
          .catch(err=>reject(err));
        });  
     }
}
export default Api;