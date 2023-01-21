import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super();

        this.state ={
            number: 0
        }


    }

    handledecrease = (e) => {
        e.preventDefault()
        this.setState({number: this.state.number -1})
    }

    handledincrease = (e) => {
        e.preventDefault()
        this.setState({number: this.state.number +1})
    }
    render() {
        return (
            <div>
                <h1>Class State</h1>
                <br />
                <h1>{this.state.number}</h1>
                <br />
                <button onClick={this.handledecrease}>Decrease</button>
                <button onClick={this.handledincrease}>Increase</button>
            </div>
        );
    }
}

export default ClassCounter;
