import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            <header className="header">
                <section className="content_header_container">
                    <Link to='/'>
                        <img src="./src/assets/img/LegendaryMotorsport-GTAV-Logo.webp" alt="" className="logo_header" />
                    </Link>
                    <p className="text_top">ELEGÍ ENTRE NUESTROS ALTOS DEPORTIVOS</p>
                    <p className="text_top">DE ALTA GAMA A GRANDES PRECIOS</p>
                </section>
            </header>
        </>

    )
}
