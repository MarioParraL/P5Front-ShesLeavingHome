import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
  return (
    <header class={"Menu"}>
      <a href="/" class={"MenuList"}>
        Photographic Films
      </a>
      <a href="/projects" className={"MenuList"}>
        The Projects
      </a>
    </header>
  );
};

export default Menu;
