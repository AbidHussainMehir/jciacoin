import React from 'react'
import { Footer,Header, Nav ,Tokens,Wallets} from '../components'


export const Browse = () => {
  return (
    <>
        
	<div className="wrapper">

		{/* <!---==================Sidebar start====================---> */}
        <Header />
        
        {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
        <div className="body_content_wrap" id="myHeader">
            {/* <!----top navbar start--> */}  
			<Nav/>
            {/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
             <section>
			    <div className="container-fluid">
			        <div className="row" >
			        	<div className="col-md-6 py_0 offset-md-3 heading"><br/>
			        		 <div className="pools">
			                    {/* <!-- Nav pills -->
			                    
			                    <!-- Tab panes --> */}
			                    <div className="tab-content">
			                        <div className="container">
			                            <div className="row">
			                           
			                            	<div className="col-md-12">
			                            		<div className="go">
			                            		<a href="/"><i className="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
			                            	    </div>
			                            	    <h1 className="text-3xl">My Liquidity Positions</h1>
			                            	    <div className="back">

			                            	    <h3 className="heading">Liquidity Provider Rewards</h3>
			                            	    <h3 className="heading1">Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity</h3>
			                            	    </div>
			                            	    
			                            	
			                                    <button className=" btn-success1"  onClick={() => window.openNav9()}>Connect to a Wallet</button>

			                                

			                            	</div>
			                        </div>
			                    </div>
			                          
			                    </div>
			                </div>
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
			
			{/* <!-----modal popup 11 for connect to wallet end-->
			<!-------=========Liquidity page modal popup end=========---->
            <!-------exchange page start------>
            <!---============Body section end====================---> */}
        </div>
	</div>
	

{/* 
    <!----================================================================
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
                
                    </div>
                <Tokens/>
            </div>
        </div>
    </div>
  

    {/* <!-----select token modal popup 8 for connect to wallet end-->
    <!----================================================================
   	====================All modal popup start=============================
   	================================================================-----> */}


    </>
  )
}
