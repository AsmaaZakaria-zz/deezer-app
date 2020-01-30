import React from "react";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../logo.png";
import { userLogout } from "./../modules/user/actions";

const StyledMenu = styled(Menu)`
    background-color: #3c3d47 !important;
    color: #d35656;
`;

const mapStateToProps = (state) => ({
    currentUser: state.user.user,
});

const mapDispatchToProps = {
    userLogout,
};

const Header = (props) => {
    return (
        <StyledMenu size="big" secondary>
            <Menu.Item>
                <img src={Logo} alt="Deezer Logo" />
            </Menu.Item>

            <Menu.Menu position="right">
                {props.currentUser && (
                    <React.Fragment>
                        <Menu.Item style={{ "font-size": "20px", color: "#d35656" }}>
                            {props.currentUser.name}
                        </Menu.Item>
                        <Menu.Item>
                            <img
                                src={props.currentUser.picture_small}
                                alt="user img"
                                style={{ "border-radius": "50%" }}
                            />
                        </Menu.Item>
                    </React.Fragment>
                )}
                <Menu.Item>
                    <Button inverted onClick={props.userLogout}>
                        Logout
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </StyledMenu>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
