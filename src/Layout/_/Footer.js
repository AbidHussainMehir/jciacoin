export function Footer() {
  return (
    <footer className="footer_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="footer_col1">
              <img src={require("../../assets/image/logo.png")} />
              <p>
                Our community is building a comprehensive decentralized trading
                platform for the future of finance. Join us!
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <div className="footer_col2">
                  <h2>Products</h2>
                  <ul>
                    <li>
                      <a href="#">Liquidity Pools</a>
                    </li>
                    <li>
                      <a href="#">Lending</a>
                    </li>
                    <li>
                      <a href="#">Launchpad</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_col2">
                  <h2>Help</h2>
                  <ul>
                    <li>
                      <a href="#">Ask on Discord</a>
                    </li>
                    <li>
                      <a href="#">Ask on Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_col2">
                  <h2>Developers</h2>
                  <ul>
                    <li>
                      <a href="#">Github</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer_col2">
                  <h2>Protocol</h2>
                  <ul>
                    <li>
                      <a href="#">Apply for partnership</a>
                    </li>
                    <li>
                      <a href="#">Vesting</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
