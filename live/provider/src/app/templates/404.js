import React from 'react';

export default class NoMatch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let location = window.location.pathname;
        return (
            <div class="profile-wrapper">
                 <h3>
                    No match for <code>{location}</code>
                </h3>
                <img src="../../../assets/img/404-image.jpg" />
            </div>
        );
    }
}


