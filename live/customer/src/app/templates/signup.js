import React from 'react';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form class="form-signin">
                <div class="text-center mb-4">
                    <img class="mb-4" src="../../../assets/img/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 class="h3 mb-3 font-weight-normal">Food App</h1>
                    <label for="inputUsername" class="sr-only">Email address</label>
                    <input type="email" id="inputUsername" class="form-control" placeholder="usename" required autofocus />
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="password" required />
                    <button class="btn btn-lg btn-primary btn-block mt-2" type="submit">Sign in</button>
                </div>
            </form>
        );
    }
}


