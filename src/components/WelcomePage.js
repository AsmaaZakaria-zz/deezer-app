import React from "react";
import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";
import { userLogin } from "./../modules/user/actions";

const WelcomePage = (props) => {
    return (
        <Container>
            <Header as="h1">
                <Header.Content>
                    Hello there
                    <Header.Subheader>Please login to continue</Header.Subheader>
                </Header.Content>
            </Header>
            <Button onClick={props.userLogin}>Login</Button>
        </Container>
    );
};

export default connect(null, { userLogin })(WelcomePage);
