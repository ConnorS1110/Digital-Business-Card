import React from 'react'
import Info from './Info.js'
import About from './About.js'
import Interests from './Interests.js'
import Footer from './Footer.js'
import detailStyle from '../Styles/details.module.css'

export default function Card() {
    return (
        <>
            <div className="card">
                <Info />
                <div className={ detailStyle.header}>
                    <About />
                    <Interests />
                </div>
                <Footer className="footer" />
            </div>
        </>

    )
}
