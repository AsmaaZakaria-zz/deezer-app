import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
    &:hover {
        -webkit-box-shadow: -1px 10px 21px -4px rgba(0, 0, 0, 0.32);
        -moz-box-shadow: -1px 10px 21px -4px rgba(0, 0, 0, 0.32);
        box-shadow: -1px 10px 21px -4px rgba(0, 0, 0, 0.32);
    }
    .content {
        &:hover {
            background-color: #f9d5bb;
            font-size: 17px;
        }
    }
`;

const GenreCard = ({ genre }) => (
    <React.Fragment>
        <Link
            to={{
                pathname: `/genre/${genre.id}`,
                state: { modal: true },
            }}
        >
            <StyledCard>
                <Image src={genre.picture_medium} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{genre.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/genre/${genre.id}/artists`}>Show Artists</Link>
                </Card.Content>
            </StyledCard>
        </Link>
    </React.Fragment>
);

GenreCard.propTypes = {
    genre: PropTypes.object.isRequired,
};

export default GenreCard;
