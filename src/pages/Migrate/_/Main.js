import React from 'react'

export const Main = () => {
  return (
    <section>
            <div class="container-fluid">
                <div class="row" >
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
                                            <h1 class="text-3xl">Migrate Uniswap Liquidity</h1>


                                            <button class=" btn-success1" onClick={() => window.openNav9()}>Connect to a Wallet</button>



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
