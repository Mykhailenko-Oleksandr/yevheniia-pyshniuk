import css from "./ToggleButtons.module.css";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import clsx from "clsx";

interface ToggleButtonsProps {
  isMenu?: boolean;
}

export default function ToggleButtons({ isMenu }: ToggleButtonsProps) {
  return (
    <div className={clsx(css.toggleBtnBox, isMenu && css.menu)}>
      <ToggleThemeBtn isMenu={isMenu} />
      <ToggleLanguageBtn isMenu={isMenu} />
    </div>
  );
}
