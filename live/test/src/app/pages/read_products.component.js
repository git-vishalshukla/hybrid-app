import React from 'react';
import { TopActionsComponent } from "./top_actions.component";
import { ProductsTable } from "./product_table.component";
import $ from 'jquery';
//window.jQuery = jQuery$;
//window.$ = jQuery;
//const $ = window.jQuery;

// component that contains all the logic and other smaller components
// that form the Read Products view

export class ReadProductsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

    }
    /*getInitialState() {
        return {
            products: []
        };
    }*/

    // on mount, fetch all products and stored them as this component's state
    componentDidMount() {
      //  http://127.0.0.1:8081/listProducts
        this.serverRequest = $.get("http://127.0.0.1:8081/listProducts", function (products) {
            console.log(products)
            this.setState({
                products: JSON.parse(products)
            });
        }.bind(this));
    }

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    // render component on the page
    render() {
        // list of products
        var filteredProducts = this.state.products;
        $('.page-header h1').text('Read Products');

        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />

                <ProductsTable
                    products={filteredProducts}
                    changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
}