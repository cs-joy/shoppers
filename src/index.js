import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Context from "./context/Context";

ReactDOM.render(
    <ChakraProvider>
        <Context>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </Context>
    </ChakraProvider>,
    document.getElementById("root")
);
