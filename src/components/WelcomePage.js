import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";
import styled from "styled-components";
import { userLogin } from "./../modules/user/actions";

const StyledContainer = styled(Container)`
    text-align: center;
    padding: 20%;
    line-height: 80px;
`;

const mapDispatchToProps = {
    userLogin,
};

const WelcomePage = (props) => {
    return (
        <StyledContainer>
            <Header style={{ lineHeight: "100px" }}>
                <Header.Content style={{ fontSize: "4rem" }}>
                    Hello there :)
                    <Header.Subheader style={{ fontSize: "2rem" }}>
                        Please login to continue
                    </Header.Subheader>
                </Header.Content>
            </Header>
            <Button
                inverted
                color="blue"
                onClick={props.userLogin}
                style={{ width: "30%" }}
            >
                Login
            </Button>
        </StyledContainer>
    );
};

WelcomePage.propTypes = {
    userLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WelcomePage);
