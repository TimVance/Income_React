import React from 'react';
import Rows from './components/rows';
import Form from './components/form';

export default class extends React.Component {

    state = {
        changeForm: false
    }

    insert = () => {
        console.log(this.state.changeForm);
        console.log("insert");
        this.setState({ changeForm: true });
        console.log(this.state.changeForm);
    }

    render() {
        return (
            <div className="container">
                <Rows changeForm={this.state.changeForm}/>
                <Form insert={this.insert}/>
            </div>
        );
    }
}