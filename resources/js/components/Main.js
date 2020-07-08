import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Patient from "./Patient";

export default function Main() {
    return (
        <div>
            <Router>
                <Route path="/home" component={Home} />
                <Route path="/patient" component={Patient} />
            </Router>
        </div>
    );
}

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
