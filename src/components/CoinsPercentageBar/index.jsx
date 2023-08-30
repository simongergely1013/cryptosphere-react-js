import React from "react";
import {
  Container,
  NumberContainer,
  Number,
  BulletPoint,
  BarMain,
  BarInner,
} from "./CoinsPercentageBar.styles";

export const CoinsPercentageBar = ({
  color1,
  color2,
  background1,
  background2,
  num1,
  num2,
  width,
}) => {
  return (
    <Container>
      <NumberContainer>
        <Number color={color1}>
          <BulletPoint background={background1} />
          <p>{num1}</p>
        </Number>
        <Number color={color2}>
          <BulletPoint background={background2} />
          <p>{num2}</p>
        </Number>
      </NumberContainer>
      <BarMain background={background2}>
        <BarInner background={background1} width={width + "%"} />
      </BarMain>
    </Container>
  );
};
