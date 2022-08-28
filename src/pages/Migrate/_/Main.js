import React from 'react'

export const Main = () => {
    function openNav9() {
        document.getElementById("myNav9").style.display = "block";
      }
  return (
    <section>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-6 py_0 offset-md-3 heading"><br />
                        <div className="pools">
                            <div className="tab-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="go">
                                                <a href="/"><i className="fa fa-angle-left" aria-hidden="true"></i> Go Back</a>
                                            </div>
                                            <h1 className="text-3xl">Migrate Uniswap Liquidity</h1>


                                            <button className=" btn-success1" onClick={openNav9}>Connect to a Wallet</button>



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
