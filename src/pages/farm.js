import React from 'react'
import { DropDown, FarmPair, Footer, Header, Nav, Tokens, Wallets } from '../components'


export const Farm = () => {
	return (
		<>

			<div className="wrapper">
				{/* <!---==================Sidebar start====================---> */}
				<Header />

				{/* <!---==================Sidebar end====================---> */}

				{/* <!---============Top menu Dashboard start==============---> */}
				<div className="body_content_wrap" id="myHeader">
					{/* <!----top navbar start--> */}
					<Nav />
					{/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
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
						</div>
					</section>

					<footer className="footer_section">
						<Footer />
					</footer>
					{/* <!-------exchange page end------>
			<!-------=========Liquidity page modal popup start=========---->
			<!-----modal popup 10 for connect to wallet start---> */}
					<div id="myNav10" className="overlay10 textcenter">
						<div className="setting_close">
							<span className="tokenset">Settings</span>
							<span onClick={() => window.closeNav10()}>&times;</span>
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

					{/* <!-----modal popup 10 for connect to wallet end--->
			<!-----modal popup 11 for connect to wallet start---> */}
					<div id="myNav11" className="overlay11 textcenter">
						<div className="setting_close">
							<span className="tokenset">Recent Transactions</span>
							<span onClick={() => window.closeNav11()}>&times;</span>
						</div>
						<div className="bx_shadow"></div>
						<div className="overlay11-content">
							<div className="">
								<div className="dead_line font16">
									<p>
										Please connect your wallet to view your recent transactions
									</p>
									<div className="btn_close">
										<button className="btn" onClick={() => window.closeNav11()}>Close</button>
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
			{/* <!------====== start======------> */}
			{/* 
    <!----================================================================
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
					<span onClick={() => window.closeNav8()}>&times;</span>
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

			{/* 
    <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}
		</>
	)
}
