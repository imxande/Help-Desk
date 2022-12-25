import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Subject = styled.p`

`

export const Priority = styled.span`
    font-size: 1.3em;
    margin: 0 0.5em;
    border: 1px solid #000000;
    width: 0.5em;
    height: 0.5em;
    cursor: pointer;
    background: ${(props) => props.backgroundColor};

    &:hover {
        border: 1px solid #0BFFFF;
    }
`