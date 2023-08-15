import { PortfolioPageWrapper } from "./Portfolio.styles";
import { AddAssetButton } from "../../../components/AddAssetButton";
import { PageHeader } from "../../../components/PageHeader";
import { getThemeColors } from "../../../utilities/getThemeColors";

export const Portfolio = () => {
  const { main, text } = getThemeColors();

  return (
    <PortfolioPageWrapper>
      <AddAssetButton text={"Add Asset"} background={main} borderColor={text} />
      <PageHeader text={"Your statistics"} />
    </PortfolioPageWrapper>
  );
};
