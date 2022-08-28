export function Main() {

  function openNav9() {
    document.getElementById("myNav9").style.display = "block";
  }


    return (
        <>
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
                        <h1 className="text-3xl">My Liquidity Positions</h1>
                        <div className="back">

                          <h3 className="heading">Liquidity Provider Rewards</h3>
                          <h3 className="heading1">Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity</h3>
                        </div>
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
        </>
    )
}