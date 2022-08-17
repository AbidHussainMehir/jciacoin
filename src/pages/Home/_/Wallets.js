import React from 'react'

export const Wallets = () => {
  return (
    <>
        <div class="setting_close">
            <span class="tokenset">Connect to a wallet</span>
            <span  onClick={() => window.closeNav9()}>&times;</span>
        </div>
        <div class="bx_shadow"></div>
        <div class="overlay9-content">
            <div class="swapbg9">
                <div class="connect_wallet">
                    {/* <!----wallet box 1--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>Metamask</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/meta_mask.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 2--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>TrustWallet</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/trust_wallet.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 3--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>MathWallet</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/math_wallet.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 4--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>MathWallet</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/math_wallet.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 5--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>WalletConnect</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/connect_wallet.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 6--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>Binance Chain Wallet</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/binance_chain_wallet.png" />
                        </div>
                    </button>
                    {/* <!----wallet box 7--> */}
                    <button class="connect_metamast">
                        <div class="wallet_name">
                            <h3>SafePal Wallet</h3>
                        </div>
                        <div class="wallet_name">
                            <img alt='' src="assets/image/safepal_wallet.png" />
                        </div>
                    </button>
                    <div class="connect_info">
                        <a href="#"><i class="fa fa-question"></i>Learn how to connect</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
