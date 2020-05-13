import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        rows: [],
        sum: 0,
        count: 0,
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log("rows");
        this.loadData();
    }

    loadData() {
        console.log('ewe');
        fetch('/api/rows.php', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            mode: 'no-cors',
        })
        .then(response => response.json())
        .then(rows => (this.setState({ rows: rows.items, sum: rows.sum, count: rows.count} )) );
    }

    componentDidMount() {
        this.loadData();
        console.log("rows2");
    }

    render() {
        return (
            <div className="list">
                <div className="row">
                    <span className="number">Date</span>
                    <span className="sum">Sum</span>
                    <span className="text">Text</span>
                </div>
                {this.state.rows.map(item => {
                    return (
                       <div className="row" key={item.id}>
                           <span className="number">{item.date}</span>
                           <span className="sum">{item.sum}</span>
                           <span className="text" title={item.category}>{item.comment}</span>
                       </div>
                    );
                })}
                <div className="row">
                    <span className="number"></span>
                    <span className="sum">{this.state.count} items</span>
                    <span className="text">{this.state.sum} rub</span>
                </div>
            </div>
        );
    }
}