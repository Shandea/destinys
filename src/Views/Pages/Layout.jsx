import { Outlet } from "react-router";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <div div className="w-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
