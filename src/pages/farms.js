import React from 'react'

export const Farms = () => {
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
                            <a href="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i> Game</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Game 2</a>
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
                    <a href="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>NFT</a>
                </li> 

                <li>
                    <a href="#nftSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> NFT Marketplace</a>
                    <ul class="collapse list-unstyled" id="nftSubmenu">
                        <li>
                            <a href="explore.js"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i> Explore</a>
                        </li>
                        <li>
                            <a href="openmarket.js"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Open Market</a>
                        </li> 

                         <li>
                            <a href="gameassets.js"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Game Assets</a>
                        </li> 
                         
                    </ul>
                </li> 
                 <li>
                    <a href="Launchpad.js"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Launchpad</a>
                </li> 
                 <li>
                    <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt" style={{"color":"#fff"}} aria-hidden="true"></i> Contact</a>
                    <ul class="collapse list-unstyled" id="contactSubmenu">
                        <li>
                            <a href="#"><i class="fas fa-twitter" style={{"color":"#fff"}} aria-hidden="true"></i> Twitter</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-instagram" style={{"color":"#fff"}} aria-hidden="true"></i>Instagram</a>
                        </li> 

                         <li>
                            <a href="#"><i class="fas fa-telegram" style={{"color":"#fff"}} aria-hidden="true"></i>Telegram</a>
                        </li> 
                        <li>
                            <a href="#"><i class="fas fa-medium" style={{"color":"#fff"}} aria-hidden="true"></i>Medium</a>
                        </li> 
                         
                    </ul>
                </li> 

            </ul>
        </nav>
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
            {/* <!---============Top menu Dashboard end==============---> */}
            <section class="maindsb">
            	<div class="maininner">
                	<div class="container-fluid"> 
                        <div class="row">
                            <div class="col-md-8 offset-md-2" align="center"> <br/><h1>Farm Anytime, Get Rewards Instantly.</h1>
                                <p class="ule_imgset">It's a good day to farm some CST.
                                    <img src="assets/image/logo.png" width="30px" height="30px"/></p></div>
                           	<div class="col-md-6 offset-md-3">
                            	<div class="farming_content">
                                	 <div class="farm_serv_box">
		                                <div class="farm_icons">
		                                    <div class="farm_coins">
		                                        <img src="assets/image/logo.png" class="farm_log_set" alt="logo"/>
		                                        
		                                    </div>
		                                    <div class="farm_heading">
		                                        <h2>CST</h2>

		                                    </div>
		                                    <div class="farm_capital">
		                                        <div class="farm_total">
		                                            <span>Coin</span>
		                                        </div>
		                                    </div>
		                                </div>
		                                <div class=" farm_icons farm_new_item">
		                                	<div class="farm_heading">
		                                		<div class="farm_flex_set">
		                                			<div class="farm_logo ar_drp">
		                                				<span>cstswap</span>
		                                			</div>
		                                			<div class="farm_logo farm_logo_group ule_img_height ule_animation"></div>
		                                		</div>
		                                	</div>
		                                </div>
		                                <div class="farm_bonus">
		                                    <div class="staking_price">
		                                        <div class="farm_price d_flex">
		                                            <span class="hrvst_font" id="pendindmonoRewards">0</span>
		                                            <button id="btnmonoharvest" class="harvest btn button">Harvest</button>
		                                        </div>
		                                    </div>
		                                    <div class="staking_price farming_rewards">
		                                        <h2>======= MONO Rewards =======</h2>                                 
	                                        </div>
	                                        <div class="farm_price d_flex">
	                                            <span>30 Days : Return % 7%</span>
	                                            <span class="set_checkbox"><input type="radio" name="checkbox" class="checkbox" value="90"/></span>
	                                        </div>
	                                        <div class="farm_price d_flex">
	                                            <span>60 Days : Return % 15%</span>
	                                            <span class="set_checkbox"><input type="radio" name="checkbox" class="checkbox" value="90"/></span>
	                                        </div>
	                                        <div class="farm_price d_flex">
	                                            <span>90 Days : Return % 20%</span>
	                                            <span class="set_checkbox"><input type="radio" name="checkbox" class="checkbox" value="180"/></span>
	                                        </div>
	                                        <div class="farm_price d_flex">
	                                            <span>180 Days : Return % 40%</span>
	                                            <span class="set_checkbox"><input type="radio" name="checkbox" class="checkbox" value="360"/></span>
	                                        </div>
	                                        <div class="farm_price d_flex">
	                                            <span>365 Days : Return % 100%</span>
	                                            <span class="set_checkbox"><input type="radio" name="checkbox" class="checkbox" value="360"/></span>
	                                        </div>
	                                    </div>
	                                    <div class="farm_usd_set">
		                                    <p>Get CST - CST</p>
		                                </div>
		                                <div class="farm_usd_set farm_input"/>
		                                	<div class="row">
		                                		<div class="col-12">
		                                			<input id="Enter_amount" placeholder="Enter COIN"/>
		                                		</div>
		                                		<div class="col-12">
		                                			<input id="Enter_lockableDays" placeholder="0 days" disabled=""/>
		                                		</div>
		                                	</div>
		                                </div>
		                                <div class="farm_submit_btn">
		                                    <button type="button" class="btn button btn-primary" id="btnmono">Approve</button>
		                                </div>
	                                </div>  
                            	</div>
                            	 <div class="farm_history">
	                            	<div class="hist_hd"><h2 style={{"color":"#fff"}}>Farm History</h2></div>
	                            	<div class="table-responsive">
	                            		<table class="table table-borderless">
		                            		<thead>
		                            			<tr>
		                            				<th>Wallet Address</th>
			                            			<th>Amount</th>
			                            			<th>Day</th>
			                            			<th>Txn</th>
			                            			<th>Time Span</th>
		                            			</tr>
		                            		</thead>
		                            		<tbody>
		                            			<tr>
		                            				<td>xyzaa...69139</td>
		                            				<td>1000</td>
		                            				<td>30</td>
		                            				<td>xyzaa...a262d</td>
		                            				<td>1639586328</td>
		                            			</tr>
		                            			<tr>
		                            				<td>xyzaa...69139</td>
		                            				<td>1000</td>
		                            				<td>30</td>
		                            				<td>xyzaa...a262d</td>
		                            				<td>1639586328</td>
		                            			</tr>
		                            		</tbody>
		                            	</table>
	                            	</div>
	                            </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            
            {/* <!---============Body section end==================---> */}
        
	</div>
	{/* <!------=======js start======------> */}
	<script src="assets/js/popper.min.js.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    {/* <!---js end--> */}
    <script type="text/javascript">
        (document).ready(function () {
            ('#sidebarCollapse').on('click', function () {
                ('#sidebar').toggleClass('active');
            })
        });
    </script>

{/* 

    <!----================================================================
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
    <script>
        function openNav9() {
            document.getElementById("myNav9").style.display = "block"
        }

        function closeNav9() {
            document.getElementById("myNav9").style.display = "none"
        }
    </script>

     	<script>
        (function () {
            ("#datepicker").datepicker()
        });
    </script>
    {/* <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
        }
    </script> */}
{/* 
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}
    </>
  )
}
