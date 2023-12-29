import Footer from "./common/components/Footer";
import Navbar from "./common/components/NavBar";
import "./globals.css";

const Layout = ({ children }: any) => {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
