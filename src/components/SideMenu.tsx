import SubMenu from "./SubMenu";
import { useState } from "react";
import menuData from "../MenuData";
import MenuButton from "./buttons/MenuButton";

function SideMenu() {

  const [isSubMenu, setIsSubMenu] = useState('');

  return (
    <nav>
      {menuData.map((menuElement) => (
        <>
          <MenuButton
            handleClick={() => isSubMenu === menuElement.tittle ? setIsSubMenu('') : setIsSubMenu(menuElement.tittle)}
          >
            {menuElement.tittle}
          </MenuButton>
          {isSubMenu === menuElement.tittle && menuElement.subMenu?.map((element) =>
            <MenuButton>{element}</MenuButton>
          )}
        </>
      ))}

    </nav>
  )
}

export default SideMenu;