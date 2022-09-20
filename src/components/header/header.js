import { useState } from "react";
import styles from "./header.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SideBar } from "../side-bar/side-bar";
import { Link } from "react-router-dom";
import { Menu } from "./components/menu/menu";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenuLateral = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.container}>
      <header>
        {openMenu && (
          <div className={styles.menuMobile}>
            <Menu
              isLateralMenu={true}
              handleOpenMenuLateral={handleOpenMenuLateral}
            />
          </div>
        )}
        <div className={styles.lateralMenu}>
          <div className={styles.lateralContainer}>
            <button onClick={handleOpenMenuLateral}>
              {openMenu ? (
                <AiFillCloseCircle size={28} />
              ) : (
                <BsThreeDotsVertical size={28} />
              )}
            </button>
            <Link className={styles.logo} to="/home">
              Online-Rechner
            </Link>
          </div>
          <div className={styles.menuDesktop}>
            <Menu isLateralMenu={false} />
          </div>
        </div>
        <div className={styles.profile}>
          <img alt="" src="https://github.com/AnnaLaraMoraes.png" />
        </div>
      </header>
      <SideBar />
    </div>
  );
};
