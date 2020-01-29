import {
    FETCH_GENRES_BEGIN,
    FETCH_GENRES_SUCCESS,
    FETCH_GENRES_FAILURE,
    FETCH_GENRE_ARTISTS_BEGIN,
    FETCH_GENRE_ARTISTS_SUCCESS,
    FETCH_GENRE_ARTISTS_FAILURE,
} from "../constants";

const INITIAL_STATE = {
    genres: [],
    fetchGenresLoading: false,
    genreArtists: [],
    fetchGenreArtistsLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_GENRES_BEGIN:
            return {
                ...state,
                fetchGenresLoading: true,
            };
        case FETCH_GENRES_SUCCESS:
            return {
                ...state,
                fetchGenresLoading: false,
                genres: action.payload,
            };
        case FETCH_GENRES_FAILURE:
            return {
                ...state,
                fetchGenresLoading: false,
            };
        case FETCH_GENRE_ARTISTS_BEGIN:
            return {
                ...state,
                fetchGenreArtistsLoading: true,
            };
        case FETCH_GENRE_ARTISTS_SUCCESS:
            return {
                ...state,
                fetchGenreArtistsLoading: false,
                genreArtists: action.payload,
            };
        case FETCH_GENRE_ARTISTS_FAILURE:
            return {
                ...state,
                fetchGenreArtistsLoading: false,
            };
        default:
            return state;
    }
};
