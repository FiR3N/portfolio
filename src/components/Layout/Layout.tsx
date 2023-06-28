import { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
