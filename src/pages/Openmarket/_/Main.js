import React from 'react'

export const Main = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-12 py_0  heading"><br />
						<div className="pools">
							<div className="tab-content">
								<div className="container py_0 tab-pane active">
									<div className="exchange_tab">
										<div className="exchange_wrap pt_5">
											<div className="exchange_hd">
												<h1>Open Market</h1>
												<p>A market made for NFT, where everything is special 😋</p>

											</div>
											<div className="exchange_tools">

												<a href="" className="btn1">
													Create
												</a>

												<a href="" className="btn1">
													My Artworks
												</a>
											</div>
										</div>
										<div className="marge">
											<h5>789 <br /> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
											<h5>20,362 USDT <br /> volume traded</h5>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-10">
						<div className="farm_usd_set farm_input1">
							<div className="icon_search">
								<i className="fa fa-search"></i>
							</div>
							<input id="Enter_amount" className="input_search" placeholder="Search by token or pair" />
						</div>
					</div>
					<div className="col-md-2">
						<div className="dropdown">
							<button className="btn2 dropdown-toggle" type="button" data-toggle="dropdown">Your Farms
							</button>
							<ul className="dropdown-menu">
								<li><a href="#">All Farms</a></li>
								<li><a href="#">Kashi Farms</a></li>
								<li><a href="#">Wireswap Farms</a></li>
							</ul>
						</div>
					</div>


				</div>
				<br />




			</div>


		</>
	)
}
