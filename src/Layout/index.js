import { Sidebar, Navbar, Footer } from "./_";
import { Connect } from "../components";
export function Layout({ children }) {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="body_content_wrap" id="myHeader">
        <Navbar />
        {children}
        <Connect />
        <Footer />
      </div>
    </div>
  );
}
