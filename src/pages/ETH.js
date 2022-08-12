import React from 'react'
import { Footer,Header, Nav ,Tokens,Wallets} from '../components'


export const ETH = () => {
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
           
            {/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
             <section>
			    <div class="container-fluid">
			        <div class="row">
			        	<div class="col-md-6 py_0 offset-md-3 heading"><br/>
			        		 <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container py_0 tab-pane active">
			                            <div class="exchange_tab">
			                                <div class="exchange_wrap pt_5">
			                                    <div class="exchange_hd">
			                                        <ul class="nav nav-pills pool_tab" role="tablist">
								                        <li class="nav-item">
								                            <a class="nav-link" href="swap">Swap</a>
								                        </li>
								                         <li class="nav-item">
								                            <a class="nav-link" href="#">Limit</a>
								                        </li> 
								                        <li class="nav-item">
								                            <a class="nav-link active" href="liquidity">Liquidity</a>
								                        </li>
								                    </ul>
			                                    </div>
			                                    <div class="exchange_tools">
			                                    	<div class="tools_img">
			                                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z" fill="#7CFF6B"></path></svg><span class="price_set">30</span>
			                                        </div>
			                                        <div class="tools_img"  onClick={() => window.openNav10()}>
			                                            <i class="fa fa-cog"></i>
			                                        </div>
			                                        <div class="tools_img"  onClick={() => window.openNav11()}>
			                                            <i class="fa fa-clock-o"></i>
			                                        </div> 
			                                    </div>
			                                </div>
			                                <div class="exchange_wrap">
			                                    <div class="exchange_hd">
			                                          <h2 style={{"color":"#016eda"}}><i class="fa fa-arrow-left"></i> <span style={{"padding-left":"30px"}}>Add Liquidity</span></h2>
			                                    </div>
			                                    <div class="exchange_tools">
			                                        <div class="tools_img pyx_5">
			                                            <i class="fa fa-question-circle"></i>
			                                        </div>
			                                     </div>
			                                </div>
			                                <div class="exch_bg">
			                                    <div class="exchange_wrap" style={{"padding":"5px"}}>
			                                        <div class="exchange_tools">
			                                            <div class="bnb_btn bnb_position">
			                                            	<span class="swap_from">Swap From</span>
			                                                <button  onClick={() => window.openNav8()}>
			                                                	<img src="assets/image/bnb.png"/>
			                                                	<span><b>BNB</b></span>
			                                                	<i class="fa fa-chevron-down"></i>
			                                                </button>
			                                            </div>
			                                        </div>
			                                        <div class="exchange_hd ex_font width_fluid">
			                                            <input type="number" class="input_set" placeholder="0.0" />
			                                        </div>
			                                    </div>
			                                </div>
			                                <div class="exchange_arrow">
			                                     <i class="fa fa-sort"></i> 
			                                    <div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style={{"width": "100%", "height": "100%", "transform": "translate3d(0px, 0px, 0px)", "content-visibility": "visible"}}><defs><clipPath id="__lottie_element_402"><rect width="500" height="500" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_404"><path d="M0,0 L500,0 L500,500 L0,500z"></path></clipPath></defs><g clip-path="url(#__lottie_element_402)"><g transform="matrix(4.5,0,0,4.5,207.25,194.875)" opacity="1" style={{"display": "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)" opacity="1" style={{"display": "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g transform="matrix(-4.5,0,0,-4.5,292.75,305.125)" opacity="1" style={{"display": "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)" opacity="1" style={{"display": "block"}}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g clip-path="url(#__lottie_element_404)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{"display": "block"}}></g></g></svg></div>
			                                </div>
			                                <div class="exch_bg mb-4">
			                                    
			                                    <div class="exchange_wrap" style={{"padding":"5px"}}>
			                                    	<div class="exchange_tools">
			                                            <div class="bnb_btn bnb_position">
			                                            	<p class="swap_from">Swap To (est):</p>
			                                                <button class="min_wth"  onClick={() => window.openNav8()}>
			                                                	<div class="bnbRotate"></div>
			                                                	<span class="selct_tkn">Select Currency</span>
			                                                </button>
			                                            </div>
			                                        </div>
			                                        <div class="exchange_hd ex_font width_fluid mt_14M">
			                                            <input type="number" class="input_set" placeholder="0.0" />
			                                        </div>
			                                    </div>
			                                </div>
			                               
			                                <div class="wallet_btn mr_set">
			                                    <button class="btn button btn-success"  onClick={() => window.openNav9()}>Unlock Wallet</button>
			                                </div>
			                            </div>
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
			{/* <!-------exchange page end------>
			<!-------=========Liquidity page modal popup start=========---->
			<!-----modal popup 10 for connect to wallet start---> */}
			<div id="myNav10" class="overlay10 textcenter">
			    <div class="setting_close">
			        <span class="tokenset">Settings</span>
			        <span  onClick={() => window.closeNav10()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay10-content">
			        <div class="swapbg10">
			            <div class="dead_line">
			                <p style={{"color":"black"}}>
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
			                <p style={{"color":"black"}}>
			                    Transaction deadline
			                </p>
			                <div class="seting_rate">
			                    <div class="setting_input set2">
			                        <input class="eqxqaX" type="number" placeholder="0.5%" />
			                        <div style={{"color":"#fff"}}>Minutes</div>
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
			        <span  onClick={() => window.closeNav11()}>&times;</span>
			    </div>
			    <div class="bx_shadow"></div>
			    <div class="overlay11-content">
			        <div class="">
			            <div class="dead_line font16">
			                <p>
			                    Please connect your wallet to view your recent transactions
			                </p>
			                <div class="btn_close">
			                    <button class="btn"  onClick={() => window.closeNav11()}>Close</button>
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
	{/* <!------=======js start======------> */}




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
            <span  onClick={() => window.closeNav8()}>&times;</span>
        </div>
        <div class="overlay8-content text-left" >
            <div class="swapbg8">
                <div class="select_token">
                    <div class="select_input">
                        <input type="text" placeholder="Search name or paste address"  class="eeRXNx"/>
                    </div>
                </div>
                <div class="">
                <div class="para">
                	<p>Common bases</p>

                </div> 
                <div class="eth"> 
                	<div class="eth_img">
                		<img src="assets/image/eth1.jpg"/> ETH
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/sushi.jpg"/> SUSHI
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/wbtr.jpg"/> WBTR
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/mim.jpg"/>  MIM
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/spell.webp"/>  SPELL
                	</div>


                 </div>

                 <div class="eth"> 
                	<div class="eth_img">
                		<img src="assets/image/ice.webp"/> ICE
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/usdc.jpg"/> USDC
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/usdt.jpg"/> USDT
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/dai.png"/>  DAI
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/frax.webp"/>  FRAX
                	</div>


                 </div>


                 <div class="chose_token"> 

                <Tokens/>
				</div>
            </div>
        </div>
    </div>


    {/* <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}
</div>
    </>
  )
}
