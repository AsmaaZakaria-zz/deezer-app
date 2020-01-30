import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    user: state.user,
});

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            if (user.loadingSignIn) {
                return <h3>Loading...</h3>;
            } else if (!user.isSignedIn) {
                return <Redirect to="/" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

export default connect(mapStateToProps)(PrivateRoute);
