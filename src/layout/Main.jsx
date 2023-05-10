import { Outlet } from "react-router-dom";
import Header from "../pages/Sheard/Header/Header";
import Footer from "../pages/Sheard/Footer/Footer";

export default function Main() {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
