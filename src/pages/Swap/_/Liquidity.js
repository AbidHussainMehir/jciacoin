export function Liquidity() {
  function openNav10() {
    document.getElementById("myNav10").style.display = "block";
  }
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 py_0 offset-md-3 heading">
            <br />
            <div className="pools">
              <div className="tab-content">
                <div className="container py_0 tab-pane active">
                  <div className="exchange_tab">
                    <div className="exchange_wrap pt_5">
                      <div className="exchange_hd">
                        <ul className="nav nav-pills pool_tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link" href="/swap">
                              Swap
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link active" href="/liquidity">
                              Liquidity
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="exchange_tools">
                        <div className="tools_img">
                          <svg
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z"
                              fill="#7CFF6B"
                            ></path>
                          </svg>
                          <span className="price_set"></span>
                        </div>
                        <div className="tools_img" onClick={openNav10}>
                          <i className="fa fa-cog"></i>
                        </div>
                      </div>
                    </div>
                    <div className="wallet_btn mr_set">
                      <a href="ETH.html">
                        {" "}
                        <button className="btn button btn-success">
                          Add Liquidity +
                        </button>
                      </a>
                    </div>
                    <div className="">
                      <div className="exchange_hd my_5">
                        <b style={{ color: "#fff" }}>Your Liquidity</b>
                        <b>
                          <span
                            style={{
                              float: "right",
                              color: "rgb(116, 155, 216)",
                            }}
                          >
                            <i className="fa fa-question-circle"></i>
                          </span>{" "}
                        </b>
                      </div>

                      <span color="textDisabled" className="sc-giYglK dSrmWk">
                        Connect a wallet to view your liquidity.
                      </span>

                      <div>
                        <span
                          color="#07162d"
                          font-size="14px"
                          className="sc-giYglK hhnuQi"
                          style={{ padding: "0.5rem 0px" }}
                        >
                          Don't see a pool you joined?{" "}
                          <a
                            id="import-pool-link"
                            className="links"
                            href="find.html"
                          >
                            Import it.
                          </a>
                        </span>
                        <br />
                        <span
                          color="#07162d"
                          font-size="14px"
                          className="sc-giYglK hhnuQi"
                          style={{ padding: "0.5rem 0px" }}
                        >
                          Or, if you staked your LP tokens in a farm, unstake
                          them to see them here.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
