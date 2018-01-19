import React, {Component} from "react";
import Form1SettingComponent from './form1.setting.component';
import Form2SettingComponent from './form2.setting.component';
import Form3SettingComponent from './form3.setting.component';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modals from "../../providers/html/Modals";
 

 
class SettingComponent extends Component{
    constructor(){
        super();
        this.state={
            dbnames:[],
            modal: false,
            msg:'' ,
            title:''
        };
        this.toggle = this.toggle.bind(this);
        
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }
    handleConnect(data){
        if(data.status == 1){
            this.setState({
                dbnames:data.value
            });
        }else{
            this.setState({msg:data.value.message,title:"Error Connection"});
            this.setState({
                dbnames:[]
            }); 
            this.toggle();
        }
    }
    render(){
        return(
            <div>
                <div className="row mt-2">
                    <Form1SettingComponent />   
                    <Form2SettingComponent Connect={this.handleConnect.bind(this)} />
                    <Form3SettingComponent dbnames={this.state.dbnames} />

                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                        <ModalBody>
                           {this.state.msg}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default SettingComponent;