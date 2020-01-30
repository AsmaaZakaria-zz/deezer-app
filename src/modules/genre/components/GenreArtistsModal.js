import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import { history } from "./../../../history";
import GenreArtists from "./GenreArtists";

const GenreArtistsModal = (props) => (
    <Modal open={true}>
        <Modal.Header>Genrs Artists</Modal.Header>
        <Modal.Content scrolling>
            <GenreArtists id={props.match.params.id} />
        </Modal.Content>
        <Modal.Actions>
            <Button primary onClick={() => history.goBack()}>
                Close <Icon name="close" />
            </Button>
        </Modal.Actions>
    </Modal>
);

export default GenreArtistsModal;
