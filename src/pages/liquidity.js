import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';


export const Liquidity = () => {
    return (
        <>

            <div class="wrapper">
                {/* <!---==================Sidebar start====================---> */}
                <Header/>
              
                {/* <!---==================Sidebar end====================---> */}

                {/* <!---============Top menu Dashboard start==============---> */}
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
                                            <a class="nav-link" href="/">Swap</a>
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

                                        <li class="nav-item"><Link class="nav-link" to="/Launchpad" target="_blank">Launchpad</Link></li>

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
                                            <div class="container py_0 tab-pane active">
                                                <div class="exchange_tab">
                                                    <div class="exchange_wrap pt_5">
                                                        <div class="exchange_hd">
                                                            <ul class="nav nav-pills pool_tab" role="tablist">
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="swap">Swap</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" href="#">Limit</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link active" href="liquidity">Liquidity</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="exchange_tools">
                                                            <div class="tools_img">
                                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z" fill="#7CFF6B"></path></svg><span class="price_set"> 30 </span>
                                                            </div>
                                                            <div class="tools_img" onclick="openNav10()">
                                                                <i class="fa fa-cog"></i>
                                                            </div>
                                                            <div class="tools_img" onclick="openNav11()">
                                                                <i class="fa fa-clock-o"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="wallet_btn mr_set">
                                                        <a href="ETH"> <button class="btn button btn-success">Add Liquidity +</button></a>
                                                    </div>
                                                    <div class="">
                                                        <div class="exchange_hd my_5">
                                                            <b style={{"color":"#fff"}}>Your Liquidity</b>
                                                            <b><span style={{ "float": "right", "color": "rgb(116, 155, 216)" }}><i class="fa fa-question-circle"></i></span>  </b>

                                                        </div>

                                                        <span color="textDisabled" class="sc-giYglK dSrmWk">Connect a wallet to view your liquidity.</span>

                                                        <div>
                                                            <span color="#07162d" font-size="14px" class="sc-giYglK hhnuQi" style={{ "padding": "  0.5rem 0px" }}>Don't see a pool you joined? <a id="import-pool-link" class="links" href="find">Import it.</a></span><br />
                                                            <span color="#07162d" font-size="14px" class="sc-giYglK hhnuQi" style={{ "padding": "  0.5rem 0px" }}>Or, if you staked your LP tokens in a farm, unstake them to see them here.</span>
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
                    {/* <!-------exchange page end------>
			<!-------=========Liquidity page modal popup start=========---->
			<!-----modal popup 10 for connect to wallet start---> */}
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
            {/* <!------=======js start======------> */}
         
            {/* 

    <!----================================================================
   	====================All modal popup start=============================
   	================================================================----->
   	<!-----modal popup 9 for connect to wallet start--> */}
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
                <div class="overlay8-content">
                    <div class="swapbg8">
                        <div class="select_token">
                            <div class="select_input">
                                <input type="text" placeholder="Search name or paste address" class="eeRXNx" />
                            </div>
                        </div>
                        <div class="chose_token">
                            <div class="token_name">Token Name</div>
                            <div class="token_arrow">
                                <img src="assets/image/arrow_down.png" />
                            </div>
                        </div>
                        <div class="all_token scroll_track">
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
          

            {/* <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}

        </>
    )
}
