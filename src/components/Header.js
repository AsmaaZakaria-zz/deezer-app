import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size: 2.5rem;
    padding-bottom: 20px;
`;

const Header = (props) => {
    return <StyledHeader>{props.header}</StyledHeader>;
};

Header.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Header;
