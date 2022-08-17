import React from 'react'
import { Header, Nav, Wallets } from '../components'


export const Farms = () => {
	return (
		<>

			<div className="wrapper">


				<Header />


				{/* <!---============Top menu Dashboard start==============---> */}
				<div className="body_content_wrap" id="myHeader">
					{/* <!----top navbar start--> */}
					<Nav />
					{/* <!---============Top menu Dashboard end==============---> */}
					<section className="maindsb">
						<div className="maininner">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-8 offset-md-2" align="center"> <br /><h1>Farm Anytime, Get Rewards Instantly.</h1>
										<p className="ule_imgset">It's a good day to farm some CST.
											<img alt='' src="assets/image/logo.png" width="30px" height="30px" /></p></div>
									<div className="col-md-6 offset-md-3">
										<div className="farming_content">
											<div className="farm_serv_box">
												<div className="farm_icons">
													<div className="farm_coins">
														<img src="assets/image/logo.png" className="farm_log_set" alt="logo" />

													</div>
													<div className="farm_heading">
														<h2>CST</h2>

													</div>
													<div className="farm_capital">
														<div className="farm_total">
															<span>Coin</span>
														</div>
													</div>
												</div>
												<div className=" farm_icons farm_new_item">
													<div className="farm_heading">
														<div className="farm_flex_set">
															<div className="farm_logo ar_drp">
																<span>cstswap</span>
															</div>
															<div className="farm_logo farm_logo_group ule_img_height ule_animation"></div>
														</div>
													</div>
												</div>
												<div className="farm_bonus">
													<div className="staking_price">
														<div className="farm_price d_flex">
															<span className="hrvst_font" id="pendindmonoRewards">0</span>
															<button id="btnmonoharvest" className="harvest btn button">Harvest</button>
														</div>
													</div>
													<div className="staking_price farming_rewards">
														<h2>======= MONO Rewards =======</h2>
													</div>
													<div className="farm_price d_flex">
														<span>30 Days : Return % 7%</span>
														<span className="set_checkbox"><input type="radio" name="checkbox" className="checkbox" value="90" /></span>
													</div>
													<div className="farm_price d_flex">
														<span>60 Days : Return % 15%</span>
														<span className="set_checkbox"><input type="radio" name="checkbox" className="checkbox" value="90" /></span>
													</div>
													<div className="farm_price d_flex">
														<span>90 Days : Return % 20%</span>
														<span className="set_checkbox"><input type="radio" name="checkbox" className="checkbox" value="180" /></span>
													</div>
													<div className="farm_price d_flex">
														<span>180 Days : Return % 40%</span>
														<span className="set_checkbox"><input type="radio" name="checkbox" className="checkbox" value="360" /></span>
													</div>
													<div className="farm_price d_flex">
														<span>365 Days : Return % 100%</span>
														<span className="set_checkbox"><input type="radio" name="checkbox" className="checkbox" value="360" /></span>
													</div>
												</div>
												<div className="farm_usd_set">
													<p>Get CST - CST</p>
												</div>
												<div className="farm_usd_set farm_input" />
												<div className="row">
													<div className="col-12">
														<input id="Enter_amount" placeholder="Enter COIN" />
													</div>
													<div className="col-12">
														<input id="Enter_lockableDays" placeholder="0 days" disabled="" />
													</div>
												</div>
											</div>
											<div className="farm_submit_btn">
												<button type="button" className="btn button btn-primary" id="btnmono">Approve</button>
											</div>
										</div>
									</div>
									<div className="farm_history">
										<div className="hist_hd"><h2 style={{ "color": "#fff" }}>Farm History</h2></div>
										<div className="table-responsive">
											<table className="table table-borderless">
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

    <!----=============All modal popup start=====================-----> */}
			{/* <!-----modal popup 9 for connect to wallet start--> */}
			<div id="myNav9" className="overlay9 textcenter">
				<Wallets />
			</div>

		</>
	)
}
