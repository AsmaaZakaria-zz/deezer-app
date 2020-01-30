import React from "react";
import { Switch, Route } from "react-router-dom";
import GenresList from "../modules/genre/components/GenresList";
import GenreArtistsList from "../modules/genre/components/GenreArtistsList";

const App = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={GenresList} />
                <Route exact path="/genre" component={GenresList} />
                <Route exact path="/genre/:id" component={GenreArtistsList} />
            </Switch>
        </div>
    );
};

export default App;
