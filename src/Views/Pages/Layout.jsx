import { Outlet } from "react-router";
import Navbar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="w-full">
      <div className="mb-20">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
