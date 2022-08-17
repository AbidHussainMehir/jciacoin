import React from 'react'
import { DropDown, Footer, Header, Nav, Tokens, Wallets } from '../components'



export const Openmarket = () => {
	return (
		<>

			<div class="wrapper">
				{/* <!---==================Sidebar start====================---> */}
				<Header />

				{/* <!---==================Sidebar end====================---> */}

				{/* <!---============Top menu Dashboard start==============---> */}
				<div class="body_content_wrap" id="myHeader">
					{/* <!----top navbar start--> */}
					<Nav />

					{/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
					<section>
						<div class="container">
							<div class="row">
								<div class="col-md-12 py_0  heading"><br />
									<div class="pools">
										{/* <!-- Nav pills --> */}

										{/* <!-- Tab panes --> */}
										<div class="tab-content">
											<div class="container py_0 tab-pane active">
												<div class="exchange_tab">
													<div class="exchange_wrap pt_5">
														<div class="exchange_hd">
															<h1>Open Market</h1>
															<p>A market made for NFT, where everything is special 😋</p>

														</div>
														<div class="exchange_tools">

															<a href="" class="btn1">
																Create
															</a>

															<a href="" class="btn1">
																My Artworks
															</a>
														</div>
													</div>
													<div class="marge">
														<h5>789 <br /> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
														<h5>20,362 USDT <br /> volume traded</h5>
													</div>
												</div>





											</div>
										</div>

									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-10">
									<div class="farm_usd_set farm_input1">
										<div class="icon_search">
											<i class="fa fa-search"></i>
										</div>
										<input id="Enter_amount" class="input_search" placeholder="Search by token or pair" />
									</div>
								</div>

								{/* Dropdown list of Farms */}

								<DropDown/>

								{/* <div class="col-md-2">

									<div class="dropdown">
										<button class="btn2 dropdown-toggle" type="button" data-toggle="dropdown">Your Farms
										</button>
										<ul class="dropdown-menu">
											<li><a href="#">All Farms</a></li>
											<li><a href="#">Kashi Farms</a></li>
											<li><a href="#">Wireswap Farms</a></li>
										</ul>
									</div>
								</div> */}
							</div>
							<br />

							<div class="row">
								<div class="col-md-3">
									<a href="#" style={{ "text-decoration": "none" }}>
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

											<img src="assets/image/1.jpeg" width="100%" />
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
									<a href="#" style={{ "text-decoration": "none" }}>
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

											<img src="assets/image/1.jpeg" width="100%" />
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
									<a href="#" style={{ "text-decoration": "none" }}>
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

											<img src="assets/image/1.jpeg" width="100%" />
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
									<a href="#" style={{ "text-decoration": "none" }}>
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

											<img src="assets/image/1.jpeg" width="100%" />
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
						<Footer />
					</footer>
					{/* <!-------exchange page end------>
			<!-------=========Liquidity page modal popup start=========---->
			<!-----modal popup 10 for connect to wallet start---> */}
					<div id="myNav10" class="overlay10 textcenter">
						<div class="setting_close">
							<span class="tokenset">Settings</span>
							<span onClick={() => window.closeNav10()}>&times;</span>
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
							<span onClick={() => window.closeNav11()}>&times;</span>
						</div>
						<div class="bx_shadow"></div>
						<div class="overlay11-content">
							<div class="">
								<div class="dead_line font16">
									<p>
										Please connect your wallet to view your recent transactions
									</p>
									<div class="btn_close">
										<button class="btn" o onClick={() => window.closeNav11()}>Close</button>
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
				<Wallets />
			</div>

			{/* <!-----modal popup 8 for connect to wallet end--> */}



			{/* <!-----select token modal popup 8 for connect to wallet start--> */}
			<div id="myNav8" class="overlay8 textcenter">
				<div class="setting_close">
					<span class="tokenset font_normal">Select a token <i class="fa fa-question"></i></span>
					<span onClick={() => window.closeNav8()}>&times;</span>
				</div>
				<div class="overlay8-content">
					<div class="swapbg8">
						<div class="select_token">
							<div class="select_input">
								<input type="text" placeholder="Search name or paste address" class="eeRXNx" />
							</div>
						</div>
						<div class="chose_token">
							<Tokens/>
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
