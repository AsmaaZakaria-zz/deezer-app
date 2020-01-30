import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import GenresList from "../modules/genre/components/GenresList";
import GenreArtistsList from "../modules/genre/components/GenreArtistsList";
import WelcomePage from "./WelcomePage";
import Header from "./Header";
import GenreArtistsModal from "../modules/genre/components/GenreArtistsModal";

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.user.isSignedIn,
    };
};

const App = (props) => {
    const [previousLocation, setPrevLocation] = useState(props.location);
    const { location } = props;

    useEffect(() => {
        if (!(location.state && location.state.modal)) {
            setPrevLocation(location);
        }
    }, [location]);

    const isModal =
        location.state && location.state.modal && previousLocation !== location;

    return (
        <div>
            {props.isSignedIn && <Header />}
            <Switch location={isModal ? previousLocation : location}>
                {/* PUBLIC ROUTE */}
                <Route exact path="/" component={WelcomePage} />
                {/* PRIVATE ROUTES */}
                <PrivateRoute exact path="/genre" component={GenresList} />
                <PrivateRoute
                    exact
                    path="/genre/:id/artists"
                    component={GenreArtistsList}
                />
            </Switch>
            {isModal && (
                <PrivateRoute
                    exact
                    path="/genre/:id"
                    component={GenreArtistsModal}
                />
            )}
        </div>
    );
};

export default withRouter(connect(mapStateToProps, {})(App));
