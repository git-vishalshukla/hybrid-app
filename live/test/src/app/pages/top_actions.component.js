// component that contains the functionalities that appear on top of
// the products table: create product
import React from 'react';
export class TopActionsComponent extends React.Component{
    constructor(props) {
        super(props);
       /* this.state = {
            currentMode: 'read',
            products: [],
            productId: null
        };*/

    }
    render (){
        return (
            <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Create product
                </a>
            </div>
        );
    }
};