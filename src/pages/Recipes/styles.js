import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  cursor: default;
  gap: 50px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.04em;

    color: #000000;
  }
  img {
    width: 840px;
    height: 600px;
    border-radius: 50px;
  }
  #description {
    
    width: 95%;
   padding: 10px 30px 30px 30px ;
    border-radius: 20px;
    background-color: #f0f0f0;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    /* or 175% */

    color: rgba(0, 0, 0, 1);
  }
  #class {
    padding-left: 10px;
    display: flex;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: rgba(0, 0, 0, 0.6);
  }
  #category {
    display: flex;
    gap: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: rgba(0, 0, 0, 0.6);

    img {
      width: 24px;
      height: 24px;
    }
  }
  #main{
    display: flex;
    justify-content: space-between;
  }
  #title {
    display: flex;
    justify-content: space-between;
    padding-right: 300px;
  }
  #ingredients {
    display: grid;
    grid-template-columns:repeat(1, 150px);
  }
  #title-title{
    width: 40%;
  }
  .ingredientData {
    width: 150px;
    height: 150px;
    background: linear-gradient(
      180deg,
      rgba(204, 38, 27, 0) 0%,
      rgba(204, 38, 27, 0.1) 100%
    );
    margin-left: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 17px;
  }
`;
