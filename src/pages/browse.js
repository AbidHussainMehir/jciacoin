import React from 'react'

export const Browse = () => {
  return (
    <>
        
	<div class="wrapper">

		{/* <!---==================Sidebar start====================---> */}
        <nav id="sidebar">
            <div class="sidebar-header">
                <a href="home.js">
                    <img src="assets/image/logo.png" />
                </a>
            </div>
            <ul class="list-unstyled components fa_icon_Set">
                <li class="active">
                    <a href="home.js"><i class="fas fa-home" style={{"color":"#fff"}} aria-hidden="true"></i> Home </a>
                </li>
                 <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Pool</a><i class="fa-solid fa-check-to-slot"></i>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="browse.js"> Browse</a>
                        </li>
                        <li>
                            <a href="import.js">Import</a>
                        </li> 
                        <li>
                            <a href="migrate.js">Migrate</a>
                        </li> 
                    </ul>
                </li> 
                <li>
                    <a href="#tradeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Trade</a>
                    <ul class="collapse list-unstyled" id="tradeSubmenu">
                        <li>
                            <a href="swap.js"> Exchange</a>
                        </li>
                        <li>
                            <a href="liquidity.js">Liquidity</a>
                        </li> 
                    </ul>
                </li> 
                <li>
                    <a href="#gameSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Game</a>
                    <ul class="collapse list-unstyled" id="gameSubmenu">
                        <li>
                            <a href="#"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i> Game</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i>Game 2</a>
                        </li> 
                    </ul>
                </li>
                <li>
                    <a href="#FarmsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Farms</a>
                    <ul class="collapse list-unstyled" id="FarmsSubmenu">
                        <li>
                            <a href="Farm.js"> Your Farms</a>
                        </li>
                        <li>
                            <a href="Allfarm.js">All Farms</a>
                        </li> 
                    </ul>
                </li>  
                <li>
                    <a href="farms.js"><i class="fas fa-file"style={{"color":"#fff"}} aria-hidden="true"></i>Farms</a>
                </li> 
                <li>
                    <a href="#"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i>NFT</a>
                </li> 

                <li>
                    <a href="#nftSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> NFT Marketplace</a>
                    <ul class="collapse list-unstyled" id="nftSubmenu">
                        <li>
                            <a href="explore.js"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i> Explore</a>
                        </li>
                        <li>
                            <a href="openmarket.js"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i>Open Market</a>
                        </li> 

                         <li>
                            <a href="gameassets.js"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i>Game Assets</a>
                        </li> 
                         
                    </ul>
                </li> 
                 <li>
                    <a href="Launchpad.js"><i class="fas fa-gamepad"style={{"color":"#fff"}} aria-hidden="true"></i>Launchpad</a>
                </li> 
                 <li>
                    <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Contact</a>
                    <ul class="collapse list-unstyled" id="contactSubmenu">
                        <li>
                            <a href="#"><i class="fas fa-twitter"style={{"color":"#fff"}} aria-hidden="true"></i> Twitter</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-instagram"style={{"color":"#fff"}} aria-hidden="true"></i>Instagram</a>
                        </li> 

                         <li>
                            <a href="#"><i class="fas fa-telegram"style={{"color":"#fff"}} aria-hidden="true"></i>Telegram</a>
                        </li> 
                        <li>
                            <a href="#"><i class="fas fa-medium"style={{"color":"#fff"}} aria-hidden="true"></i>Medium</a>
                        </li> 
                         
                    </ul>
                </li> 

            </ul>
        </nav>
        {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
        <div class="body_content_wrap" id="myHeader">
            {/* <!----top navbar start--> */}
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid set_nav_width">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary custom_btn_set">
                        <i class="fa fa-bars" style={{"color":"#fff"}}></i>
                    </button>
                   	<div class="top_navbar">
					    <nav class="navbar navbar-expand-sm navbar-dark" style={{"border-bottom": "unset"}}>
					        <a class="navbar-brand" href="home.js">
					        	<img src="assets/image/logo.png" />
					        </a>
					        <ul class="navbar-nav">
					            <li class="nav-item">
					                <a class="nav-link" href="home.js">Swap</a>
					            </li>
					            <li class="nav-item dropdown">
					                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Pool</a>
					                <div class="dropdown-menu">
					                    <a class="dropdown-item" href="browse.js">Browse</a>
					                    <a class="dropdown-item" href="import.js">Import</a>
					                     <a class="dropdown-item" href="migrate.js">Migrate</a>
					                </div>
					            </li>
					            <li class="nav-item dropdown">
					                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Trade</a>
					                <div class="dropdown-menu">
					                    <a class="dropdown-item" href="swap.js">Exchange</a>
					                    <a class="dropdown-item" href="liquidity.js">Liquidity</a>
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
					                    <a class="dropdown-item" href="Farm.js">Your Farms</a>
					                    <a class="dropdown-item" href="AllFarm.js">All Farms</a>
					                </div>
					            </li>
					            <li class="nav-item"><a class="nav-link" href="#" target="_blank">NFT</a></li>
					            <li class="nav-item dropdown">
					                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">NFT Marketplace</a>
					                <div class="dropdown-menu">
					                    <a class="dropdown-item" href="explore.js" target="_blank">Explore</a>
					                    <a class="dropdown-item" href="openmarket.js" target="_blank">Open Market</a>
					                     <a class="dropdown-item" href="gameassets.js" target="_blank">Game Assets</a>
					                </div>
					            </li>

					             <li class="nav-item"><a class="nav-link" href="Launchpad.js" target="_blank">Launchpad</a></li>

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
			        <div class="row" >
			        	<div class="col-md-6 py_0 offset-md-3 heading"><br/>
			        		 <div class="pools">
			                    {/* <!-- Nav pills -->
			                    
			                    <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container">
			                            <div class="row">
			                           
			                            	<div class="col-md-12">
			                            		<div class="go">
			                            		<a href="home.js"><i class="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
			                            	    </div>
			                            	    <h1 class="text-3xl">My Liquidity Positions</h1>
			                            	    <div class="back">

			                            	    <h3 class="heading">Liquidity Provider Rewards</h3>
			                            	    <h3 class="heading1">Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity</h3>
			                            	    </div>
			                            	    
			                            	
			                                    <button class=" btn-success1" onclick="openNav9()">Connect to a Wallet</button>

			                                

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
			        <span onclick="closeNav10()">&times;</span>
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
			<script>
			    function openNav10() {
			        document.getElementById("myNav10").style.display = "block"
			    }

			    function closeNav10() {
			        document.getElementById("myNav10").style.display = "none"
			    }
			</script>
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
			<script>
			    function openNav11() {
			        document.getElementById("myNav11").style.display = "block"
			    }

			    function closeNav11() {
			        document.getElementById("myNav11").style.display = "none"
			    }
			</script>
			{/* <!-----modal popup 11 for connect to wallet end-->
			<!-------=========Liquidity page modal popup end=========---->
            <!-------exchange page start------>
            <!---============Body section end====================---> */}
        </div>
	</div>
	{/* <!------=======js start======------> */}
	<script src="assets/js/popper.min.js.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    {/* <!---js end--> */}
    <script type="text/javascript">
        (document).ready(function () {
            ('#sidebarCollapse').on('click', function () {
                ('#sidebar').toggleClass('active')
            })
        });
    </script>

	{/* <script type="text/javascript">
	function googleTranslateElementInit() {
	  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element')
	}
	</script> */}
	<script src="assets/js/element.js"></script>
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
    <script>
        function openNav9() {
            document.getElementById("myNav9").style.display = "block"
        }

        function closeNav9() {
            document.getElementById("myNav9").style.display = "none"
        }
    </script>
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
    <script>
        function openNav8() {
            document.getElementById("myNav8").style.display = "block"
        }

        function closeNav8() {
            document.getElementById("myNav8").style.display = "none"
        }
    </script>

    {/* <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}


    </>
  )
}
