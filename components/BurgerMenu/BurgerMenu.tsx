import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import AuthButtons from "../AuthButtons/AuthButtons";

interface BurgerMenuProps {
  isOpen: boolean;
}

export default function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <div className={clsx(css.backdrop, isOpen && css.isOpen)}>
      <div className={css.menu}>
        <Navigation isMenu={isOpen} />
        <Address isMenu={isOpen} />

        <ToggleButtons isMenu={isOpen} />

        <AuthButtons isMenu={isOpen} />
      </div>
    </div>
  );
}
