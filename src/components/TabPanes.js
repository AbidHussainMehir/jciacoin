import React from 'react'
import { Link } from 'react-router-dom'

export const TabPanes = () => {
    return (
        <>
            <div className="exchange_wrap pt_5">
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
            </div>
            <div className="exch_bg">
                <div className="exchange_wrap" style={{ "padding": "5px" }}>
                    <div className="exchange_tools">
                        <div className="bnb_btn bnb_position">
                            <span className="swap_from">Swap From</span>
                            <button onClick={() => window.openNav8()}>
                                <img src="assets/image/bnb.png" alt='' />
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
            </div>
        </>
    )
}
