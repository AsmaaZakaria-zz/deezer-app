import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Grid } from "semantic-ui-react";
import GenreCard from "./GenreCard";
import Loader from "./../../../components/Loader";
import { fetchGenres } from "./../actions/fetchGenres";

const mapStateToProps = (state) => {
    return {
        genres: state.genre.genres,
    };
};

const mapDispatchToProps = {
    fetchGenres,
};

const GenresList = (props) => {
    useEffect(() => {
        props.fetchGenres();
        // eslint-disable-next-line
    }, []);

    const renderGenreList = () => {
        if (!props.genres.length) {
            return <Loader />;
        }

        return props.genres.map((genre) => (
            <Grid.Column key={genre.id} mobile={16} tablet={8} computer={4}>
                <GenreCard genre={genre} />
            </Grid.Column>
        ));
    };

    return (
        <Container>
            <h1>Genres List</h1>
            <Grid>{renderGenreList()}</Grid>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
