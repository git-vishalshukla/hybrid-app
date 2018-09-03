import React from 'react';
import ReactDOM from 'react-dom';
import { ReadProductsComponent } from "./app/pages/read_products.component";

import { ProductRow } from "./app/pages/product_row.component";
import { ProductsTable } from "./app/pages/product_table.component";
import { TopActionsComponent } from "./app/pages/top_actions.component";
import { CreateProductComponent } from "./app/pages/create_product.component";

// component that decides which main component to load: read or create/update
class MainApp extends React.Component {

    constructor(props) {
        super(props);
        this.changeAppMode = this.changeAppMode.bind(this);
        this.state = {
            currentMode: 'read',
            products: [],
            productId: null
        };

    }

    // used when use clicks something that changes the current mode
    changeAppMode(newMode, productId) {
        console.log(this);
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
               // modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode} />;
                break;
            case 'update':
             //   modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
                break;
            case 'delete':
             //   modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode} />;
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