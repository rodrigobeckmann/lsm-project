import { useState } from "react";
import menuData from "../MenuData";
import MenuButton from "./buttons/MenuButton";
import { useNavigate } from "react-router-dom";

function SideMenu() {

  const [isSubMenu, setIsSubMenu] = useState('');
  const navigate = useNavigate();

  return (
    <nav>
      <MenuButton
        handleClick={() => navigate('/')}
      >
        Inicio
      </MenuButton>
      {menuData.map((menuElement) => (
        <>
          <MenuButton
            handleClick={() => isSubMenu === menuElement.tittle ? setIsSubMenu('') : setIsSubMenu(menuElement.tittle)}
          >
            {menuElement.tittle}
          </MenuButton>
          {isSubMenu === menuElement.tittle && menuElement.subMenu?.map((element) =>
            <MenuButton
              handleClick={() => navigate(`${menuElement.slug}/${element.slug}`)}
            >
              {element.tittle}
            </MenuButton>
          )}
        </>
      ))}

    </nav>
  )
}

export default SideMenu;