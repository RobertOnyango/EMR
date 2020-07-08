import React from "react";
import { Link } from "react-router-dom";

export default function Default() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text0ecnter text-title text-uppercase pt-5">
                        <h1 className="display-3"> 404 </h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>
                            the requested URL{" "}
                            <span className="text-danger">
                                <Link to="/home">Home</Link>
                            </span>{" "}
                            was not found
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}