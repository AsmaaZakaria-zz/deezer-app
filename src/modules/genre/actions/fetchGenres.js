import axios from "axios";
import {
    FETCH_GENRES_BEGIN,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
} from "../constants";

// this is a workaround so I avoided CORS block
const URL = "https://api.deezer.com/genre";
const CORS_URL = `https://cors-anywhere.herokuapp.com/${URL}`;

export const fetchGenres = () => async (dispatch) => {
    dispatch({ type: FETCH_GENRES_BEGIN });

    await axios
        .get(CORS_URL)
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
