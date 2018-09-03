import React from 'react';
// component that contains all the logic and other smaller components
// that form the Read Products view
window.ReadProductsComponent = React.createClass({
    getInitialState: function () {
        return {
            products: []
        };
    },

    // on mount, fetch all products and stored them as this component's state
    componentDidMount: function () {

        this.serverRequest = $.get("read.json", function (products) {
            this.setState({
                products: [
                    {
                        "name": "Vishal",
                        "description": "Chakri not stable",
                        "price": 1,
                        "category_name": "Cat 1"
                    },
                    {
                        "name": "Sagar",
                        "description": "Chakri not stable",
                        "price": 2,
                        "category_name": "Cat 2"
                    },
                    {
                        "name": "Chakri",
                        "description": "Chakri not stable",
                        "price": 3,
                        "category_name": "Cat 3"
                    },
                    {
                        "name": "Jayesh",
                        "description": "Chakri not stable",
                        "price": 4,
                        "category_name": "Cat 4"
                    },
                    {
                        "name": "Manikanta",
                        "description": "Chakri not stable",
                        "price": 5,
                        "category_name": "Cat 5"
                    }
                ]
            });
        }.bind(this));
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    // render component on the page
    render: function () {
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
});