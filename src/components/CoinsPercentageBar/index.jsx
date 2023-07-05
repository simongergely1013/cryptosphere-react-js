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
        <Number style={{ color: color1 }}>
          <BulletPoint style={{ background: background1 }} />
          <p>{num1}</p>
        </Number>
        <Number style={{ color: color2 }}>
          <BulletPoint style={{ background: background2 }} />
          <p>{num2}</p>
        </Number>
      </NumberContainer>
      <BarMain style={{ background: background2 }}>
        <BarInner
          style={{
            background: background1,
            width: width,
          }}
        />
      </BarMain>
    </Container>
  );
};
