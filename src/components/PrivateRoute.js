import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./Loader";

const mapStateToProps = (state) => ({
    user: state.user,
});

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (user.loadingSignIn) {
                return <Loader />;
            } else if (!user.isSignedIn) {
                return <Redirect to="/" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

export default connect(mapStateToProps, {})(PrivateRoute);
