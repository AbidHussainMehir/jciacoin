import React from 'react'

export const FarmPair = () => {
    return (
        <>
            <section >
                <div className=""style={{backgroundImage:`url(${require("../../../assets/image/bubble-pattern.png")})` }}>
                    <div className="container-fluid set_nav_width">
                        <div className="row">
                            <div className="col-md-12 py_0 heading"><br />
                                <div className="pools">

                                    <div className="tab-content">
                                        <div className="container-fluid set_nav_width">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="flex">
                                                        <div className="top_pading">
                                                            <h1 className="farm">Farm Menu</h1>
                                                            <p className="farm1">Earn fees and rewards by depositing and staking your tokens to the platform.</p>
                                                        </div>
                                                        <div className="bottom">
                                                            <button className="btn-success1">
                                                                Apply for Farm Pairs
                                                            </button>
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
                </div>
            </section>
        </>
    )
}
