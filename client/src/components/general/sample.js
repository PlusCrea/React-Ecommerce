import React, { Component } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleState: "Initial State"
        }
    }

    selectKey(event) {
        this.setState({ exampleState: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Simple Select Box!!</h1>
                <select onChange={this.selectKey.bind(this)}>
                    <option key={1} value='value 1'>Value 1</option>
                    <option key={2} value='value 2'>Value 2</option>
                    <option key={3} value='value 3'>Value 3</option>
                </select>
                <p>{this.state.exampleState}</p>
            </div>
        )
    }
}