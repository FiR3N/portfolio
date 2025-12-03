import type React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ToTheTopButton from "../ToTheTopButton/ToTheTopButton";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children} <ToTheTopButton />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
