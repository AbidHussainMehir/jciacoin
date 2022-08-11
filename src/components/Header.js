import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <nav id="sidebar">
            <div class="sidebar-header">
                <Link to="/">
                    <img src="assets/image/logo.png" />
                </Link>
            </div>
            <ul class="list-unstyled components fa_icon_Set">
                <li class="active">
                    <Link to="/"><i class="fas fa-home"  style={{"color":"#fff"}} aria-hidden="true"></i> Home </Link>
                </li>
                 <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> Pool</a><i class="fa-solid fa-check-to-slot"></i>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/browse"> Browse</Link>
                        </li>
                        <li>
                            <Link to="/imports">Import</Link>
                        </li> 
                        <li>
                            <Link to="/migrate">Migrate</Link>
                        </li> 
                    </ul>
                </li> 
                <li>
                    <a href="#tradeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> Trade</a>
                    <ul class="collapse list-unstyled" id="tradeSubmenu">
                        <li>
                            <Link to="/swap"> Exchange</Link>
                        </li>
                        <li>
                            <Link to="/liquidity">Liquidity</Link>
                        </li> 
                    </ul>
                </li> 
                <li>
                    <a href="#gameSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> Game</a>
                    <ul class="collapse list-unstyled" id="gameSubmenu">
                        <li>
                            <a href="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i> Game</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Game 2</a>
                        </li> 
                    </ul>
                </li>
                <li>
                    <a href="#FarmsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> Farms</a>
                    <ul class="collapse list-unstyled" id="FarmsSubmenu">
                        <li>
                            <Link to="/farm"> Your Farms</Link>
                        </li>
                        <li>
                            <Link to="/AllFrams">All Farms</Link>
                        </li> 
                    </ul>
                </li>  
                <li>
                    <Link to="/farms"><i class="fas fa-file" style={{"color":"#fff"}} aria-hidden="true"></i>Farms</Link>
                </li> 
                <li>
                    <Link to="#"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>NFT</Link>
                </li> 

                <li>
                    <a href="#nftSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> NFT Marketplace</a>
                    <ul class="collapse list-unstyled" id="nftSubmenu">
                        <li>
                            <Link to="/explore"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i> Explore</Link>
                        </li>
                        <li>
                            <Link to="/openmarket"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Open Market</Link>
                        </li> 

                         <li>
                            <Link to="/gameasserts"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Game Assets</Link>
                        </li> 
                         
                    </ul>
                </li> 
                 <li>
                    <Link to="/launchpad"><i class="fas fa-gamepad" style={{"color":"#fff"}} aria-hidden="true"></i>Launchpad</Link>
                </li> 
                 <li>
                    <a href="#contactSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="fas fa-exchange-alt"  style={{"color":"#fff"}} aria-hidden="true"></i> Contact</a>
                    <ul class="collapse list-unstyled" id="contactSubmenu">
                        <li>
                            <a href="#"><i class="fas fa-twitter" style={{"color":"#fff"}} aria-hidden="true"></i> Twitter</a>
                        </li>
                        <li>
                            <a href="#"><i class="fas fa-instagram" style={{"color":"#fff"}} aria-hidden="true"></i>Instagram</a>
                        </li> 

                         <li>
                            <a href="#"><i class="fas fa-telegram" style={{"color":"#fff"}} aria-hidden="true"></i>Telegram</a>
                        </li> 
                        <li>
                            <a href="#"><i class="fas fa-medium" style={{"color":"#fff"}} aria-hidden="true"></i>Medium</a>
                        </li> 
                         
                    </ul>
                </li> 

            </ul>
        </nav>
    </>
  )
}
