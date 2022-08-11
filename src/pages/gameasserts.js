import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const Gameasserts = () => {
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
                        <i class="fa fa-bars" style={{"color":"#fff"}}></i>
                    </button>
                   	<div class="top_navbar">
					
					    <nav class="navbar navbar-expand-sm navbar-dark" style={{"border-bottom": "unset"}}>
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
					                    <Link class="dropdown-item" to="/import">Import</Link>
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
                    <button class="btn button btn-success d-inline-block ml-auto contact"  onClick={() => window.openNav9()} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class='fas fa-wallet'></i>
                        Connect wallet
                    </button> 

                    
                </div>
            </nav>
            {/* <!---============Body section start==================--->
            <!-------exchange page start------> */}
             <section>
			    <div class="container">
			        <div class="row">
			        	<div class="col-md-12 py_0  heading"><br/>
			        		 <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container py_0 tab-pane active">
			                            <div class="exchange_tab">
			                                <div class="exchange_wrap pt_5">
			                                    <div class="exchange_hd">
			                                        <h1>Game Assets</h1>
			                                        <p>A market made for NFT, where everything is special 😋</p>
			                                       
			                                    </div>
			                                    <div class="exchange_tools">
			                                      
			                                         <a href="" class="btn1">
			                                        	Create 
			                                        </a> 

			                                        <a href=""class="btn1">
			                                        	My Artworks 
			                                        </a>
			                                    </div>
			                                </div>
			                                <div class="marge">
			                                 <h5>789 <br/> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
			                                 <h5>20,362 USDT <br/> volume traded</h5>
			                                </div>
			                           </div>





			                            </div>
			                        </div>
			                          
			                    </div>
			                </div>
			        </div>
			       
			        <div class="row">
			            <div class="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div class="main_one">
						     <div class="main">
						  	  <div class="">
						  		<div class="sc-eLdqWK jCwswk"></div>
						  		<div class="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div class="">
						  		<p>On Auction</p>
						  	    </div>
						      </div>

						      <img src="assets/image/1.jpeg" width="100%"/>
						      <div class="main">
						  	    <div class="">
						  		<p class="margin">#78700</p>
						  	    </div>
						  	    <div class="">
						  		<p class="margin">1500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>

			              <div class="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div class="main_one">
						     <div class="main">
						  	  <div class="">
						  		<div class="sc-eLdqWK jCwswk"></div>
						  		<div class="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div class="">
						  		<p>On Sale</p>
						  	    </div>
						      </div>

						      <img src="assets/image/1.jpeg" width="100%"/>
						      <div class="main">
						  	    <div class="">
						  		<p class="margin">GP Token</p>
						  	    </div>
						  	    <div class="">
						  		<p class="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>

			              <div class="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div class="main_one">
						     <div class="main">
						  	  <div class="">
						  		<div class="sc-eLdqWK jCwswk"></div>
						  		<div class="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div class="">
						  		<p>On Auction</p>
						  	    </div>
						      </div>

						      <img src="assets/image/1.jpeg" width="100%"/>
						      <div class="main">
						  	    <div class="">
						  		<p class="margin">GP Token</p>
						  	    </div>
						  	    <div class="">
						  		<p class="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>


			              <div class="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div class="main_one">
						     <div class="main">
						  	  <div class="">
						  		<div class="sc-eLdqWK jCwswk"></div>
						  		<div class="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div class="">
						  		<p>On Sale</p>
						  	    </div>
						      </div>

						      <img src="assets/image/1.jpeg" width="100%"/>
						      <div class="main">
						  	    <div class="">
						  		<p class="margin">GP Token</p>
						  	    </div>
						  	    <div class="">
						  		<p class="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div> 
			        </div>

			        
			    </div>
			</section>
			<footer class="footer_section">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-3">
							<div class="footer_col1">
								<img src="assets/image/logo.png"/>
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
			        <span  onClick={() => window.closeNav10()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay10-content">
			        <div class="swapbg10">
			            <div class="dead_line">
			                <p style={{"color":"black"}}>
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
			                <p style={{"color":"black"}}>
			                    Transaction deadline
			                </p>
			                <div class="seting_rate">
			                    <div class="setting_input set2">
			                        <input class="eqxqaX" type="number" placeholder="0.5%" />
			                        <div style={{"color":"#fff"}}>Minutes</div>
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
			        <span  onClick={() => window.closeNav11()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay11-content">
			        <div class="">
			            <div class="dead_line font16">
			                <p>
			                    Please connect your wallet to view your recent transactions
			                </p>
			                <div class="btn_close">
			                    <button class="btn"  onClick={() => window.closeNav11()}>Close</button>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		
			{/*<!-----modal popup 11 for connect to wallet end-->
			<!-------=========Liquidity page modal popup end=========---->
            <!-------exchange page start------>
            <!---============Body section end====================---> */}
        </div>
	</div>
	

    {/* <!----================================================================
   	====================All modal popup start=============================
   	================================================================----->
   	<!-----modal popup 9 for connect to wallet start--> */}
    <div id="myNav9" class="overlay9 textcenter">
        <div class="setting_close">
            <span class="tokenset">Connect to a wallet</span>
            <span  onClick={() => window.closeNav9()}>&times;</span>
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
            <span  onClick={() => window.closeNav8()}>&times;</span>
        </div>
        <div class="overlay8-content">
            <div class="swapbg8">
                <div class="select_token">
                    <div class="select_input">
                        <input type="text" placeholder="Search name or paste address"  class="eeRXNx"/>
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
      </>
  )
}
