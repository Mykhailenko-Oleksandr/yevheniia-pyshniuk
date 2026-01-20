import clsx from "clsx";
import css from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  isOpen: boolean;
}

export default function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return <div className={clsx(css.backdrop, isOpen && css.isOpen)}></div>;
}
