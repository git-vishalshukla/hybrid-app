import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {ReadProductsComponent} from "./read_products.component";
import "./css/admin-style.css"

class ReadProductsComponent extends React.Component {


    getInitialState() {
        return {
            products: []
        };
    }

    // on mount, fetch all products and stored them as this component's state
    componentDidMount() {

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

// component that decides which main component to load: read or create/update
class MainApp extends React.Component {

    // initial mode is 'read' mode
    getInitialState() {
        return {
            currentMode: 'read',
            productId: null
        };
    }

    // used when use clicks something that changes the current mode
    changeAppMode(newMode, productId) {
        this.setState({ currentMode: newMode });
        if (productId !== undefined) {
            this.setState({ productId: productId });
        }
    }

    // render the component based on current or selected mode
    render() {

        var modeComponent = <ReadProductsComponent changeAppMode={this.changeAppMode} />;

        switch (this.state.currentMode) {
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode} />;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
                break;
            default:
                break;
        }

        return modeComponent;
    }
}

// go and render the whole React component on to the div with id 'content'
ReactDOM.render(
    <MainApp />,
    document.getElementById('content')
);