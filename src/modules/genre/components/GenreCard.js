import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

const GenreCard = ({ genre, ...props }) => (
    <React.Fragment>
        <Link
            to={{
                pathname: `/genre/${genre.id}`,
                state: { modal: true },
            }}
        >
            <Card>
                <Image src={genre.picture_medium} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{genre.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/genre/${genre.id}/artists`}>Show Artists</Link>
                </Card.Content>
            </Card>
        </Link>
    </React.Fragment>
);

export default GenreCard;
