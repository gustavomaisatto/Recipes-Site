import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  list-style: none;
  gap: 60px;
  @media(max-width: 1024px) {
    
    gap: 40px;
  }
  @media(max-width: 500px) {
    gap: 20px;
    width: auto;
  }
`;

export const MenuItem = styled.li`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;

  color: #000000;
  @media(max-width: 1024px) {
    
    font-size: 14px;
  }
  @media(max-width: 500px) {
    font-size: 12px;
  }
`;
