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
        this.loadData();
    }

    loadData() {
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
    }

    delete = (id) => {
        const conf = window.confirm("Delete item №" + id + "?");
        if (conf) {
            let data = new FormData();
            let form = {
                id: id
            };
            data.append("form", JSON.stringify(form));
            fetch('/api/delete.php', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                },
                method: 'POST',
                mode: 'no-cors',
                body: data
            })
                .then(response => response.json())
                .then(data => {
                    this.loadData();
                });
        }
    }

    render() {
        return (
            <div className="list">
                <div className="row">
                    <span className="number">Date</span>
                    <span className="sum">Sum</span>
                    <span className="text">Text</span>
                    <span className="text"></span>
                </div>
                {this.state.rows.map(item => {
                    return (
                       <div className="row" key={item.id}>
                           <span className="number">{item.date}</span>
                           <span className="sum">{item.sum}</span>
                           <span className="text" title={item.category}>{item.comment}</span>
                           <span className="actions">
                               <i className="del"
                                  onClick={(e) =>
                                  this.delete(item.id, e)}>
                               </i>
                           </span>
                       </div>
                    );
                })}
                <div className="row">
                    <span className="number"></span>
                    <span className="sum">{this.state.count} items</span>
                    <span className="text">{this.state.sum} rub</span>
                    <span className="text"></span>
                </div>
            </div>
        );
    }
}