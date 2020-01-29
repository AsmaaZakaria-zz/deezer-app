import { combineReducers } from "redux";
import GenreReducer from "../modules/genre/reducers";

export default combineReducers({
    genre: GenreReducer,
});
