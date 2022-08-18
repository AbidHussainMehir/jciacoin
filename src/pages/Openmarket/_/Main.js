import React from 'react'

export const Main = () => {
    return (
        <>
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

								<div class="col-md-2">

                <div class="dropdown">
                    <button class="btn2 dropdown-toggle" type="button" data-toggle="dropdown">Your Farms
                    </button>
                    <ul class="dropdown-menu">
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
