import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SideBar } from "../side-bar/side-bar";
import { useNavigate, Link } from "react-router-dom";

function Menu({ isLateralMenu, handleOpenMenuLateral }) {
  const [selectedMenu, setSelectedMenu] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setSelectedMenu(window.location.pathname);
  }, [window.location.pathname]);

  const handleMenu = (url) => {
    navigate(url);

    if (isLateralMenu) {
      handleOpenMenuLateral();
    }
  };
  return (
    <div className={styles[isLateralMenu ? "menuMobile" : "menuDesktop"]}>
      <button
        className={[
          styles[
            selectedMenu === "/hypotenuse"
              ? "selectedButton"
              : "notSelectedButton"
          ],
          styles.menuButton,
        ].join(" ")}
        onClick={() => handleMenu("/hypotenuse")}
      >
        Hypotenuse
      </button>
      <button
        className={[
          styles[
            selectedMenu === "/mod" ? "selectedButton" : "notSelectedButton"
          ],
          styles.menuButton,
        ].join(" ")}
        onClick={() => handleMenu("/mod")}
      >
        Ganzzahligen Rest ausgeben
      </button>
      <button
        className={[
          styles[
            selectedMenu === "/circumference"
              ? "selectedButton"
              : "notSelectedButton"
          ],
          styles.menuButton,
        ].join(" ")}
        onClick={() => handleMenu("/circumference")}
      >
        Kreisumfang
      </button>
      {isLateralMenu && (
        <>
          <button
            className={[
              styles[
                selectedMenu === "/historic"
                  ? "selectedButton"
                  : "notSelectedButton"
              ],
              styles.menuButton,
            ].join(" ")}
            onClick={() => handleMenu("/historic")}
          >
            Geschichte
          </button>
          <button
            className={[
              styles[
                selectedMenu === "/explanation"
                  ? "selectedButton"
                  : "notSelectedButton"
              ],
              styles.menuButton,
            ].join(" ")}
            onClick={() => handleMenu("/explanation")}
          >
            Erklärungen
          </button>
        </>
      )}
    </div>
  );
}

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
