import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NavMenu from "./NavMenu";
import NotFound from "./NotFound";
import WelcomePage from "./WelcomePage";
import GenresList from "../modules/genre/components/GenresList";
import GenreArtistsList from "../modules/genre/components/GenreArtistsList";
import GenreArtistsModal from "../modules/genre/components/GenreArtistsModal";

const mapStateToProps = (state) => ({
    currentUser: state.user,
});

const App = (props) => {
    const { location } = props;
    const [prevLocation, setPrevLocation] = useState(location);

    useEffect(() => {
        if (!(location.state && location.state.modal)) {
            setPrevLocation(location);
        }
    }, [location]);

    const isModal =
        location.state && location.state.modal && prevLocation !== location;

    const isAuth =
        props.currentUser.isSignedIn &&
        props.currentUser.user &&
        location.pathname !== "/";

    return (
        <div>
            {isAuth && <NavMenu currentUser={props.currentUser.user} />}
            <Switch location={isModal ? prevLocation : location}>
                {/* PUBLIC ROUTE */}
                <Route exact path="/" component={WelcomePage} />
                {/* PRIVATE ROUTES */}
                <PrivateRoute exact path="/genre" component={GenresList} />
                <PrivateRoute
                    exact
                    path="/genre/:id/artists"
                    component={GenreArtistsList}
                />
                <PrivateRoute exact path="*" component={NotFound} />
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

App.propTypes = {
    currentUser: PropTypes.object,
    location: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, {})(App));
