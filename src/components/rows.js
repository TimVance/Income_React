import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div className="list">
                <div className="row">
                    <span className="number">Date</span>
                    <span className="sum">Sum</span>
                    <span className="cat">Cat</span>
                    <span className="text">Text</span>
                </div>
            </div>
        );
    }
}