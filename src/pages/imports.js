import React from 'react'
import { Footer, Header, Nav, Wallets, Tokens  } from '../components'


export const Imports = () => {
  return (
    <>
      <div class="wrapper">
        {/* <!---==================Sidebar start====================---> */}
        <Header />

        {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
        <div class="body_content_wrap" id="myHeader">
          {/* <!----top navbar start--> */}
          <Nav />

          {/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
          <section>
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6 py_0 offset-md-3 heading"><br />
                  <div class="pools">
                    {/* <!-- Nav pills --> */}

                    {/* <!-- Tab panes --> */}
                    <div class="tab-content">
                      <div class="container">
                        <div class="row">

                          <div class="col-md-12">
                            <div class="go">
                              <a href="/"><i class="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
                            </div>
                            <h1 class="text-3xl">Import Pool</h1>
                            <div class="back">


                              <h3 class="heading1">Tip: Use this tool to find pairs that don't automatically appear in the interface</h3>
                            </div>


                            <div class="exchange_tab">

                              <div class="exch_bg">
                                <div class="exchange_wrap" style={{ "padding": "5px" }}>
                                  <div class="exchange_tools">
                                    <div class="bnb_btn bnb_position">
                                      <span class="swap_from">Swap From</span>
                                      <button onClick={() => window.openNav8()}>
                                        <img alt='' src="assets/image/eth.jpg" />
                                        <span><b>ETH</b></span>
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
                                <div >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                              </div>
                              <div class="exch_bg mb-4">

                                <div class="exchange_wrap" style={{ "padding": "5px" }}>
                                  <div class="exchange_tools">
                                    <div class="bnb_btn bnb_position">
                                      <p class="swap_from">Swap To (est):</p>
                                      <button class="min_wth" onClick={() => window.openNav8()}>
                                        <div class="bnbRotate"></div>
                                        <span class="selct_tkn" style={{ "position": "relative !important", "top": "13px !important", "left": "10px" }}>Select a token</span>
                                      </button>
                                    </div>
                                  </div>
                                  <div class="exchange_hd ex_font width_fluid mt_14M">
                                    <input type="number" class="input_set" placeholder="0.0" />
                                  </div>
                                </div>
                              </div>

                              <div class="wallet_btn mr_set">
                                <button class="btn button btn-success" onClick={() => window.openNav9()}>Connect to a Wallet</button>
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
          </section>
          <footer class="footer_section">
            <Footer />
          </footer>

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
                    <button class="btn" onClick={() => window.closeNav11()}>Close</button>
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
        <div class="overlay8-content text-left" >
          <div class="swapbg8">
            <div class="select_token">
              <div class="select_input">
                <input type="text" placeholder="Search name or paste address" class="eeRXNx" />
              </div>
            </div>
            <div class="">
              <div class="para">
                <p>Common bases</p>

              </div>
              <div class="eth">
                <div class="eth_img">
                  <img alt='' src="assets/image/eth1.jpg" /> ETH
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/sushi.jpg" /> SUSHI
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/wbtr.jpg" /> WBTR
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/mim.jpg" />  MIM
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/spell.webp" />  SPELL
                </div>


              </div>

              <div class="eth">
                <div class="eth_img">
                  <img alt='' src="assets/image/ice.webp" /> ICE
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/usdc.jpg" /> USDC
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/usdt.jpg" /> USDT
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/dai.png" />  DAI
                </div>
                <div class="eth_img">
                  <img alt='' src="assets/image/frax.webp" />  FRAX
                </div>


              </div>


              <div class="chose_token">

                <Tokens/>
                </div>
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
