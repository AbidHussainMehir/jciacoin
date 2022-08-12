import React from 'react'
import {Header, Nav ,Wallets} from '../components'


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
			<Nav/>
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
        <Wallets/>
    </div>
   
    </>
  )
}
