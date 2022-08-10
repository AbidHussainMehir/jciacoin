import React from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export const Farms = () => {
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
   
    </>
  )
}
