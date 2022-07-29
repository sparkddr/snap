const NavSubMenu = (props) => {
  return (
    <ul
      className={
        "absolute bg-white px-4 py-5 z-10 drop-shadow-lg rounded-xl flex flex-col gap-2 " +
        props.className
      }
    >
      {props.children}
    </ul>
  );
};

export default NavSubMenu;
