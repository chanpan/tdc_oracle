import React,{Component} from 'react';
 
 class LoginComponent extends Component{
    
    render(){
         return(
            <div className="app">
               <div className="form-group">
                    <label>Username: </label>
                    <input type='text' id="username" name="username" ref=""/>
               </div>
               <div className="form-group">
                    <label>Password: </label>
                    <input type='password' id="password" name="password" ref=""/>
               </div>
               <div className="form-group text-right">
                    <button className="btn btn-primary">Login</button>
               </div>
            </div>
        );
    }
}
export default LoginComponent;