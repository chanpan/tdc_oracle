import React, { Component } from "react";
import TextInput from "../../providers/html/TextInput";
import Select from "../../providers/html/Select";
import KnexSqlites from "../../providers/KnexSqlites";
import TableNames from "../../providers/TableNames";
import Token from "../../providers/Token";

import MaskedInput from 'react-maskedinput';
class Form3SettingComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            dbnames: '',
            chars: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        KnexSqlites.findOne("*", TableNames.config_sql(), { access_token: Token.get_access_token('access_token') })
            .then(res => {
                this.setState({
                    dbnames: res.dbnames,
                    chars: res.chars
                });
            })
            .catch(err => console.error(err));
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        let data = { [event.target.name]: event.target.value };
        KnexSqlites.Update(TableNames.config_sql(), data, { access_token: Token.get_access_token("access_token") }).then(res => console.info(res)).catch(err => console.error(err));
    }
    render() {
        let dbNameOptions = this.props.dbnames.map((dbName, index) => {
            return (<option key={index} value={dbName.USERNAME}>{dbName.USERNAME}</option>);
        });
        return (
            <div className="col-sm-4">
                <div className="card bg-basic">
                    <div className="card-header">Configuration</div>
                    <div className="card-body">
                        <Select value={this.state.dbnames} optionValue={dbNameOptions} label="Schema" name="dbnames" onChange={this.handleChange} />
                        <div className="form-group">
                            <label>Charecter</label>
                            <MaskedInput mask="111111" name="chars" size="20" value={this.state.chars} onChange={this.handleChange} className="form-control" />
                        </div>
                    </div>
                    <div className="card-footer text-right">
                        <div className="container">
                            <button id="btnReset" className="btn btn-warning mr-1" type='button'>Reset</button>
                            <button id="btnStart" className="btn btn-primary ml-1" type='button'>Start</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Form3SettingComponent;