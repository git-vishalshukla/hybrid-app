import React from 'react';
import './index.css';

export class BoilingVerdict extends React.Component {
    constructor(props) {
        super(props);
        this.state = {celsius: props.celsius};
    }

    componentDidUpdate(prevProps){
        if (!isNaN(prevProps.celsius) && this.props.celsius !== prevProps.celsius) {
            this.setState((prevState, props) => {
                return {celsius: props.celsius};
            })
        }
    }

    render() {
        const celsius = this.state.celsius;
        if (celsius >= 100) {
            return <p>The water would boil.</p>;
        }
        return <p>The water would not boil.</p>;
    }
}