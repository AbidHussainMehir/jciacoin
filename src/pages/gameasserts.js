import React from 'react'
import { Footer,Header, Nav ,Tokens,Wallets} from '../components'


export const Gameasserts = () => {
  return (
    <>

	<div className="wrapper">
		{/* <!---==================Sidebar start====================---> */}
		<Header/>

      
        {/* <!---==================Sidebar end====================---> */}

        {/* <!---============Top menu Dashboard start==============---> */}
        <div className="body_content_wrap" id="myHeader">
            {/* <!----top navbar start--> */}
			<Nav/>
          {/* <!---============Body section start==================--->
            <!-------exchange page start------> */}
             <section>
			    <div className="container">
			        <div className="row">
			        	<div className="col-md-12 py_0  heading"><br/>
			        		 <div className="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div className="tab-content">
			                        <div className="container py_0 tab-pane active">
			                            <div className="exchange_tab">
			                                <div className="exchange_wrap pt_5">
			                                    <div className="exchange_hd">
			                                        <h1>Game Assets</h1>
			                                        <p>A market made for NFT, where everything is special 😋</p>
			                                       
			                                    </div>
			                                    <div className="exchange_tools">
			                                      
			                                         <a href="" className="btn1">
			                                        	Create 
			                                        </a> 

			                                        <a href=""className="btn1">
			                                        	My Artworks 
			                                        </a>
			                                    </div>
			                                </div>
			                                <div className="marge">
			                                 <h5>789 <br/> Items</h5>&nbsp;&nbsp;&nbsp;&nbsp;
			                                 <h5>20,362 USDT <br/> volume traded</h5>
			                                </div>
			                           </div>





			                            </div>
			                        </div>
			                          
			                    </div>
			                </div>
			        </div>
			       
			        <div className="row">
			            <div className="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div className="main_one">
						     <div className="main">
						  	  <div className="">
						  		<div className="sc-eLdqWK jCwswk"></div>
						  		<div className="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div className="">
						  		<p>On Auction</p>
						  	    </div>
						      </div>

						     <img alt=''  src="assets/image/1.jpeg" width="100%"/>
						      <div className="main">
						  	    <div className="">
						  		<p className="margin">#78700</p>
						  	    </div>
						  	    <div className="">
						  		<p className="margin">1500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>

			              <div className="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div className="main_one">
						     <div className="main">
						  	  <div className="">
						  		<div className="sc-eLdqWK jCwswk"></div>
						  		<div className="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div className="">
						  		<p>On Sale</p>
						  	    </div>
						      </div>

						      <img alt='' src="assets/image/1.jpeg" width="100%"/>
						      <div className="main">
						  	    <div className="">
						  		<p className="margin">GP Token</p>
						  	    </div>
						  	    <div className="">
						  		<p className="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>

			              <div className="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div className="main_one">
						     <div className="main">
						  	  <div className="">
						  		<div className="sc-eLdqWK jCwswk"></div>
						  		<div className="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div className="">
						  		<p>On Auction</p>
						  	    </div>
						      </div>

						      <img alt='' src="assets/image/1.jpeg" width="100%"/>
						      <div className="main">
						  	    <div className="">
						  		<p className="margin">GP Token</p>
						  	    </div>
						  	    <div className="">
						  		<p className="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div>


			              <div className="col-md-3">
						   <a href="#" style={{"text-decoration": "none"}}>
						    <div className="main_one">
						     <div className="main">
						  	  <div className="">
						  		<div className="sc-eLdqWK jCwswk"></div>
						  		<div className="sc-eLdqWK sc-iiUIRa fNtHKr"></div>
						  	  </div>
						  	   <div className="">
						  		<p>On Sale</p>
						  	    </div>
						      </div>

						      <img alt='' src="assets/image/1.jpeg" width="100%"/>
						      <div className="main">
						  	    <div className="">
						  		<p className="margin">GP Token</p>
						  	    </div>
						  	    <div className="">
						  		<p className="margin">2500</p>
						  	    </div>
						       </div>
						     </div>
						     </a>
			              </div> 
			        </div>

			        
			    </div>
			</section>
			<footer className="footer_section">
				<Footer/>
			</footer>
			{/* <!-------exchange page end------>
			<!-------=========Liquidity page modal popup start=========---->
			<!-----modal popup 10 for connect to wallet start---> */}
			<div id="myNav10" className="overlay10 textcenter">
			    <div className="setting_close">
			        <span className="tokenset">Settings</span>
			        <span  onClick={() => window.closeNav10()}>&times;</span>
			    </div>
			    <div className="bx_shadow"></div>
			    <div className="overlay10-content">
			        <div className="swapbg10">
			            <div className="dead_line">
			                <p style={{"color":"black"}}>
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
			                <p style={{"color":"black"}}>
			                    Transaction deadline
			                </p>
			                <div className="seting_rate">
			                    <div className="setting_input set2">
			                        <input className="eqxqaX" type="number" placeholder="0.5%" />
			                        <div style={{"color":"#fff"}}>Minutes</div>
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
			        <span  onClick={() => window.closeNav11()}>&times;</span>
			    </div>
			    <div className="bx_shadow"></div>
			    <div className="overlay11-content">
			        <div className="">
			            <div className="dead_line font16">
			                <p>
			                    Please connect your wallet to view your recent transactions
			                </p>
			                <div className="btn_close">
			                    <button className="btn"  onClick={() => window.closeNav11()}>Close</button>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		
			{/*<!-----modal popup 11 for connect to wallet end-->
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
        <Wallets/>
    </div>
  
    {/* <!-----modal popup 8 for connect to wallet end--> */}



    {/* <!-----select token modal popup 8 for connect to wallet start--> */}
    <div id="myNav8" className="overlay8 textcenter">
        <div className="setting_close">
            <span className="tokenset font_normal">Select a token <i className="fa fa-question"></i></span>
            <span  onClick={() => window.closeNav8()}>&times;</span>
        </div>
        <div className="overlay8-content">
            <div className="swapbg8">
                <div className="select_token">
                    <div className="select_input">
                        <input type="text" placeholder="Search name or paste address"  className="eeRXNx"/>
                    </div>
                </div>
                <div className="chose_token">
                    <Tokens/>
					</div>
            </div>
        </div>
    </div>
      </>
  )
}
