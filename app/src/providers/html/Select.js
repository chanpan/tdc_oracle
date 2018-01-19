import React, { Component } from 'react';
class Select extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <select className="form-control" name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
                    {this.props.optionValue}
                </select>
            </div>
        );
    }
}

export default Select;