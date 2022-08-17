import React from 'react'

export const DropDown = () => {
    return (
        <>
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
        </>
    )
}
