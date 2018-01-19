import React,{Component} from 'react';
class TextInput extends Component{
    render(){
        return(
            <div className="form-group">
                 <label>{this.props.label}</label>
                 <input name={this.props.name}  className={this.props.className} type={this.props.type} onChange={this.props.onChange} value={this.props.value} label={this.props.label} />
            </div>
        );
    }
}

export default TextInput;