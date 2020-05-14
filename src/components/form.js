import React from 'react';

export default class extends React.Component {

    state = {
        categoryes: []
    }

    loadData() {
        fetch('/api/categoryes.php', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            mode: 'no-cors',
        })
            .then(response => response.json())
            .then(rows => (this.setState({ categoryes: rows.categoryes} )) );
    }

    componentDidMount() {
        this.loadData();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData();
        let form = {
            date: event.target.date.value,
            sum: event.target.sum.value,
            comment: event.target.text.value,
            cat: event.target.cat.value,
        };
        data.append("form", JSON.stringify(form));
        fetch('/api/write.php', {
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
            this.props.insert();
        });
    }

    render() {
        return (
            <div>
                <form method="post" onSubmit={this.handleSubmit}>
                    <input type="date" value={new Date().toISOString().split("T", 1)} required name="date"/>
                    <input type="input" required placeholder="Sum" name="sum"/>
                    <input type="input" required placeholder="text" name="text"/>
                    <select name="cat">
                        {this.state.categoryes.map(item => {
                            return (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            );
                        })}
                    </select>
                    <input type="submit" value="Save"/>
                </form>
            </div>
        )
    }
}