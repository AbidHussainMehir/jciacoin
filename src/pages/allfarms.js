import React from 'react'
import { Footer,Header, Nav ,Tokens,Wallets} from '../components'


export const AllFarms = () => {
  return (
    <>
        
	<div class="wrapper">
		{/* <!---==================Sidebar start====================---> */}
		<Header/>
       
        {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
        <div class="body_content_wrap" id="myHeader">
            {/* <!----top navbar start--> */}
			<Nav/>
           
            {/* <!---============Body section start==================--->
            <!-------exchange page start------>  */}
            <section >
             <div class=""  style={{"background-image": "url(assets/image/bubble-pattern.png) !important"}}>

			     <div class="container-fluid set_nav_width">
			        <div class="row">
			        	<div class="col-md-12 py_0 heading"><br/>
			        		 <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container-fluid set_nav_width">
			                            <div class="row">
			                            	<div class="col-md-12">
			                            		<div class="flex">
			                            		<div class="top_pading">
			                            		<h1 class="farm">Farm Menu</h1>
			                            		<p class="farm1">Earn fees and rewards by depositing and staking your tokens to the platform.</p>
			                            	    </div>
			                            	    <div class="bottom">
			                            	    	<button class="btn-success1">
                                                    Apply for Farm Pairs
                                                    </button>
			                            	    </div>
			                            	</div>
			                            	</div>
			                           
			                            	
			                            </div>
			                        </div>
			                          
			                    </div>
			                </div>
			            </div>
			        </div>
			     </div>
			  </div>

			  <div class="input_section">

			   <div class="container-fluid set_nav_width">
			     <div class="row">
			      	<div class="col-md-10">
			      	  <div class="farm_usd_set farm_input1">
			      	  	<div class="icon_search">
			      	  	<i class="fa fa-search"></i>
			      	  </div>
			  	        <input id="Enter_amount" class="input_search" placeholder="Search by token or pair"/>
			  	        </div>
			  	    </div>
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
			      <div class="row">
			      	<div class="col-md-12">
			      	<div class="farm_history">
	                            	
	                            	<div class="table-responsive">
	                            		<table class="table table-borderless">
		                            		<thead>
		                            			<tr class="line">
		                            				<th class="head">Pool</th>
			                            			<th class="head">TVL <i class="fa fa-angle-down"/></th>
			                            			<th class="head">Rewards</th>
			                            			<th class="head">APR</th>
			                            			
		                            			</tr>
		                            		</thead>
		                            		<tbody>
		                            			<tr class="line">
		                            				<td>
		                            					<div class="main_div">
		                            					<div class="img_set">
		                            					<img class="imgagess" src="assets/image/bnb.png"/><img class="imgagess1" src="assets/image/ADA.png"/>
		                            				    </div>
		                            				    <div class="">
		                            				    	<h1 class="icon_logo">
		                            				    		
                                                             BNB
                                                               /
                                                             ADA
		                            				    	</h1>
		                            				    	<p class="icon_logo1">
                                                            WireSwap Farm
                                                            </p>
		                            				    </div>
		                            				     </div>

		                            				</td>

		                            				<td class="top_paddding">$93,495,969</td>
		                            				<td><span class="top_paddding1">2574 </span><img class="img_small" src="assets/image/pin.jpg"/></td>
		                            				
		                            				<td class="icon_logo">8.37%  <i class="fa fa-question-circle" aria-hidden="true"></i>
		                            					<p class="annu">
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

			<footer class="footer_section">
				<Footer/>
			</footer>
			{/* <!-------exchange page end------> */}

			{/* <!-------=========Liquidity page modal popup start=========----> */}
			{/* <!-----modal popup 10 for connect to wallet start---> */}
			<div id="myNav10" class="overlay11 textcenter"  style={{"display":"none"}}>
				
			    <div class="pools">
			    	 <div class="tab-content">
			                        <div class="container py_0 tab-pane active">
			                            <div class="exchange_tab">
			                            	<div class="setting_close">
			                                <span class="tokenset1">Manage liquidity <i class="fa fa-question-circle myDIV" aria-hidden="true"></i></span>
			                                <span  onClick={() => window.openNav10()}>&times;</span>
			                                <div class="hide">I am shown when someone hovers over the div above.</div>

			                             </div>
			                                <div class="exchange_wrap pt_5">
			                                    <div class="exchange_hd">
			                                        <a href="" class="liq">
			                                        	Liquidity
			                                        </a>
			                                        <a href="" class="liq">
			                                        	Staking
			                                        </a>
			                                         <a href="" class="liq">
			                                        	Rewards
			                                        </a>
			                                    </div>
			                                   
			                                </div>
			                                <div class="exch_bg">
			                                	<div class="main_liq">
			                                	   <div class="">
			                                    		<span class="tokenset1">Add liquidity </span>
			                                    	</div>
			                                    	<div class="">
			                                    		<label class="switch">
                                                        <input type="checkbox" checked/>
                                                         <span class="slider round"></span>
                                                        </label>
                                                        <span class="tools_img"  onClick={() => window.openNav20()}>
			                                            <i class="fa fa-cog"></i>
			                                            </span>
			                                    	</div>
			                                    	</div>

			                                    <div class="exchange_wrap1"  style={{"padding":"5px"}}>
			                                    	
			                                       
			                                        <div class="exchange_hd 	ex_font width_fluid1">
			                                        	<img class="tron" src="assets/image/ADA.png"/>
			                                            <input type="number" class="input_set1" placeholder="0.0  USDC" />


			                                            
			                                        </div>


			                                        <div class="exchange_hd1	ex_font">
			                                        	<div class="">
			                                        	<img src="assets/image/wallet.png"/> Balance:
			                                           </div>
			                                           <div class="">
			                                           	0 USDC
			                                           </div>

			                                        </div>
			                                    </div>
			                                </div>
			                                <div class="exchange_arrow1">
			                                     <i class="fa fa-sort"></i> 
			                                    <div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="14" class="text-high-emphesis"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg></div>
			                                </div>
			                                <div class="exch_bg mb-4">
			                                    
			                                   <div class="exchange_wrap1"  style={{"padding":"5px"}}>
			                                    	
			                                         <div class="exchange_tools">
			                                            <div class="bnb_btn bnb_position">
			                                            	 <span class="swap_from">Swap From</span> 
			                                                <button>
			                                                	<img src="assets/image/eth.jpg"/>
			                                                	<span><b>ETH</b></span>
			                                                	<i class="fa fa-chevron-down"></i>
			                                                </button>
			                                            </div>
			                                        </div> 
			                                        <div class="exchange_hd 	ex_font width_fluid1">
			                                        	<img class="tron" src="assets/image/bnb.png"/>
			                                            <input type="number" class="input_set1" placeholder="0.0  USDC" />
			                                           

			                                            
			                                        </div>


			                                        <div class="exchange_hd1	ex_font">
			                                        	<div class="">
			                                        	<img src="assets/image/wallet.png"/> Balance:
			                                           </div>
			                                           <div class="">
			                                           	0 USDC
			                                           </div>

			                                        </div>
			                                    </div>
			                                </div>
			                               <div class="flex justify-center"><button class="hover:bg-gradient-to-b hover:from-black/20 focus:to-black/20 focus:bg-gradient-to-b focus:from-black/20 hover:to-black/20 active:bg-gradient-to-b active:from-black/40 active:to-black/40 disabled:pointer-events-none disabled:opacity-40 bg-clip-text text-transparent bg-blue text-xs rounded font-bold flex items-center justify-center gap-1 color_bg_btn rounded-none">Use WETH instead of ETH</button></div>
			                                <div class="w">
			                                    <button class=" btn-success1"  onClick={() => window.openNav9()}>Connect to a Wallet</button>
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
			        <span  onClick={() => window.openNav11()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay11-content">
			        <div class="">
			            <div class="dead_line font16">
			                <p>
			                    Please connect your wallet to view your recent transactions
			                </p>
			                <div class="btn_close">
			                    <button class="btn"  onClick={() => window.openNav11()}>Close</button>
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
    <div id="myNav9" class="overlay9 textcenter">
       <Wallets/>
    </div>
   
    {/* <!-----modal popup 8 for connect to wallet end--> */}



    {/* <!-----select token modal popup 8 for connect to wallet start--> */}
    <div id="myNav8" class="overlay8 textcenter">
        <div class="setting_close">
            <span class="tokenset font_normal">Select a token <i class="fa fa-question"></i></span>
            <span  onClick={() => window.openNav8()}>&times;</span>
        </div>
        <div class="overlay8-content">
            <div class="swapbg8">
                <div class="select_token">
                    <div class="select_input">
                        <input type="text" placeholder="Search name or paste address"  class="eeRXNx"/>
                    </div>
                </div>
                <div class="chose_token">
                   <Tokens/>
				   </div>
            </div>
        </div>
    </div>
  

  
 <div id="myNav10" class="overlay10 textcenter">
			    <div class="setting_close">
			        <span class="tokenset">Settings</span>
			        <span  onClick={() => window.openNav10()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay10-content">
			        <div class="swapbg10">
			            <div class="dead_line">
			                <p  style={{"color":"black"}}>
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
			                <p  style={{"color":"black"}}>
			                    Transaction deadline
			                </p>
			                <div class="seting_rate">
			                    <div class="setting_input set2">
			                        <input class="eqxqaX" type="number" placeholder="0.5%" />
			                        <div  style={{"color":"#fff"}}>Minutes</div>
			                    </div>

			                </div>
			            </div>
			        </div>
			    </div>
                </div>
			
		
    </>
  )
}
