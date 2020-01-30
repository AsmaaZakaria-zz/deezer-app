import api from "./../../../api";
import {
    FETCH_GENRES_BEGIN,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from "../constants";

export const fetchGenres = () => async (dispatch) => {
    dispatch({ type: FETCH_GENRES_BEGIN });

    await api
        .get("/genre")
        .then((response) => {
            dispatch({
                type: FETCH_GENRES_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((err) => {
            // handle error
            dispatch({ type: FETCH_GENRES_FAILURE });
        });
};
