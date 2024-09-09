import { useState } from "react";

export const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);

  const modalToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, modalToggle];
};
