import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #name-category{

      cursor: default;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      /* identical to box height */

      letter-spacing: -0.04em;

      color: #000000;
  }
  #categorySelected {
    margin-top: 100px;
    display: grid;
    justify-content: center;
    grid-template-columns:repeat(6, 1fr);
    grid-gap: 40px;
    row-gap: 100px;
    max-width: 1280px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .filterCategory {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 180px;
    padding: 5px;
    height: 200px;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(204, 38, 27, 0) 0%,
      rgba(204, 38, 27, 0.1) 100%
    );
    border-radius: 30px;
    img{
    position: absolute;
    margin-top: -30px;
    margin-left: 35px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50px;
  }
  p{
    margin-top: 70px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.02em;

    color: #000000;
  }
  }
 
`;
