import React from 'react'

export const FarmsHistory = () => {
    return (
        <>
        <div className="container">
            <div className="farm_history">
                <div className="hist_hd"><h2 style={{ "color": "#fff" }}>Farm History</h2></div>
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Wallet Address</th>
                                <th>Amount</th>
                                <th>Day</th>
                                <th>Txn</th>
                                <th>Time Span</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>xyzaa...69139</td>
                                <td>1000</td>
                                <td>30</td>
                                <td>xyzaa...a262d</td>
                                <td>1639586328</td>
                            </tr>
                            <tr>
                                <td>xyzaa...69139</td>
                                <td>1000</td>
                                <td>30</td>
                                <td>xyzaa...a262d</td>
                                <td>1639586328</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
    )
}
