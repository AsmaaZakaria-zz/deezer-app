import React from "react";
import { connect } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import { history } from "./../../../history";
import { fetchGenreArtists } from "./../actions/fetchGenreArtists";
import GenreArtists from "./GenreArtists";

const StyledBtn = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const mapStateToProps = (state, ownProps) => ({
    artists: state.genre.genreArtists,
});

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtistsList = (props) => (
    <Container>
        <h1>Genre Artists List</h1>
        <GenreArtists params={props.match.params} />
        <footer>
            <StyledBtn inverted color="blue" onClick={() => history.goBack()}>
                Back
            </StyledBtn>
        </footer>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtistsList);
