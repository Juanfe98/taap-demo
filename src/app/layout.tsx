import Footer from "./common/components/Footer";
import Navbar from "./common/components/NavBar";
import "./globals.css";

const Layout = ({ children }: any) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
