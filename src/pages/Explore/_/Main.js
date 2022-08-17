import React from 'react'

export const Main = () => {
    return (
        <>
         <div className="row">
                        <div className="col-md-12 py_0  heading"><br />
                            <div className="pools">
                                {/* <!-- Nav pills --> */}

                                {/* <!-- Tab panes --> */}
                            </div>
                        </div>
                    </div>
            <div className="tab-content">
                <div className="container py_0 tab-pane active">
                    <div className="exchange_tab">
                        <div className="exchange_wrap pt_5">
                            <div className="exchange_hd">
                                <h1>Explore</h1>
                                <p>A market made for NFT, where everything is special 😋</p>

                            </div>
                            <div className="exchange_tools">

                                <a href="" className="btn1">
                                    Create
                                </a>

                                <a href="" className="btn1">
                                    My Artworks
                                </a>
                            </div>
                        </div>
                        <h3>1,038,055 Items</h3>

                    </div>





                </div>
            </div>

    <br/>

    <div className="row">
        <div className="col-md-10">
            <div className="farm_usd_set farm_input1">
                <div className="icon_search">
                    <i className="fa fa-search"></i>
                </div>
                <input id="Enter_amount" className="input_search" placeholder="Search by token or pair" />
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
            <br/>
        </div>



    </div>  
          </>
    )
}
