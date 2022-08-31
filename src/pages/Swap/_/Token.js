import EthImage from '../../../assets/image/eth1.jpg'
import SushiImage from '../../../assets/image/sushi.jpg'
import WbtrImage from '../../../assets/image/wbtr.jpg'
import MimImage from '../../../assets/image/mim.jpg'
import SpellImage from '../../../assets/image/spell.webp'
import IceImage from '../../../assets/image/ice.webp'
import UsdcImage from '../../../assets/image/usdc.jpg'
import UsdtImage from '../../../assets/image/usdt.jpg'
import DaiImage from '../../../assets/image/dai.png'
import FraxImage from '../../../assets/image/frax.webp'
import ArrowImage from '../../../assets/image/arrow_down.png'
import BnbImage from '../../../assets/image/bnb.png'
import AdaImage from '../../../assets/image/ADA.png'
import AlphaImage from '../../../assets/image/ALPHA.png'
import AnkrImage from '../../../assets/image/ANKR.png'
import AtmImage from '../../../assets/image/ATM.png'
import AtomImage from '../../../assets/image/ATOM.png'
import BakeImage from '../../../assets/image/BAKE.png'
import BlbtImage from '../../../assets/image/bLBT.png'
import WbnbImage from '../../../assets/image/wbnb.png'

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
                <img src={EthImage} /> ETH
              </div>
              <div className="eth_img">
                <img src={SushiImage} /> SUSHI
              </div>
              <div className="eth_img">
                <img src={WbtrImage} /> WBTR
              </div>
              <div className="eth_img">
                <img src={MimImage} /> MIM
              </div>
              <div className="eth_img">
                <img src={SpellImage} /> SPELL
              </div>
            </div>
            <div className="eth">
              <div className="eth_img">
                <img src={IceImage} /> ICE
              </div>
              <div className="eth_img">
                <img src={UsdcImage} /> USDC
              </div>
              <div className="eth_img">
                <img src={UsdtImage} /> USDT
              </div>
              <div className="eth_img">
                <img src={DaiImage} /> DAI
              </div>
              <div className="eth_img">
                <img src={FraxImage} /> FRAX
              </div>
            </div>
            <div className="chose_token">
              <div className="token_name">Token Name</div>
              <div className="token_arrow">
                {" "}
                <img
                  src={ArrowImage}
                />{" "}
              </div>{" "}
            </div>{" "}
            <div className="all_token scroll_track">
              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={BnbImage} />
                    BNB
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={AdaImage} />
                    ADA
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={AlphaImage} />
                    ALPHA
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={AnkrImage} />
                    ANKR
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={AtmImage} />
                    ATM
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={AtomImage} />
                    ATOM
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={BakeImage} />
                    BAKE
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={BlbtImage} />
                    bLBT
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={UsdtImage} />
                    USDT
                  </h2>
                </div>
                <div className="token_list"></div>
              </div>

              <div className="token_list">
                <div className="token_icon">
                  <h2>
                    <img src={WbnbImage} />
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
