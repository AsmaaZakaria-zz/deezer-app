import React from "react";
import { connect } from "react-redux";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import { history } from "./../../../history";
import Header from "./../../../components/Header";
import { fetchGenreArtists } from "./../actions/fetchGenreArtists";
import GenreArtists from "./GenreArtists";

const StyledBtn = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const mapStateToProps = (state) => ({
    artists: state.genre.genreArtists,
});

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtistsList = (props) => (
    <Container>
        <Header header="Genre Artists List" />
        <GenreArtists params={props.match.params} />
        <footer>
            <StyledBtn inverted color="blue" onClick={() => history.goBack()}>
                Back
            </StyledBtn>
        </footer>
    </Container>
);

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtistsList);
