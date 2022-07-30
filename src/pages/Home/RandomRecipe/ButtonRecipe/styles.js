import styled from "styled-components";

export const ButtonView = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 200px;
    height: 60px;
    background: #000000;
    border-radius: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    cursor: pointer;
    letter-spacing: -0.02em;
 
    color: #FFFFFF;
    transition: 0.25s;
    border: none;
    &:hover{
        background: #2c2d2e;
    }
`