import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export const Imports = () => {
  return (
    <>
      <div class="wrapper">
        {/* <!---==================Sidebar start====================---> */}
        <Header/>
    
        {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
        <div class="body_content_wrap" id="myHeader">
          {/* <!----top navbar start--> */}
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid set_nav_width">
              <button type="button" id="sidebarCollapse" class="btn btn-primary custom_btn_set">
                <i class="fa fa-bars" style={{ "color": "#fff" }}></i>
              </button>
              <div class="top_navbar">
                <nav class="navbar navbar-expand-sm navbar-dark" style={{ "border-bottom": "unset" }}>
                  <a class="navbar-brand" href="/">
                    <img src="assets/image/logo.png" />
                  </a>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link class="nav-link" to="/">Swap</Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Pool</a>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/browse">Browse</Link>
                        <Link class="dropdown-item" to="/imports">Import</Link>
                        <Link class="dropdown-item" to="/migrate">Migrate</Link>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Trade</a>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/swap">Exchange</Link>
                        <Link class="dropdown-item" to="/liquidity">Liquidity</Link>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Game</a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="https://www.game.cstswap.io/" target="_blank">Game</a>
                        <a class="dropdown-item" href="https://www.game2.cstswap.io/" target="_blank">Game 2</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Farm</a>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/Farm">Your Farms</Link>
                        <Link class="dropdown-item" to="/AllFarm">All Farms</Link>
                      </div>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#" target="_blank">NFT</a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">NFT Marketplace</a>
                      <div class="dropdown-menu">
                        <Link class="dropdown-item" to="/explore" target="_blank">Explore</Link>
                        <Link class="dropdown-item" to="/openmarket" target="_blank">Open Market</Link>
                        <Link class="dropdown-item" to="/gameassets" target="_blank">Game Assets</Link>
                      </div>
                    </li>

                    <li class="nav-item"><Link class="nav-link" href="/Launchpad" target="_blank">Launchpad</Link></li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Contact</a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" target="_blank"><i class="fa fa-twitter"></i> Twitter</a>
                        <a class="dropdown-item" href="#" target="_blank"><i class="fa fa-instagram"></i> Instagram</a>
                        <a class="dropdown-item" href="#" target="_blank"><i class="fa fa-telegram"></i> Telegram</a>
                        <a class="dropdown-item" href="#" target="_blank"><i class="fa fa-medium"></i> Medium</a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!---=====top navbar end=======---> */}
              <button class="btn button btn-success d-inline-block ml-auto contact" onclick="openNav9()" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class='fas fa-wallet'></i>
                Connect wallet
              </button>


            </div>
          </nav>
          {/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
          <section>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 py_0 offset-md-3 heading"><br />
                  <div class="pools">
                    {/* <!-- Nav pills --> */}

                    {/* <!-- Tab panes --> */}
                    <div class="tab-content">
                      <div class="container">
                        <div class="row">

                          <div class="col-md-12">
                            <div class="go">
                              <a href="/"><i class="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
                            </div>
                            <h1 class="text-3xl">Import Pool</h1>
                            <div class="back">


                              <h3 class="heading1">Tip: Use this tool to find pairs that don't automatically appear in the interface</h3>
                            </div>


                            <div class="exchange_tab">

                              <div class="exch_bg">
                                <div class="exchange_wrap" style={{ "padding": "5px" }}>
                                  <div class="exchange_tools">
                                    <div class="bnb_btn bnb_position">
                                      <span class="swap_from">Swap From</span>
                                      <button onclick="openNav8()">
                                        <img src="assets/image/eth.jpg" />
                                        <span><b>ETH</b></span>
                                        <i class="fa fa-chevron-down"></i>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="exchange_hd ex_font width_fluid">
                                    <input type="number" class="input_set" placeholder="0.0" />
                                  </div>
                                </div>
                              </div>
                              <div class="exchange_arrow">
                                <i class="fa fa-sort"></i>
                                <div >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                              </div>
                              <div class="exch_bg mb-4">

                                <div class="exchange_wrap" style={{ "padding": "5px" }}>
                                  <div class="exchange_tools">
                                    <div class="bnb_btn bnb_position">
                                      <p class="swap_from">Swap To (est):</p>
                                      <button class="min_wth" onclick="openNav8()">
                                        <div class="bnbRotate"></div>
                                        <span class="selct_tkn" style={{ "position": "relative !important", "top": "13px !important", "left": "10px" }}>Select a token</span>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="exchange_hd ex_font width_fluid mt_14M">
                                    <input type="number" class="input_set" placeholder="0.0" />
                                  </div>
                                </div>
                              </div>

                              <div class="wallet_btn mr_set">
                                <button class="btn button btn-success" onclick="openNav9()">Connect to a Wallet</button>
                              </div>
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
          <footer class="footer_section">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-3">
                  <div class="footer_col1">
                    <img src="assets/image/logo.png" />
                    <p>Our community is building a comprehensive decentralized trading platform for the future of finance. Join us!</p>
                    <ul>
                      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i class="fab fa-discord"></i></a></li>
                      <li><a href="#"><i class="fab fa-medium"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="footer_col2">
                        <h2>Products</h2>
                        <ul>
                          <li><a href="#">Liquidity Pools</a></li>
                          <li><a href="#">Lending</a></li>
                          <li><a href="#">Launchpad</a></li>
                          <li><a href="#">Tool</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="footer_col2">
                        <h2>Help</h2>
                        <ul>
                          <li><a href="#">Ask on Discord</a></li>
                          <li><a href="#">Ask on Twitter</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="footer_col2">
                        <h2>Developers</h2>
                        <ul>
                          <li><a href="#">Github</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="footer_col2">
                        <h2>Protocol</h2>
                        <ul>
                          <li><a href="#">Apply for partnership</a></li>
                          <li><a href="#">Vesting</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div id="myNav10" class="overlay10 textcenter">
            <div class="setting_close">
              <span class="tokenset">Settings</span>
              <span onclick="closeNav10()">&times;</span>
            </div>
            <div class="bx_shadow"></div>
            <div class="overlay10-content">
              <div class="swapbg10">
                <div class="dead_line">
                  <p style={{ "color": "black" }}>
                    Slippage tolerance
                  </p>
                  <div class="seting_rate">
                    <div class="all_setting">
                      <div class="setting_button">
                        <button class="btn seting_btn_bg">0.1%</button>
                      </div>
                      <div class="setting_button">
                        <button class="btn seting_btn_bg jPlCZV">0.5%</button>
                      </div>
                      <div class="setting_button">
                        <button class="btn seting_btn_bg">1%</button>
                      </div>
                    </div>
                    <div class="setting_input">
                      <input class="eqxqaX" type="number" placeholder="0.5%" />
                    </div>
                  </div>
                </div>
                <div class="dead_line">
                  <p style={{ "color": "black" }}>
                    Transaction deadline
                  </p>
                  <div class="seting_rate">
                    <div class="setting_input set2">
                      <input class="eqxqaX" type="number" placeholder="0.5%" />
                      <div style={{ "color": "#fff" }}>Minutes</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
         
          {/* <!-----modal popup 10 for connect to wallet end--->
			<!-----modal popup 11 for connect to wallet start---> */}
          <div id="myNav11" class="overlay11 textcenter">
            <div class="setting_close">
              <span class="tokenset">Recent Transactions</span>
              <span onclick="closeNav11()">&times;</span>
            </div>
            <div class="bx_shadow"></div>
            <div class="overlay11-content">
              <div class="">
                <div class="dead_line font16">
                  <p>
                    Please connect your wallet to view your recent transactions
                  </p>
                  <div class="btn_close">
                    <button class="btn" onclick="closeNav11()">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          {/* <!-----modal popup 11 for connect to wallet end-->
			<!-------=========Liquidity page modal popup end=========---->
            <!-------exchange page start------>
            <!---============Body section end====================---> */}
        </div>
      </div>
      

      {/* <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}
      {/* <!-----modal popup 9 for connect to wallet start--> */}
      <div id="myNav9" class="overlay9 textcenter">
        <div class="setting_close">
          <span class="tokenset">Connect to a wallet</span>
          <span onclick="closeNav9()">&times;</span>
        </div>
        <div class="bx_shadow"></div>
        <div class="overlay9-content">
          <div class="swapbg9">
            <div class="connect_wallet">
              {/* <!----wallet box 1--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>Metamask</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/meta_mask.png" />
                </div>
              </button>
              {/* <!----wallet box 2--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>TrustWallet</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/trust_wallet.png" />
                </div>
              </button>
              {/* <!----wallet box 3--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>MathWallet</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/math_wallet.png" />
                </div>
              </button>
              {/* <!----wallet box 4--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>MathWallet</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/math_wallet.png" />
                </div>
              </button>
              {/* <!----wallet box 5--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>WalletConnect</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/connect_wallet.png" />
                </div>
              </button>
              {/* <!----wallet box 6--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>Binance Chain Wallet</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/binance_chain_wallet.png" />
                </div>
              </button>
              {/* <!----wallet box 7--> */}
              <button class="connect_metamast">
                <div class="wallet_name">
                  <h3>SafePal Wallet</h3>
                </div>
                <div class="wallet_name">
                  <img src="assets/image/safepal_wallet.png" />
                </div>
              </button>
              <div class="connect_info">
                <a href="#"><i class="fa fa-question"></i>Learn how to connect</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!-----modal popup 8 for connect to wallet end--> */}



      {/* <!-----select token modal popup 8 for connect to wallet start--> */}
      <div id="myNav8" class="overlay8 textcenter">
        <div class="setting_close">
          <span class="tokenset font_normal">Select a token <i class="fa fa-question"></i></span>
          <span onclick="closeNav8()">&times;</span>
        </div>
        <div class="overlay8-content text-left" >
          <div class="swapbg8">
            <div class="select_token">
              <div class="select_input">
                <input type="text" placeholder="Search name or paste address" class="eeRXNx" />
              </div>
            </div>
            <div class="">
              <div class="para">
                <p>Common bases</p>

              </div>
              <div class="eth">
                <div class="eth_img">
                  <img src="assets/image/eth1.jpg" /> ETH
                </div>
                <div class="eth_img">
                  <img src="assets/image/sushi.jpg" /> SUSHI
                </div>
                <div class="eth_img">
                  <img src="assets/image/wbtr.jpg" /> WBTR
                </div>
                <div class="eth_img">
                  <img src="assets/image/mim.jpg" />  MIM
                </div>
                <div class="eth_img">
                  <img src="assets/image/spell.webp" />  SPELL
                </div>


              </div>

              <div class="eth">
                <div class="eth_img">
                  <img src="assets/image/ice.webp" /> ICE
                </div>
                <div class="eth_img">
                  <img src="assets/image/usdc.jpg" /> USDC
                </div>
                <div class="eth_img">
                  <img src="assets/image/usdt.jpg" /> USDT
                </div>
                <div class="eth_img">
                  <img src="assets/image/dai.png" />  DAI
                </div>
                <div class="eth_img">
                  <img src="assets/image/frax.webp" />  FRAX
                </div>


              </div>


              <div class="chose_token">

                <div class="token_name">Token Name</div>
                <div class="token_arrow"> <img
                  src="assets/image/arrow_down.png" /> </div> </div> <div
                    class="all_token scroll_track">
                {/* <!----token list 1----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/bnb.png" />BNB</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 2----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/ADA.png" />ADA</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 3----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/ALPHA.png" />ALPHA</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 4----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/ANKR.png" />ANKR</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 5----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/ATM.png" />ATM</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 6----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/ATOM.png" />ATOM</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 7----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/BAKE.png" />BAKE</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 8----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/bLBT.png" />bLBT</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 9----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/usdt.png" />USDT</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
                {/* <!----token list 10----> */}
                <div class="token_list">
                  <div class="token_icon">
                    <h2><img src="assets/image/wbnb.png" />WBNB</h2>
                  </div>
                  <div class="token_list"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      {/* 
    <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}
    </>
  )
}
