import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Item } from "semantic-ui-react";
import { fetchGenreArtists } from "./../actions/fetchGenreArtists";
import Loader from "./../../../components/Loader";

const mapStateToProps = (state, ownProps) => {
    return {
        artists: state.genre.genreArtists,
    };
};

const mapDispatchToProps = {
    fetchGenreArtists,
};

const GenreArtists = (props) => {
    const { fetchGenreArtists, match, artists } = props;

    useEffect(() => {
        fetchGenreArtists(props.id || match.params.id);
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

export default connect(mapStateToProps, mapDispatchToProps)(GenreArtists);
