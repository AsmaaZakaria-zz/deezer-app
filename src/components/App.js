import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import GenresList from "../modules/genre/components/GenresList";
import GenreArtistsList from "../modules/genre/components/GenreArtistsList";
import WelcomePage from "./WelcomePage";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.user.isSignedIn,
    };
};

const App = (props) => {
    return (
        <div>
            {props.isSignedIn && <Header />}
            <Switch>
                {/* PUBLIC ROUTE */}
                <Route exact path="/" component={WelcomePage} />
                {/* PRIVATE ROUTE */}
                <PrivateRoute exact path="/genre" component={GenresList} />
                <PrivateRoute exact path="/genre/:id" component={GenreArtistsList} />
            </Switch>
        </div>
    );
};

export default connect(mapStateToProps, {})(App);
