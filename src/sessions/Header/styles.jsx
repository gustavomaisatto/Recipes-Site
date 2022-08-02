import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 40px 80px;
    @media(max-width: 1024px) {
    
    padding: 40px 10px;
  }
  @media(max-width: 500px) {
    padding: 40px 5px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`