import React from 'react'

export const Main = () => {
    function openNav9() {
        document.getElementById("myNav9").style.display = "block";
      }
    
      function openNav8() {
        document.getElementById("myNav8").style.display = "block";
      }
    
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 py_0 offset-md-3 heading"><br />
                        <div className="pools">

                            <div className="tab-content">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div className="go">
                                                <a href="/"><i className="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
                                            </div>
                                            <h1 className="text-3xl">Import Pool</h1>
                                            <div className="back">


                                                <h3 className="heading1">Tip: Use this tool to find pairs that don't automatically appear in the interface</h3>
                                            </div>


                                            <div className="exchange_tab">

                                                <div className="exch_bg">
                                                    <div className="exchange_wrap" style={{ "padding": "5px" }}>
                                                        <div className="exchange_tools">
                                                            <div className="bnb_btn bnb_position">
                                                                <span className="swap_from">Swap From</span>
                                                                <button onClick={openNav8}>
                                                                    <img alt='' src={require("../../../assets/image/eth.jpg")} />
                                                                    <span><b>ETH</b></span>
                                                                    <i className="fa fa-chevron-down"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className="exchange_arrow">
                                                  
                                                    <div >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
                                                </div>
                                                <div className="exch_bg mb-4">

                                                    <div className="exchange_wrap" style={{ "padding": "5px" }}>
                                                        <div className="exchange_tools">
                                                            <div className="bnb_btn bnb_position">
                                                                
                                                                <button className="min_wth" onClick={openNav8}>
                                                                    <div className="bnbRotate"></div>
                                                                    <span className="selct_tkn" style={{ "position": "relative !important", "top": "23px !important", "left": "10px" }}>Select a token</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>

                                                <div className="wallet_btn mr_set">
                                                    <button className="btn button btn-success" onClick={openNav9}>Connect to a Wallet</button>
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
