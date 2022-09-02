export function Settings() {
  function closeNav10() {
    document.getElementById("myNav10").style.display = "none";
  }
  return (
    <div id="myNav10" className="overlay10 textcenter">
      <div className="setting_close">
        <span className="tokenset">Settings</span>
        <span onClick={closeNav10}>&times;</span>
      </div>
      <div className="bx_shadow"></div>
      <div className="overlay10-content">
        <div className="swapbg10">
          <div className="dead_line">
            <p style={{ color: "black" }}>Slippage tolerance</p>
            <div className="seting_rate">
              <div className="all_setting">
                <div className="setting_button">
                  <button className="btn seting_btn_bg">0.1%</button>
                </div>
                <div className="setting_button">
                  <button className="btn seting_btn_bg jPlCZV">0.5%</button>
                </div>
                <div className="setting_button">
                  <button className="btn seting_btn_bg">1%</button>
                </div>
              </div>
              <div className="setting_input">
                <input className="eqxqaX" type="number" placeholder="0.5%" />
              </div>
            </div>
          </div>
          <div className="dead_line">
            <p style={{ color: "black" }}>Transaction deadline</p>
            <div className="seting_rate">
              <div className="setting_input set2">
                <input className="eqxqaX" type="number" placeholder="0.5%" />
                <div style={{ color: "#fff" }}>Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
