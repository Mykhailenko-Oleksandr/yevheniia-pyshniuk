import css from "./ToggleButtons.module.css";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import clsx from "clsx";

interface ToggleButtonsProps {
  isMenu?: boolean;
}

export default function ToggleButtons({ isMenu }: ToggleButtonsProps) {
  return (
    <div className={clsx(css.toggleBtnBox, isMenu && css.menuBox)}>
      <ToggleThemeBtn isMenu={isMenu} />
      <div className={clsx(css.line, isMenu && css.menuLine)}></div>
      <ToggleLanguageBtn isMenu={isMenu} />
    </div>
  );
}
