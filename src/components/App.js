import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenresList from "../modules/genre/components/GenresList";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={GenresList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
