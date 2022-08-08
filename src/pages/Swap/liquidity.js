import {
  Sidebar,
  Navbar,
  Liquidity as Main,
  Footer,
  Settings,
  Token,
  Connect,
} from "./_";
export function Liquidity() {
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
