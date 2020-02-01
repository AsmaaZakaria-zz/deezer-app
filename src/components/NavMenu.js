import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../image/logo.png";
import { userLogout } from "../modules/user/actions";

const StyledMenu = styled(Menu)`
    background-color: #3c3d47 !important;
    color: #d35656;
`;

const Img = styled.img`
    width: 30% !important;
`;

const mapDispatchToProps = {
    userLogout,
};

const NavMenu = (props) => (
    <StyledMenu size="large" secondary>
        <Menu.Item>
            <Img src={Logo} alt="Deezer Logo" />
        </Menu.Item>

        <Menu.Menu position="right">
            <Menu.Item style={{ fontSize: "20px", color: "#d35656" }}>
                {props.currentUser.name}
            </Menu.Item>
            <Menu.Item>
                <img
                    src={props.currentUser.picture_small}
                    alt="user img"
                    style={{ borderRadius: "50%" }}
                />
            </Menu.Item>
            <Menu.Item>
                <Button inverted onClick={props.userLogout}>
                    Logout
                </Button>
            </Menu.Item>
        </Menu.Menu>
    </StyledMenu>
);

NavMenu.propTypes = {
    currentUser: PropTypes.object.isRequired,
    userLogout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NavMenu);
