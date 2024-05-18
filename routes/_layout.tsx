import { PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

const Layout = ({ Component }: PageProps) => {
  return (
    <div>
      <Menu />
      <Component />
    </div>
  );
};
export default Layout;
