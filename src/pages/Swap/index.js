import { Sidebar, Navbar, Main, Footer, Settings, Token, Connect } from "./_";
export function Swap() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="body_content_wrap" id="myHeader">
        <Navbar />
        <Main />
        <Footer />
        <Settings />
        <Token />
        <Connect />
      </div>
    </div>
  );
}
