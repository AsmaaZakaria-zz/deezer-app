import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GenresList from "../modules/genre/components/GenresList";
import GenreArtistsList from "../modules/genre/components/GenreArtistsList";

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={GenresList} />
                    <Route exact path="/genre" component={GenresList} />
                    <Route exact path="/genre/:id" component={GenreArtistsList} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
