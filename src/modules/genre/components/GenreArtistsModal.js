import React from "react";
import { connect } from "react-redux";
import { Button, Icon, Modal } from "semantic-ui-react";
import GenreArtistsList from "./GenreArtistsList";

const GenreArtistsModal = (props) => (
    <Modal open={props.open}>
        <Modal.Header>Genrs Artists</Modal.Header>
        <Modal.Content scrolling>
            <GenreArtistsList id={props.genre.id} />
        </Modal.Content>
        <Modal.Actions>
            <Button primary onClick={props.onClose}>
                Close <Icon name="close" />
            </Button>
        </Modal.Actions>
    </Modal>
);

export default connect()(GenreArtistsModal);
