import columnImage from "../../../assets/columnleft.svg";
import columnRight from "../../../assets/columnRight.svg";
import leftRandom from "../../../assets/leftRandom.svg";
import rightRandom from "../../../assets/rightRandom.svg";
import ButtonHot from "./ButtonHot";
import ButtonRecipe from "./ButtonRecipe";
import RandomTitle from "./RandomTitle";
import userImage from '../../../assets/userImage.svg'
import { ContainerRandom, ColumnLeft, MainContent } from "./styles";

export function RandomRecipe({ imageRandom, title, categorySelect, setRecipeSelect }) {
  return (
    <ContainerRandom>
      <ColumnLeft>
        <img src={columnImage} alt="Coluna da esquerda"></img>
      </ColumnLeft>
      <MainContent>
        <div
          style={{ backgroundImage: `url(${leftRandom})` }}
          id="leftContainer"
        >
          <ButtonHot></ButtonHot>
          <RandomTitle title={title}></RandomTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <div id="container-foot">
            <div id="container-user">
          <img src={userImage} alt="user" id="userImage" />
          <div id="text-container">
            <p><strong>Gustavo Maisatto</strong></p>
            <p id='date'>15 March 2022</p>
          </div>
          </div>
          <ButtonRecipe setRecipeSelect={setRecipeSelect} categorySelect={categorySelect}></ButtonRecipe>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${imageRandom})` }}
          id="rightContainer"
        ></div>
      </MainContent>
      <ColumnLeft>
        <img src={columnRight} alt="Coluna da direita"></img>
      </ColumnLeft>
    </ContainerRandom>
  );
}
