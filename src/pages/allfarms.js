import React from 'react'
import { DropDown, FarmPair, Footer, Header, Nav, Tokens, Wallets } from '../components'


export const AllFarms = () => {
	return (
		<>

			<div className="wrapper">
				{/* <!---==================Sidebar start====================---> */}
				<Header />

				{/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
				<div className="body_content_wrap" id="myHeader">
					{/* <!----top navbar start--> */}
					<Nav />

					{/* <!---============Body section start==================--->
            <!-------exchange page start------>  */}
					<section >
						<div className="" style={{ "background-image": "url(assets/image/bubble-pattern.png) !important" }}>

							<div className="container-fluid set_nav_width">
								<div className="row">
									<div className="col-md-12 py_0 heading"><br />
										<div className="pools">
											{/* <!-- Nav pills --> */}

											{/* <!-- Tab panes --> */}

											<FarmPair/>
											{/* <div className="tab-content">
												<div className="container-fluid set_nav_width">
													<div className="row">
														<div className="col-md-12">
															<div className="flex">
																<div className="top_pading">
																	<h1 className="farm">Farm Menu</h1>
																	<p className="farm1">Earn fees and rewards by depositing and staking your tokens to the platform.</p>
																</div>
																<div className="bottom">
																	<button className="btn-success1">
																		Apply for Farm Pairs
																	</button>
																</div>
															</div>
														</div>


													</div>
												</div>

											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="input_section">

							<div className="container-fluid set_nav_width">
								<div className="row">
									<div className="col-md-10">
										<div className="farm_usd_set farm_input1">
											<div className="icon_search">
												<i className="fa fa-search"></i>
											</div>
											<input id="Enter_amount" className="input_search" placeholder="Search by token or pair" />
										</div>
									</div>
									{/* Dropdown list of farms */}
									<DropDown />

 
									{/* <div className="col-md-2">
			  	    	
			  	    	 <div className="dropdown">
						    <button className="btn2 dropdown-toggle" type="button" data-toggle="dropdown">Your Farms
						    </button>
						    <ul className="dropdown-menu">
						      <li><a href="#">All Farms</a></li>
						      <li><a href="#">Kashi Farms</a></li>
						      <li><a href="#">Wireswap Farms</a></li>
						    </ul>
						  </div>													
			  	    </div> */}

								</div>
								<div className="row">
									<div className="col-md-12">
										<div className="farm_history">

											<div className="table-responsive">
												<table className="table table-borderless">
													<thead>
														<tr className="line">
															<th className="head">Pool</th>
															<th className="head">TVL <i className="fa fa-angle-down" /></th>
															<th className="head">Rewards</th>
															<th className="head">APR</th>

														</tr>
													</thead>
													<tbody>
														<tr className="line">
															<td>
																<div className="main_div">
																	<div className="img_set">
																		<img alt='' className="imgagess" src="assets/image/bnb.png" /><img alt='' className="imgagess1" src="assets/image/ADA.png" />
																	</div>
																	<div className="">
																		<h1 className="icon_logo">

																			BNB
																			/
																			ADA
																		</h1>
																		<p className="icon_logo1">
																			WireSwap Farm
																		</p>
																	</div>
																</div>

															</td>

															<td className="top_paddding">$93,495,969</td>
															<td><span className="top_paddding1">2574 </span><img alt='' className="img_small" src="assets/image/pin.jpg" /></td>

															<td className="icon_logo">8.37%  <i className="fa fa-question-circle" aria-hidden="true"></i>
																<p className="annu">
																	annualized
																</p>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<footer className="footer_section">
						<Footer />
					</footer>
					{/* <!-------exchange page end------> */}

					{/* <!-------=========Liquidity page modal popup start=========----> */}
					{/* <!-----modal popup 10 for connect to wallet start---> */}
					<div id="myNav10" className="overlay11 textcenter" style={{ "display": "none" }}>

						<div className="pools">
							<div className="tab-content">
								<div className="container py_0 tab-pane active">
									<div className="exchange_tab">
										<div className="setting_close">
											<span className="tokenset1">Manage liquidity <i className="fa fa-question-circle myDIV" aria-hidden="true"></i></span>
											<span onClick={() => window.openNav10()}>&times;</span>
											<div className="hide">I am shown when someone hovers over the div above.</div>

										</div>
										<div className="exchange_wrap pt_5">
											<div className="exchange_hd">
												<a href="" className="liq">
													Liquidity
												</a>
												<a href="" className="liq">
													Staking
												</a>
												<a href="" className="liq">
													Rewards
												</a>
											</div>

										</div>
										<div className="exch_bg">
											<div className="main_liq">
												<div className="">
													<span className="tokenset1">Add liquidity </span>
												</div>
												<div className="">
													<label className="switch">
														<input type="checkbox" checked />
														<span className="slider round"></span>
													</label>
													<span className="tools_img" onClick={() => window.openNav20()}>
														<i className="fa fa-cog"></i>
													</span>
												</div>
											</div>

											<div className="exchange_wrap1" style={{ "padding": "5px" }}>


												<div className="exchange_hd 	ex_font width_fluid1">
													<img alt='' className="tron" src="assets/image/ADA.png" />
													<input type="number" className="input_set1" placeholder="0.0  USDC" />



												</div>


												<div className="exchange_hd1	ex_font">
													<div className="">
														<img alt='' src="assets/image/wallet.png" /> Balance:
													</div>
													<div className="">
														0 USDC
													</div>

												</div>
											</div>
										</div>
										<div className="exchange_arrow1">
											<i className="fa fa-sort"></i>
											<div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="14" className="text-high-emphesis"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg></div>
										</div>
										<div className="exch_bg mb-4">

											<div className="exchange_wrap1" style={{ "padding": "5px" }}>

												<div className="exchange_tools">
													<div className="bnb_btn bnb_position">
														<span className="swap_from">Swap From</span>
														<button>
															<img alt='' src="assets/image/eth.jpg" />
															<span><b>ETH</b></span>
															<i className="fa fa-chevron-down"></i>
														</button>
													</div>
												</div>
												<div className="exchange_hd 	ex_font width_fluid1">
													<img alt='' className="tron" src="assets/image/bnb.png" />
													<input type="number" className="input_set1" placeholder="0.0  USDC" />



												</div>


												<div className="exchange_hd1	ex_font">
													<div className="">
														<img alt='' src="assets/image/wallet.png" /> Balance:
													</div>
													<div className="">
														0 USDC
													</div>

												</div>
											</div>
										</div>
										<div className="flex justify-center"><button className="hover:bg-gradient-to-b hover:from-black/20 focus:to-black/20 focus:bg-gradient-to-b focus:from-black/20 hover:to-black/20 active:bg-gradient-to-b active:from-black/40 active:to-black/40 disabled:pointer-events-none disabled:opacity-40 bg-clip-text text-transparent bg-blue text-xs rounded font-bold flex items-center justify-center gap-1 color_bg_btn rounded-none">Use WETH instead of ETH</button></div>
										<div className="w">
											<button className=" btn-success1" onClick={() => window.openNav9()}>Connect to a Wallet</button>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>

					{/* <!-----modal popup 10 for connect to wallet end--->
			<!-----modal popup 11 for connect to wallet start---> */}
					<div id="myNav11" className="overlay11 textcenter">
						<div className="setting_close">
							<span className="tokenset">Recent Transactions</span>
							<span onClick={() => window.openNav11()}>&times;</span>
						</div>
						<div className="bx_shadow"></div>
						<div className="overlay11-content">
							<div className="">
								<div className="dead_line font16">
									<p>
										Please connect your wallet to view your recent transactions
									</p>
									<div className="btn_close">
										<button className="btn" onClick={() => window.openNav11()}>Close</button>
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
   	================================================================----->
   	<!-----modal popup 9 for connect to wallet start--> */}
			<div id="myNav9" className="overlay9 textcenter">
				<Wallets />
			</div>

			{/* <!-----modal popup 8 for connect to wallet end--> */}



			{/* <!-----select token modal popup 8 for connect to wallet start--> */}
			<div id="myNav8" className="overlay8 textcenter">
				<div className="setting_close">
					<span className="tokenset font_normal">Select a token <i className="fa fa-question"></i></span>
					<span onClick={() => window.openNav8()}>&times;</span>
				</div>
				<div className="overlay8-content">
					<div className="swapbg8">
						<div className="select_token">
							<div className="select_input">
								<input type="text" placeholder="Search name or paste address" className="eeRXNx" />
							</div>
						</div>
						<div className="chose_token">
							<Tokens />
						</div>
					</div>
				</div>
			</div>



			<div id="myNav10" className="overlay10 textcenter">
				<div className="setting_close">
					<span className="tokenset">Settings</span>
					<span onClick={() => window.openNav10()}>&times;</span>
				</div>
				<div className="bx_shadow"></div>
				<div className="overlay10-content">
					<div className="swapbg10">
						<div className="dead_line">
							<p style={{ "color": "black" }}>
								Slippage tolerance
							</p>
							<div className="seting_rate">
								<div className="all_setting">
									<div className="setting_button">
										<button className="btn seting_btn_bg">0.1%</button>
									</div>
									<div className="setting_button">
										<button className="btn seting_btn_bg jPlCZV">0.5%</button>
									</div>
									<div className="setting_button">
										<button className="btn seting_btn_bg">1%</button>
									</div>
								</div>
								<div className="setting_input">
									<input className="eqxqaX" type="number" placeholder="0.5%" />
								</div>
							</div>
						</div>
						<div className="dead_line">
							<p style={{ "color": "black" }}>
								Transaction deadline
							</p>
							<div className="seting_rate">
								<div className="setting_input set2">
									<input className="eqxqaX" type="number" placeholder="0.5%" />
									<div style={{ "color": "#fff" }}>Minutes</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	)
}
