import styled from "styled-components";

export const Container = styled.div`
	border: 1px solid grey;
    height: 48px;
    background: #e3e1f8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        border: 1px solid #08c7e0;
        color: #08c7e0;
        background: #2b343b;
        transition: 0.5s;
    }

    &:hover::after {
        content: "Component";
        margin-right: 1em;
        
    }
`;
