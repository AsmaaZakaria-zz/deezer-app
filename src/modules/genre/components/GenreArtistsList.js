import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import { history } from "./../../../history";
import Header from "./../../../components/Header";
import GenreArtists from "./GenreArtists";

const StyledBtn = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

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

GenreArtistsList.propTypes = {
    match: PropTypes.object.isRequired,
};

export default GenreArtistsList;
