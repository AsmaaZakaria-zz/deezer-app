import React from "react";
import { connect } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import { history } from "./../../../history";
import { fetchGenreArtists } from "./../actions/fetchGenreArtists";
import GenreArtists from "./GenreArtists";

const mapStateToProps = (state, ownProps) => {
    return {
        artists: state.genre.genreArtists,
    };
};

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtistsList = (props) => (
    <Container>
        <h1>Genre Artists List</h1>
        <GenreArtists {...props} />
        <footer>
            <Button onClick={() => history.goBack()}>Back</Button>
        </footer>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtistsList);
