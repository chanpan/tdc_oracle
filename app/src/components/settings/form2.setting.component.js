import React, { Component } from "react";

import TextInput from "../../providers/html/TextInput";
import Oracles from "../../providers/Oracles";

import Form3SettingComponent from './form3.setting.component';
import KnexSqlites from "../../providers/KnexSqlites";
import Urls from "../../providers/Urls";
import TableNames from "../../providers/TableNames";
import Token from "../../providers/Token";

 
class Form2SettingComponent extends Component {
    
    constructor(props){
        super(props);
        this.state={
            id:'',
            host: '192.168.99.100',
            username: 'system',
            password: 'oracle',
            port: '49133',
            sid: 'xe',
            access_token:'',
            fonts:'',
            disabled:''
       };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        KnexSqlites.findOne("*", TableNames.config_sql(), {access_token:Token.get_access_token('access_token')})
        .then(res=>{
            this.setState({
                id:res.id,
                host:res.host,
                username:res.username,
                password:res.password,
                port:res.port,
                sid:res.sid,
                access_token:res.access_token,
                fonts:'fa fa-spinner fa-spin fa-3x fa-fw',
                disabled:'true'
                
            }); 
            this.handleConnect();
        })
        .catch(err=>console.error(err));
    }
    handleChange(event){
        console.error({[event.target.name]:event.target.value});
        this.setState({[event.target.name]:event.target.value});        
    }
    handleConnect(){
        this.setState({fonts:"fa fa-spinner fa-spin fa-3x fa-fw",disabled:''});
        Oracles.Connect(this.state)
        .then(res=>{
            console.warn("handleConnect || Connect database success.");
            this.props.Connect({status:1,value:res}); 
            let date = new Date();
            this.setState({id:date.getTime(), access_token:Token.get_access_token('access_token')});
            this.handleCheckCount();
            setTimeout(()=>{
                this.setState({fonts:"",disabled:'true'});
            },1000);
        })
        .catch(err=>{
            this.props.Connect({status:2,value:err});
            this.setState({fonts:"",disabled:'true'});
            console.error("handleConnect || Connect database error.");
        });
    }
    handleCheckCount(){
        console.warn("handleCheckCount || check count.");
        KnexSqlites.getCount(TableNames.config_sql(),{access_token:Token.get_access_token('access_token')})
        .then(res=>{
            if(res.count > 0){
                this.handleChangeUpdate();
            }else{
                this.handleChangeSave();
            }
        }).catch(err=>{console.warn(err)});
    }
    handleChangeSave(){
        console.warn("handleChangeSave || save config_sql.");
        KnexSqlites.Create(TableNames.config_sql(),this.state)
        .then(res=>console.warn(res.message))
        .catch(err=>console.error(err));
    }
    handleChangeUpdate(){
        console.warn("handleChangeUpdate || update config_sql.");
        KnexSqlites.Update(TableNames.config_sql(),this.state,{access_token:Token.get_access_token('access_token')})
        .then(res=>console.warn(res.message))
        .catch(err=>console.error(err));
    }
  
    render() {
 
        return (
                <div className="col-sm-4">
                    <div className="card bg-basic">
                        <div className="card-header">Connect Database Type Oracledb</div>
                        <div className="card-body">
                        <form>
                            <TextInput type="text"  name="host" value={this.state.host} onChange={this.handleChange} className="form-control" label="Host Name/IP Address"/>
                            <TextInput type="text"  name="username" value={this.state.username} onChange={this.handleChange} className="form-control" label="Username"/>
                            <TextInput type="text"  name="password" value={this.state.password} onChange={this.handleChange} className="form-control" label="Password"/>
                            <TextInput type="text"  name="sid" value={this.state.sid} onChange={this.handleChange} className="form-control" label="Service Name /SID"/>
                            <TextInput type="text"  name="port" value={this.state.port} onChange={this.handleChange} className="form-control" label="Port"/>
                        </form> 
                        </div>
                        <div className="card-footer">
                            <div className="panel-footer text-right">
                                <button disabled={!this.state.disabled} onClick={this.handleConnect.bind(this)} id="btnConnect" className="btn btn-primary">
                                <i className={this.state.fonts}></i> Connect</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Form2SettingComponent;