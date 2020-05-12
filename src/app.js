import React from 'react';
import Rows from './components/rows';
import Form from './components/form';

export default class extends React.Component {

    insert() {
        console.log("insert");
    }

    render() {
        return (
            <div className="container">
                <Rows />
                <Form insert={this.insert}/>
            </div>
        );
    }
}