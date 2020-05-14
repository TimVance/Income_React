import React from 'react';
import Rows from './components/rows';
import Form from './components/form';

export default class extends React.Component {

    state = {
        changeForm: false
    }

    insert = () => {
        this.setState({ changeForm: true });
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