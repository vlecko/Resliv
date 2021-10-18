import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/employees">Сотрудники</NavLink>
    </div>
  );
}
