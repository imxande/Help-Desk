import styled from "styled-components";

export const DropDown = styled.div`
    position: absolute;
    z-index: 2;
    border: 1px solid grey;
    margin-top: 1%;
    text-align: center;
    background: aliceblue;
`

export const Group = styled.ul`
    color: #349fad;
`

export const Item = styled.li`
    padding: 0.5em 1em;

    &:hover {
        background: #178795;
        color: #bdd6d9;
        transition: 0.5s;
    }
`

