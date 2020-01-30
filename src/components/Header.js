import React from "react";
import { connect } from "react-redux";
import { Button, Menu } from "semantic-ui-react";
import { userLogout } from "./../modules/user/actions";

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.user,
    };
};

const mapDispatchToProps = {
    userLogout,
};

const Header = (props) => {
    return (
        <Menu size="small">
            <Menu.Item name="Deezer" />

            <Menu.Menu position="right">
                <Menu.Item>{props.currentUser && props.currentUser.name}</Menu.Item>
                <Menu.Item>
                    <Button primary onClick={props.userLogout}>
                        Logout
                    </Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
