import styled from "styled-components";

export const LogoFood = styled.div`
    font-family: 'Lobster', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    cursor: default;
    color: #000000;

    span{
     color:#FF7426
    }
    @media(max-width: 1024px) {
    font-size: 16px;
  }
  @media(max-width: 500px) {
    font-size: 12px;
  }

`