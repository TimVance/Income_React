import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    state = {
        months: this.getMonths(),
        firstYear: 2019
    };


    getMonths() {
        return [
            {
                id: 1,
                name: "January"
            },
            {
                id: 2,
                name: "February"
            },
            {
                id: 3,
                name: "March"
            },
            {
                id: 4,
                name: "April"
            },
            {
                id: 5,
                name: "May"
            },
            {
                id: 6,
                name: "June"
            },
            {
                id: 7,
                name: "July"
            },
            {
                id: 8,
                name: "August"
            },
            {
                id: 9,
                name: "September"
            },
            {
                id: 10,
                name: "October"
            },
            {
                id: 11,
                name: "November"
            },
            {
                id: 12,
                name: "December"
            }
        ]
    }

    getYears() {
        let years = [];
        for (let i = this.state.firstYear; i <= parseInt(new Date().getFullYear()); i++) {
            years.push(<option value={i} key={i}>{i}</option>);
        }
        return (
            <select value={this.props.currentYear}>
                {years}
            </select>
        );
    }

    selectOptionMonths() {
        const months = this.state.months.map((month) =>
            <option
                key={month.id}
                value={month.id}
            >
                {month.name}
            </option>
        );
        return (
            <select value={this.props.currentMonth}>
                {months}
            </select>
        );
    }

    render() {
        return (
            <div>
                <form method="post" onSubmit={this.handleSubmit}>
                    {this.selectOptionMonths()}
                    {this.getYears()}
                </form>
            </div>
        )
    }
}