import { history } from "./../../../history";
import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT } from "./../constants";

const { DZ } = window;
const URL =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : "https://deezer-app.herokuapp.com";

DZ.init({
    appId: "392944",
    secret: "bdf0147e1fbda79d41721573c8d352c4",
    channelUrl: URL,
});

export const userLogin = () => async (dispatch) => {
    DZ.login(
        (response) => {
            if (response.authResponse) {
                DZ.api("/user/me", (user) => {
                    dispatch({
                        type: LOG_IN_SUCCESS,
                        payload: user,
                    });
                    history.push("/genre");
                });
            } else {
                dispatch({ type: LOG_IN_FAILURE });
            }
        },
        { perms: "basic_access,email" }
    );
};

export const userLogout = () => async (dispatch) => {
    DZ.logout();
    dispatch({ type: LOG_OUT });
    history.push("/");
};
