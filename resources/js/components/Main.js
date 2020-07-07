import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

export default function Main() {
    return (
        <div>
            <Home />
        </div>
    );
}

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
