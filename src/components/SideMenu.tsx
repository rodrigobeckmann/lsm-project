import { useState } from "react";
import menuData from "../MenuData";
import MenuButton from "./buttons/MenuButton";

type SideMenuProps = {
  handleRenderClick: (arg: JSX.Element) => void,
}

function SideMenu({ handleRenderClick }: SideMenuProps) {

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
            <MenuButton
              handleClick={() => handleRenderClick(element.component)}
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