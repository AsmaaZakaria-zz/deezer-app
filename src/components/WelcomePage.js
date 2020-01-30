import React from "react";
import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";
import styled from "styled-components";
import { userLogin } from "./../modules/user/actions";

const StyledContainer = styled(Container)`
    text-align: center;
    padding: 20%;
    line-height: 80px;
`;

const WelcomePage = (props) => {
    return (
        <StyledContainer>
            <Header style={{ "line-height": "50px" }}>
                <Header.Content style={{ "font-size": "4rem" }}>
                    Hello there :)
                    <Header.Subheader style={{ "font-size": "2rem" }}>
                        Please login to continue
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Button inverted color="blue" onClick={props.userLogin}>
                Login
            </Button>
        </StyledContainer>
    );
};

export default connect(null, { userLogin })(WelcomePage);
