import React,{Component} from 'react';
import './assets/css/main.css';
import KnexSqlites from './providers/KnexSqlites'
import Oracles from './providers/Oracles';
import {Link} from 'react-router-dom';

 
import Api from './providers/Api';
import SettingComponent from './components/settings/setting.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
 
 class App extends Component{
    
    render(){
        //Api.Login('chanpan.nuttaphon1993@gmail.com','Chanpan!((#').then(res=>console.info(res)).catch(err=>console.error(err));      
        return(
            <div className="container-fluid">
                <Link to="/">Back </Link>
                <Link to="/home">Home </Link> 
                <Link to="/setting">Setting </Link>
                <SettingComponent />
            </div>
        );
    }
}
export default App;

