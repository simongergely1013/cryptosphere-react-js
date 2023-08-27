import React, { useState } from "react";
import { Input } from "../PortfolioCoinSearch/PortfolioCoinSearch.styles";

export const PortfolioCoinAmountInput = ({ setAmount }) => {
  const [value, setValue] = useState("");
  const handleAmount = (amount) => {
    setAmount(Number(amount));
    setValue(amount);
  };
  return (
    <Input
      type="text"
      placeholder="Enter amount"
      value={value}
      onChange={(e) => handleAmount(e.target.value)}
    />
  );
};
