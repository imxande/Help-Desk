import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

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

    &:hover::after {
        content: attr(data-title);
        position: absolute;
        background: #178795;
        border-radius: 10%;
        left: 23%;
        color: #fff;
        padding: 0.3em 0.5em;
    }
`


export const Subject = styled.p`
    
`

export const Date = styled.time`
    padding-right: 1.5em;
`

