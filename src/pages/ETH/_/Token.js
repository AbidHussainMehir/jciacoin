export function Token() {
  function closeNav8() {
    document.getElementById("myNav8").style.display = "none";
  }

  return (
    <div id="myNav8" className="overlay8 textcenter">
      <div className="setting_close">
        <span className="tokenset font_normal">
          Select a token <i className="fa fa-question"></i>
        </span>
        <span onClick={closeNav8}>&times;</span>
      </div>
      <div className="overlay8-content text-left">
        <div className="swapbg8">
          <div className="select_token">
            <div className="select_input">
              <input
                type="text"
                placeholder="Search name or paste address"
                className="eeRXNx"
              />
            </div>
          </div>
          <div className="">
            <div className="para">
              <p>Common bases</p>
            </div>
            <div className="eth">
              <div className="eth_img">
                <img src={require("../../../assets/image/eth1.jpg")} /> ETH
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/sushi.jpg")} /> SUSHI
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/wbtr.jpg")} /> WBTR
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/mim.jpg")} /> MIM
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/spell.webp")} /> SPELL
              </div>
            </div>
            <div className="eth">
              <div className="eth_img">
                <img src={require("../../../assets/image/ice.webp")} /> ICE
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/usdc.jpg")} /> USDC
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/usdt.jpg")} /> USDT
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/dai.png")} /> DAI
              </div>
              <div className="eth_img">
                <img src={require("../../../assets/image/frax.webp")} /> FRAX
              </div>
            </div>
            <div className="chose_token">
              <div className="token_name">Token Name</div>
              <div className="token_arrow">
                {" "}
                <img
                  src={require("../../../assets/image/arrow_down.png")}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="all_token scroll_track">
              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/bnb.png")} />
                    BNB
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/ADA.png")} />
                    ADA
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/ALPHA.png")} />
                    ALPHA
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/ANKR.png")} />
                    ANKR
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/ATM.png")} />
                    ATM
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/ATOM.png")} />
                    ATOM
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/BAKE.png")} />
                    BAKE
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/bLBT.png")} />
                    bLBT
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/usdt.png")} />
                    USDT
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={require("../../../assets/image/wbnb.png")} />
                    WBNB
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
