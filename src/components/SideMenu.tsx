import SubMenu from "./SubMenu";
import { useState } from "react";
import menuData from "../MenuData";

function SideMenu() {

  const INITIAL_SUB_MENU = {
    home: false,
    register: false,
    report: false,
  }

  const [subMenu, setSubMenu] = useState(INITIAL_SUB_MENU);

  return (
    <nav>

      {menuData.map((menuElement) =>
        <button>{menuElement.tittle}</button>)}

      <button
        onClick={() => subMenu.home === false ? setSubMenu({ ...subMenu, home: true }) : setSubMenu({ ...subMenu, home: false })}
        id="home">Inicio</button>
      {subMenu.home && <SubMenu
        subArray={['teste1', 'teste2']}
      />}
      <button>Cadastros</button>
      <button>Relatorios</button>
    </nav>
  )
}

export default SideMenu;