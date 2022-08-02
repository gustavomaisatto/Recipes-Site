import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media(max-width: 1024px) {
    
    gap: 20px;
  }
`

export const SocialImage = styled.img`
    width: 22px;
    height: 17.88px;
    @media(max-width: 500px) {
    width: 18px;
    height: 14px;
  }
`