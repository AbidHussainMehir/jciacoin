import React from 'react'
import { Footer,Header, Nav ,TabPanes,Tokens, Wallets} from '../components'



export const Liquidity = () => {
    return (
        <>

            <div class="wrapper">
                <Header/>
              

                {/* <!---============Top menu Dashboard start==============---> */}
                <div class="body_content_wrap" id="myHeader">
                    {/* <!----top navbar start--> */}
                    <Nav/>
                    

            {/* <!---============Body section start==================---> */}
            {/* <!-------exchange page start------>  */}
                    <section>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 py_0 offset-md-3 heading"><br />
                                    <div class="pools">
                                        {/* <!-- Nav pills --> */}

                                        {/* <!-- Tab panes --> */}
                                        <div class="tab-content">
                                            <div class="container py_0 tab-pane active">
                                                <div class="exchange_tab">

                                            <TabPanes/>

                                                  
                                                    <div class="wallet_btn mr_set">
                                                        <a href="ETH"> <button class="btn button btn-success">Add Liquidity +</button></a>
                                                    </div>
                                                    <div class="">
                                                        <div class="exchange_hd my_5">
                                                            <b style={{"color":"#fff"}}>Your Liquidity</b>
                                                            <b><span style={{ "float": "right", "color": "rgb(116, 155, 216)" }}><i class="fa fa-question-circle"></i></span>  </b>

                                                        </div>

                                                        <span color="textDisabled" class="sc-giYglK dSrmWk">Connect a wallet to view your liquidity.</span>

                                                        <div>
                                                            <span color="#07162d" font-size="14px" class="sc-giYglK hhnuQi" style={{ "padding": "  0.5rem 0px" }}>Don't see a pool you joined? <a id="import-pool-link" class="links" href="find">Import it.</a></span><br />
                                                            <span color="#07162d" font-size="14px" class="sc-giYglK hhnuQi" style={{ "padding": "  0.5rem 0px" }}>Or, if you staked your LP tokens in a farm, unstake them to see them here.</span>
                                                        </div>
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
           
            {/* <!----==All modal popup start=====----->
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

        </>
    )
}
