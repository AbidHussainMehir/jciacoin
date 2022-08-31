import React from 'react'
import BnbImage from '../../../assets/image/bnb.png'
import ADAImage from '../../../assets/image/ADA.png'
import PinImage from '../../../assets/image/pin.jpg'
export const InputSection = () => {
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

            <div className="col-md-2">

              <div className="dropdown">
                <button className="btn2 dropdown-toggle" type="button" data-toggle="dropdown">Your Farms
                </button>
                <ul className="dropdown-menu">
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
                    <tbody>
                      <tr className="line">
                        <td>
                          <div className="main_div">
                            <div className="img_set">
                              <img alt='' className="imgagess" src={BnbImage} /><img alt='' className="imgagess1" src={ADAImage} />
                            </div>
                            <div className="">
                              <h1 className="icon_logo">

                                BNB
                                /
                                ADA
                              </h1>
                              <p className="icon_logo1">
                                WireSwap Farm
                              </p>
                            </div>
                          </div>

                        </td>

                        <td className="top_paddding">$93,495,969</td>
                        <td><span className="top_paddding1">2574 </span><img alt='' className="img_small" src={PinImage} /></td>

                        <td className="icon_logo">8.37%  <i className="fa fa-question-circle" aria-hidden="true"></i>
                          <p className="annu">
                            annualized
                          </p>
                        </td>
                      </tr>

                    </tbody>
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
