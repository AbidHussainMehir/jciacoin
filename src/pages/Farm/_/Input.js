import React from 'react'

export const Input = () => {
  return (
    <>
      <div className="input_section">

        <div className="container-fluid set_nav_width">
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
            </div>




          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="farm_history">

                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr className="line">
                        <th className="head">Pool</th>
                        <th className="head">TVL <i className="fa fa-angle-down" /></th>
                        <th className="head">Rewards</th>
                        <th className="head">APR</th>

                      </tr>
                    </thead>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
