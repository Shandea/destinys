import { Outlet } from "react-router";
import Navbar from "../Components/NavBar";

const Layout = () => {
  return (
    <div div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
