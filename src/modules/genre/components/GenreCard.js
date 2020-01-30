import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import GenreArtistsModal from "./GenreArtistsModal";

const GenreCard = ({ genre, ...props }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <React.Fragment>
            <GenreArtistsModal
                genre={genre}
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
            <Card onClick={() => setOpenModal(true)}>
                <Image src={genre.picture_medium} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{genre.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/genre/${genre.id}`}>Show Artists</Link>
                </Card.Content>
            </Card>
        </React.Fragment>
    );
};

export default GenreCard;
