import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Header, Cart, ProductDetails, Footer } from "./components";
import "./index.css";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/product/:id" component={ProductDetails} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
