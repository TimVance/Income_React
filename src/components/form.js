import React from 'react';

export default class extends React.Component {

    state = {
        categoryes: []
    }

    loadData() {
        fetch('https://income.dlay.ru/api/categoryes.php')
            .then(response => response.json())
            .then(rows => (this.setState({ categoryes: rows.categoryes} )) );
    }

    componentDidMount() {
        this.loadData();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
        fetch('https://income.dlay.ru/api/write.php', {
            //headers: {'Content-Type':'application/json'},
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                date: event.target.date.value,
                sum: event.target.sum.value,
                comment: event.target.text.value,
                cat: event.target.cat.value,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data from response: ');
        });
    }

    render() {
        return (
            <div>
                <form method="post" onSubmit={this.handleSubmit}>
                    <input type="date" name="date"/>
                    <input type="input" placeholder="Sum" name="sum"/>
                    <input type="input" placeholder="text" name="text"/>
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