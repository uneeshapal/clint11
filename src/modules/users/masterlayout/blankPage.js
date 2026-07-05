import { Outlet } from "react-router-dom";
import Navbar from "../../shareconpnents/AppHeader";
import Footer from "../../shareconpnents/AppFooter";

function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default UserLayout;