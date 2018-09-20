import React from 'react';

export default class NoMatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = window.location.pathname;
        return (
            <div>
                <h3>
                    No match for <code>{location}</code>
                </h3>
            </div>
        );
    }
}


