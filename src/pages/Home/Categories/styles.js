import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  height: auto;
  width: 100%;
  padding: 0 20px;
  margin: 160px 0;
  #header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  h1 {
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
  button {
    width: 200px;
    height: 60px;
    background: #e7fafe;
    border-radius: 16px;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;

    color: #000000;
  }
  #container-categories{
    margin-top: 100px;
    display: grid;
    justify-content: center;
    grid-template-columns:repeat(6, 1fr);
    grid-gap: 40px;
  }
  img{
    position: absolute;
    margin-top: -30px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .category {
    cursor: pointer;
    width: 180px;
    height: 152px;
    text-align: center;
    background: linear-gradient(
      180deg,
      rgba(112, 130, 70, 0) 0%,
      rgba(112, 130, 70, 0.1) 100%
    );
    border-radius: 30px;
  }
  p {
    margin-top: 80px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: -0.02em;

    color: #000000;
  }
`;
