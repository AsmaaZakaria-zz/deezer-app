import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
    font-size: 2.5rem;
    padding-bottom: 20px;
`;

const Header = (props) => {
    return <StyledHeader>{props.header}</StyledHeader>;
};

export default Header;
