import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const GenreCard = ({ genre }) => (
    <Card>
        <Image src={genre.picture_medium} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{genre.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
            <Link to={`/genre/${genre.id}`}>Show Artists</Link>
        </Card.Content>
    </Card>
);

export default GenreCard;
