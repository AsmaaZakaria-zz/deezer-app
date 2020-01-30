import api from "./../../../api";
import {
    FETCH_GENRE_ARTISTS_BEGIN,
    FETCH_GENRE_ARTISTS_SUCCESS,
    FETCH_GENRE_ARTISTS_FAILURE,
} from "../constants";

export const fetchGenreArtists = (id) => async (dispatch) => {
    dispatch({ type: FETCH_GENRE_ARTISTS_BEGIN });

    await api
        .get(`/genre/${id}/artists`)
        .then((response) => {
            dispatch({
                type: FETCH_GENRE_ARTISTS_SUCCESS,
                payload: response.data.data,
            });
        })
        .catch((err) => {
            // handle error
            dispatch({ type: FETCH_GENRE_ARTISTS_FAILURE });
        });
};
