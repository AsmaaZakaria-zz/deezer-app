import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
import { fetchGenreArtists } from "./../actions/fetchGenreArtists";
import Loader from "./../../../components/Loader";

const mapStateToProps = (state) => ({
    artists: state.genre.genreArtists,
});

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtists = (props) => {
    const { fetchGenreArtists, params, artists } = props;

    useEffect(() => {
        fetchGenreArtists(props.id !== undefined ? props.id : params.id);
        // eslint-disable-next-line
    }, []);

    if (!artists.length) {
        return <Loader />;
    }

    return (
        <Item.Group>
            {artists.map((artist) => (
                <Item key={artist.id}>
                    <Item.Image size="tiny" src={artist.picture_medium} />
                    <Item.Content verticalAlign="middle">
                        <Item.Header>{artist.name}</Item.Header>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    );
};

GenreArtists.propTypes = {
    id: PropTypes.string,
    params: PropTypes.object,
    artists: PropTypes.array.isRequired,
    fetchGenreArtists: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtists);
