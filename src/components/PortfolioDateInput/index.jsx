import React, { useState } from "react";
import { DateInput } from "./PortfolioDateInput.style";
import { getCurrentMonth, day, year } from "../../utilities/getDate";

export const PortfolioDateInput = ({ setDate }) => {
  const month = getCurrentMonth();
  const currentDate = `${year}-${month}-${day}`;
  const [value, setValue] = useState(currentDate);
  const handleDateChange = (date) => {
    setDate(date);
    setValue(date);
  };
  return (
    <DateInput
      type="date"
      value={value}
      max={currentDate}
      onChange={(e) => handleDateChange(e.target.value)}
    />
  );
};
