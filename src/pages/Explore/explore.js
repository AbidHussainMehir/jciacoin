import React from 'react'
import { Main, Onsale, Settings } from './_'

export const Explore = () => {
    return (
        <>
            <section>
                <div className="container">
                    <Main />
                   
                    <Onsale />
                </div>
            </section>
            <Settings />
        </>
    )
}
