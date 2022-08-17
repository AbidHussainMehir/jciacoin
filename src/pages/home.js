import React from 'react'
import { Footer,Header, Nav ,TabPanes,UnlockWallet,Wallets} from '../components'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <div className="wrapper">

                {/* <!---==================Sidebar start====================---> */}
                <Header />

                {/* <!---==================Sidebar end====================--->

        <!---============Top menu Dashboard start==============---> */}
                <div className="body_content_wrap" id="myHeader">
                    {/* <!----top navbar start--> */}
                    <Nav />
                    {/* <!---=====top navbar end=======--->

            <!---============Body section start==================--->
            <!-------exchange page start------> */}
                    <section>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 py_0 offset-md-3 heading"><br />
                                    <div className="pools">
                                        {/* <!-- Nav pills --> */}

                                        {/* <!-- Tab panes --> */}
                                        <div className="tab-content">
                                            <div className="container py_0 tab-pane active">
                                                <div className="exchange_tab">


                                                <TabPanes/>

                                                
                                                    {/* <div className="exchange_wrap pt_5">
                                                        <div className="exchange_hd">
                                                            <ul className="nav nav-pills pool_tab" role="tablist">
                                                                <li className="nav-item">
                                                                    <Link className="nav-link active" to="/swap">Swap</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="#">Limit</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <Link className="nav-link" to="/liquidity">Liquidity</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="exchange_tools">
                                                            <div className="tools_img">
                                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z" fill="#7CFF6B"></path></svg><span className="price_set">30 </span>
                                                            </div>
                                                            <div className="tools_img" onClick={() => window.openNav10()}>
                                                                <i className="fa fa-cog"></i>
                                                            </div>
                                                            <div className="tools_img" onClick={() => window.openNav11()}>
                                                                <i className="fa fa-clock-o"></i>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                    {/* <div className="exch_bg">
                                                        <div className="exchange_wrap" style={{ "padding": "5px" }}>
                                                            <div className="exchange_tools">
                                                                <div className="bnb_btn bnb_position">
                                                                    <span className="swap_from">Swap From</span>
                                                                    <button onClick={() => window.openNav8()}>
                                                                        <img alt='' src="assets/image/bnb.png" />
                                                                        <span><b>BNB</b></span>
                                                                        <i className="fa fa-chevron-down"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="exchange_hd ex_font width_fluid">
                                                                <input type="number" className="input_set" placeholder="0.0" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="exchange_arrow">
                                                        <i className="fa fa-sort"></i>
                                                        <div ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500" preserveAspectRatio="xMidYMid meet" style={{ "width": "100%", "height": "100%", "transform": "translate3d(0px, 0px, 0px)", "content-visibility": "visible" }}><defs><clipPath id="__lottie_element_402"><rect width="500" height="500" x="0" y="0"></rect></clipPath><clipPath id="__lottie_element_404"><path d="M0,0 L500,0 L500,500 L0,500z"></path></clipPath></defs><g clip-path="url(#__lottie_element_402)"><g transform="matrix(4.5,0,0,4.5,207.25,194.875)" opacity="1" style={{ "display": "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(3.1819803714752197,-3.1819803714752197,3.1819803714752197,3.1819803714752197,363.2012939453125,326.5682373046875)" opacity="1" style={{ "display": "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g transform="matrix(-4.5,0,0,-4.5,292.75,305.125)" opacity="1" style={{ "display": " block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M28.945999145507812,-27.937000274658203 C28.966999053955078,-9.605999946594238 29.014999389648438,33.75299835205078 29.034000396728516,50.236000061035156"></path></g></g><g transform="matrix(-3.1819803714752197,3.1819803714752197,-3.1819803714752197,-3.1819803714752197,136.79869079589844,173.43174743652344)" opacity="1" style={{ "display": "block" }}><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="round" stroke-linejoin="round" fill-opacity="0" stroke="rgb(226,226,226)" stroke-opacity="1" stroke-width="5.6000000000000005" d=" M-20.548999786376953,-4.929999828338623 C-20.548999786376953,-4.929999828338623 -20.548999786376953,12.746999740600586 -20.548999786376953,12.746999740600586 C-20.548999786376953,12.746999740600586 -2.927000045776367,12.746999740600586 -2.927000045776367,12.746999740600586"></path></g></g><g clip-path="url(#__lottie_element_404)" transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ "display": "block" }}></g></g></svg></div>
                                                    </div>
                                                    <div className="exch_bg mb-4">

                                                        <div className="exchange_wrap" style={{ "padding": "5px" }}>
                                                            <div className="exchange_tools">
                                                                <div className="bnb_btn bnb_position">
                                                                    <p className="swap_from">Swap To (est):</p>
                                                                    <button className="min_wth" onClick={() => window.openNav8()}>
                                                                        <div className="bnbRotate"></div>
                                                                        <span className="selct_tkn">Select a token</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="exchange_hd ex_font width_fluid mt_14M">
                                                                <input type="number" className="input_set" placeholder="0.0" />
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    {/* <!-- Unlock Wallet Button --> */}

                                                    <UnlockWallet/>

                                                    {/* <div className="wallet_btn mr_set">
                                                        <button className="btn button btn-success" onClick={() => window.openNav9()}>Unlock Wallet</button>
                                                    </div> */}
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
                            <span onClick={() => window.closeNav10()}>&times;</span>
                        </div>
                        <div className="bx_shadow"></div>
                        <div className="overlay10-content">
                            <div className="swapbg10">
                                <div className="dead_line">
                                    <p style={{ "color": "black" }}>
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
                                    <p style={{ "color": "black" }}>
                                        Transaction deadline
                                    </p>
                                    <div className="seting_rate">
                                        <div className="setting_input set2">
                                            <input className="eqxqaX" type="number" placeholder="0.5%" />
                                            <div style={{ "color": "#fff" }}>Minutes</div>
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
                            <span onClick={() => window.closeNav11()}>&times;</span>
                        </div>
                        <div className="bx_shadow"></div>
                        <div className="overlay11-content">
                            <div className="">
                                <div className="dead_line font16">
                                    <p>
                                        Please connect your wallet to view your recent transactions
                                    </p>
                                    <div className="btn_close">
                                        <button className="btn" onClick={() => window.closeNav11()}>Close</button>
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
            <div id="myNav9" className="overlay9 textcenter">
                <Wallets />
            </div>

            {/* <!-----modal popup 8 for connect to wallet end--> */}



            {/* <!-----select token modal popup 8 for connect to wallet start--> */}
            <div id="myNav8" className="overlay8 textcenter">
                <div className="setting_close">
                    <span className="tokenset font_normal">Select a token <i className="fa fa-question"></i></span>
                    <span onClick={() => window.closeNav8()}>&times;</span>
                </div>
                <div className="overlay8-content text-left" >
                    <div className="swapbg8">
                        <div className="select_token">
                            <div className="select_input">
                                <input type="text" placeholder="Search name or paste address" className="eeRXNx" />
                            </div>
                        </div>
                        <div className="">
                            <div className="para">
                                <p>Common bases</p>

                            </div>
                            <div className="eth">
                                <div className="eth_img">
                                    <img alt='' src="assets/image/eth1.jpg" /> ETH
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/sushi.jpg" /> SUSHI
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/wbtr.jpg" /> WBTR
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/mim.jpg" />  MIM
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/spell.webp" />  SPELL
                                </div>


                            </div>

                            <div className="eth">
                                <div className="eth_img">
                                    <img alt='' src="assets/image/ice.webp" /> ICE
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/usdc.jpg" /> USDC
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/usdt.jpg" /> USDT
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/dai.png" />  DAI
                                </div>
                                <div className="eth_img">
                                    <img alt='' src="assets/image/frax.webp" />  FRAX
                                </div>


                            </div>


                            <div className="chose_token">

                                <div className="token_name">Token Name</div>
                                <div className="token_arrow"> <img alt=''
                                    src="assets/image/arrow_down.png" /> </div> </div> <div
                                        className="all_token scroll_track">
                                {/* <!----token list 1----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bnb.png" /> &nbsp;&nbsp;BNB</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 2----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ADA.png" /> &nbsp;&nbsp;ADA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 3----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ALPHA.png" /> &nbsp;&nbsp;ALPHA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 4----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ANKR.png" /> &nbsp;&nbsp;ANKR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 5----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ATM.png" /> &nbsp;&nbsp;ATM</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 6----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ATOM.png" /> &nbsp;&nbsp;ATOM</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 7----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/BAKE.png" /> &nbsp;&nbsp;BAKE</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 8----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bLBT.png" /> &nbsp;&nbsp;bLBT</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 9----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/usdt.png" />&nbsp;&nbsp; USDT</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                {/* <!----token list 10----> */}
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/wbnb.png" />&nbsp;&nbsp; WBNB</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/1inch.webp" /> &nbsp;&nbsp;1INCH</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/aave.jpg" /> &nbsp;&nbsp;AAVE</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/adx.webp" /> &nbsp;&nbsp;ADX</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/aer.webp" /> &nbsp;&nbsp;AERGO</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/aethc.webp" /> &nbsp;&nbsp;aETHc</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ageur.webp" /> &nbsp;&nbsp;agEUR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/agld.webp" /> &nbsp;&nbsp;AGLD</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/akro.webp" /> &nbsp;&nbsp;AKRO</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/alcx.webp" /> &nbsp;&nbsp;ALCX</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/aleph.webp" /> &nbsp;&nbsp;ALEPH</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/alpa.webp" /> &nbsp;&nbsp;ALPA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/alpaca.webp" /> &nbsp;&nbsp;ALPACA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/alpha.webp" /> &nbsp;&nbsp;ALPHA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/alusd.webp" /> &nbsp;&nbsp;alUSD</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/amp.jpg" /> &nbsp;&nbsp;AMP</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ampl.webp" /> &nbsp;&nbsp;AMPL</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/angle.webp" /> &nbsp;&nbsp;ANGLE</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ankr.webp" /> &nbsp;&nbsp;ANKR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ant.jpg" /> &nbsp;&nbsp;ANT</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/ant.jpg" /> &nbsp;&nbsp;ANT</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/apl3.webp" /> &nbsp;&nbsp;API3</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/apw.webp" /> &nbsp;&nbsp;APW</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/arch.webp" /> &nbsp;&nbsp;ARCH</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/arcx.webp" /> &nbsp;&nbsp;ARCX</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/armor.webp" /> &nbsp;&nbsp;ARMOR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/arnxm.jpg" /> &nbsp;&nbsp;ARNXM</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/asg.webp" /> &nbsp;&nbsp;ASG</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/assy.webp" /> &nbsp;&nbsp;ASSY</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/attr.webp" /> &nbsp;&nbsp;ATTR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/auction.webp" /> &nbsp;&nbsp;AUCTION</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/audio.webp" /> &nbsp;&nbsp;AUDIO</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/avastr.webp" /> &nbsp;&nbsp;AVASTR</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/axs.webp" /> &nbsp;&nbsp;AXS</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/axs.webp" /> &nbsp;&nbsp;AXS</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bab.webp" /> &nbsp;&nbsp;BAB</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bac.webp" /> &nbsp;&nbsp;BAC</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/badger.webp" /> &nbsp;&nbsp;BADGER</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bakc.webp" /> &nbsp;&nbsp;BAKC</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bal.webp" /> &nbsp;&nbsp;BAL</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bal.webp" /> &nbsp;&nbsp;BAL</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/banana.webp" /> &nbsp;&nbsp;BANANA</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/band.webp" /> &nbsp;&nbsp;BAND</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bank.webp" /> &nbsp;&nbsp;BANk</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/base.webp" /> &nbsp;&nbsp;BASE</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>

                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bask.webp" /> &nbsp;&nbsp;BASK</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bcp.webp" /> &nbsp;&nbsp;BCP</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bdi.webp" /> &nbsp;&nbsp;BDI</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>
                                <div className="token_list">
                                    <div className="token_icon">
                                        <h2><img alt='' src="assets/image/bfc.webp" /> &nbsp;&nbsp;BFC</h2>
                                    </div>
                                    <div className="token_list"></div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}   