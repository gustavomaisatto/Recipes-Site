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
  p {
    padding-right: 50px;
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
  }
  #title {
    display: flex;
    justify-content: space-around;
  }
`;
