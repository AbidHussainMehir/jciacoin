import React from 'react'

export const Main = () => {
    return (
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 py_0 offset-md-3 heading"><br />
                        <div class="pools">

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
                                                                    <img alt='' src={require("../../../assets/image/eth.jpg")} />
                                                                    <span><b>ETH</b></span>
                                                                    <i class="fa fa-chevron-down"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="exchange_arrow">
                                                  
                                                    <div >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                                                </div>
                                                <div class="exch_bg mb-4">

                                                    <div class="exchange_wrap" style={{ "padding": "5px" }}>
                                                        <div class="exchange_tools">
                                                            <div class="bnb_btn bnb_position">
                                                                
                                                                <button class="min_wth" onClick={() => window.openNav8()}>
                                                                    <div class="bnbRotate"></div>
                                                                    <span class="selct_tkn" style={{ "position": "relative !important", "top": "13px !important", "left": "10px" }}>Select a token</span>
                                                                </button>
                                                            </div>
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
    )
}
