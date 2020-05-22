import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        months: this.getMonths()
    };


    getMonths() {
        return [
            [{1: "January"}],
            [{2: "February"}],
            [{3: "March"}],
            [{4: "April"}],
            [{5: "May"}],
            [{6: "June"}],
            [{7: "July"}],
            [{8: "August"}],
            [{9: "September"}],
            [{10: "October"}],
            [{11: "November"}],
            [{12: "December"}]
        ]
    }

    selectOptionMonths() {
        const months = this.state.months.map((month, index) =>
            <option key={index} value={index}>{month}</option>
        );
        return (
            <select>
                {months}
            </select>
        );
    }

    render() {
        return (
            <div>
                <form method="post" onSubmit={this.handleSubmit}>
                    {this.selectOptionMonths()}
                    <input type="submit" value="Get"/>
                </form>
            </div>
        )
    }
}