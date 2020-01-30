import { combineReducers } from "redux";
import UserReducer from "../modules/user/reducers";
import GenreReducer from "../modules/genre/reducers";

export default combineReducers({
    genre: GenreReducer,
    user: UserReducer,
});
