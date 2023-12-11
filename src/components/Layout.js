import { Outlet } from "react-router-dom";
import { Logo } from "./Logo";

export const Layout = () => {
  return (
    <>
      <Logo />
      <div className="main container">
        <Outlet />
      </div>
    </>
  );
};
