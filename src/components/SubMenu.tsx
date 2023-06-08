type SubMenuProps = {
  subArray: string[],
}

function SubMenu({ subArray }: SubMenuProps) {
  return (
    <ul>
      {subArray.map((element) => (<li>{element}</li>))}
    </ul>
  )
}

export default SubMenu;