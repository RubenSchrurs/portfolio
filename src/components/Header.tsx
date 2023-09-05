import React from 'react'
import '../css/Header.scss'
import { useLocation } from 'react-router'

export default function Header() {

    const location = useLocation()

    return (
        <>
            <header>
                <a href='/' id='logo'>RUBEN SCHRURS</a>
                {
                    location.pathname === '/' &&
                    
                    <div className='links'>
                        <a href="/#projectsSection">Projects</a>
                        <a href="/#skillsSection">Skills</a>
                        <a href="/#contactSection">Contact</a>
                    </div>
                }
            </header>
        </>
    )
}