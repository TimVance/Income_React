import React from 'react';
import Rows from './components/rows';
import Form from './components/form';
import Date from './components/date';

export default class extends React.Component {

    state = {
        changeForm: false,
        currentDate: ''
    }

    insert = () => {
        this.setState({ changeForm: true });
    }

    render() {
        return (
            <div className="container">
                <Date  currentDate={this.state.currentDate} />
                <Rows changeForm={this.state.changeForm} />
                <Form insert={this.insert} />
            </div>
        );
    }
}