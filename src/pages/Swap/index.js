import { Sidebar, Navbar, Main, Footer, Settings } from "./_";
export function Swap() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="body_content_wrap" id="myHeader">
        <Navbar />
        <Main />
        <Footer />
        <Settings />
      </div>
    </div>
  );
}
