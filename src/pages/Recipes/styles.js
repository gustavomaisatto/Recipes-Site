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
  .recipeLink{
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
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
    gap: 10px;
    display: grid;
    grid-template-columns:repeat(4, 150px);
    margin-right: 200px;
  }
  #title-title{
    width: 40%;
  }
  .ingredientData {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 150px;
    height: 150px;
    border-radius: 50px;
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
  @media(max-width: 1024px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-left: 5px;
      #main{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      img {
        width: 100vw;

      }
      #ingredients-title{
        opacity: 0;
        position: absolute;
      }
      #title {
    display: flex;
    justify-content: center;
    padding-right: 0;
  }
  #title-title {
    width: 100%;
  }
  #ingredients {
      margin-right: 0;
      grid-template-columns:repeat(3, 150px);
  }
    }
    @media(max-width: 500px) {
      h1{
        font-size: 45px;
      }
      #ingredients {
      gap: 10px;
      display: grid;
      grid-template-columns:repeat(2, 150px);
      margin-right: 0;
  }
  }
`;
