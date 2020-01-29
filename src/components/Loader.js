import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledDiv = styled.div`
    height: 0;
    width: 0;
    padding: 15px;
    border: 6px solid #ccc;
    border-right-color: #888;
    border-radius: 22px;
    -webkit-animation: ${rotate} 1s infinite linear;
    position: absolute;
    left: 50%;
    top: 50%;
`;

const Loader = () => {
    return <StyledDiv />;
};

export default Loader;
