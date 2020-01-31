import {
    LOG_IN_BEGIN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
} from "./../constants";

const INITIAL_STATE = {
    user: null,
    isSignedIn: false,
    loadingSignIn: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOG_IN_BEGIN:
            return { ...state, isSignedIn: false, loadingSignIn: true };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                loadingSignIn: false,
                user: action.payload,
            };
        case LOG_IN_FAILURE:
            return { ...state, isSignedIn: false, user: null };
        case LOG_OUT:
            return { ...state, isSignedIn: false, user: null };
        default:
            return state;
    }
};
