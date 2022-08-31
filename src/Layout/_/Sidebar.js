import LogoImage from '../../assets/image/logo.png'
export function Sidebar() {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <a href="/">
          <img src={LogoImage} />
        </a>
      </div>
      <ul className="list-unstyled components fa_icon_Set">
        <li className="active">
          <a href="/">
            <i
              className="fas fa-home"
              style={{ color: "white" }}
              aria-hidden="true"
            ></i>{" "}
            Home{" "}
          </a>
        </li>
        <li>
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            Pool
          </a>
          <i className="fa-solid fa-check-to-slot"></i>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="/"> Browse</a>
            </li>
            <li>
              <a href="/">Import</a>
            </li>
            <li>
              <a href="/">Migrate</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#tradeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            Trade
          </a>
          <ul className="collapse list-unstyled" id="tradeSubmenu">
            <li>
              <a href="/swap"> Exchange</a>
            </li>
            <li>
              <a href="/liquidity">Liquidity</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#gameSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            Game
          </a>
          <ul className="collapse list-unstyled" id="gameSubmenu">
            <li>
              <a href="#">
                <i
                  className="fas fa-gamepad"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>{" "}
                Game
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fas fa-gamepad"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Game 2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#FarmsSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            Farms
          </a>
          <ul className="collapse list-unstyled" id="FarmsSubmenu">
            <li>
              <a href="/"> Your Farms</a>
            </li>
            <li>
              <a href="/">All Farms</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i
              className="fas fa-gamepad"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>
            NFT
          </a>
        </li>

        <li>
          <a
            href="#nftSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            NFT Marketplace
          </a>
          <ul className="collapse list-unstyled" id="nftSubmenu">
            <li>
              <a href="/">
                <i
                  className="fas fa-gamepad"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>{" "}
                Explore
              </a>
            </li>
            <li>
              <a href="/">
                <i
                  className="fas fa-gamepad"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Open Market
              </a>
            </li>

            <li>
              <a href="/">
                <i
                  className="fas fa-gamepad"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Game Assets
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">
            <i
              className="fas fa-gamepad"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>
            Launchpad
          </a>
        </li>
        <li>
          <a
            href="#contactSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            {" "}
            <i
              className="fas fa-exchange-alt"
              style={{ color: "#fff" }}
              aria-hidden="true"
            ></i>{" "}
            Contact
          </a>
          <ul className="collapse list-unstyled" id="contactSubmenu">
            <li>
              <a href="#">
                <i
                  className="fas fa-twitter"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fas fa-instagram"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Instagram
              </a>
            </li>

            <li>
              <a href="#">
                <i
                  className="fas fa-telegram"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Telegram
              </a>
            </li>
            <li>
              <a href="#">
                <i
                  className="fas fa-medium"
                  style={{ color: "#fff" }}
                  aria-hidden="true"
                ></i>
                Medium
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
