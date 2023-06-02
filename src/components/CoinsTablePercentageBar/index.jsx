import React from "react";
import {
  Container,
  NumberContainer,
  Number,
  BulletPoint,
  BarMain,
  BarInner,
} from "./CoinsTablePercentageBar.styles";
import { getRandomColor } from "../../utilities";

export default class CoinsPercentageBar extends React.Component {
  render() {
    return (
      <Container>
        <NumberContainer>
          <Number style={{ color: this.props.color1 }}>
            <BulletPoint style={{ background: this.props.background1 }} />
            <p>{this.props.num1}</p>
          </Number>
          <Number style={{ color: this.props.color2 }}>
            <BulletPoint style={{ background: this.props.background2 }} />
            <p>{this.props.num2}</p>
          </Number>
        </NumberContainer>
        <BarMain style={{ background: this.props.background2 }}>
          <BarInner
            style={{
              background: this.props.background1,
              width: this.props.width,
            }}
          />
        </BarMain>
      </Container>
    );
  }
}
