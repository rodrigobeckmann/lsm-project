type MenuButtonProps = {
  children: string,
  handleClick?: () => void,
}

function MenuButton({ children, handleClick }: MenuButtonProps) {
  return (
    <button
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default MenuButton;