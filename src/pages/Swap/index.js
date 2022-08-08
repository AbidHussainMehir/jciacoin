import { Sidebar, Navbar } from "./_";
export function Swap() {
  return (
    <div className="wrapper">
      <Sidebar />

      <div className="body_content_wrap" id="myHeader">
        <Navbar />
      </div>
    </div>
  );
}
