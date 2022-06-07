import { Link, Outlet } from "react-router-dom";
import Navbar from "./../components/Navbar";

function ShareLayoutHome() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default ShareLayoutHome;
