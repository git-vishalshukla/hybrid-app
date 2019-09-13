import React from 'react';

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button type="button" class="btn btn-lg btn-primary btn-block">Login</button>
        );
    }
}

