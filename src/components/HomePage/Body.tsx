import React from 'react';
import '../../css/HomePage/Body.scss'
import Contact from './Contact'
import Project from './Project'
import Skill from './Skill'

export default function Body() {
    const isMobile = window.innerWidth <= 768;

    const descProjectBachelorproef = 'Vergelijking tussen 2D en 3D visualisaties van albumreleases voor een webapplicatie. Bachelorproef voor de opleiding Toegepaste Informatica aan HoGent.'
    const descProjectDevops = 'Een DEVOPS project in opdracht van Delaware bestaande uit een dotnet webapplicatie en een Android applicatie.'
    const descProjectQuotesapp = 'Een minimalistische Android-applicatie, ontwikkeld in Kotlin, die inspirerende quotes presenteert.'
    const descProjectReleasesapp = 'Een webapplicatie die albumreleases weergeeft en gedetailleerde informatie daarover presenteert.'
    const descProjectFluvius = 'Een project in opdracht van Fluvius bestaande uit een webapplicatie en desktopapplicatie.'

    const bachelorproefImage = require('../../images/bachelorproef/desktopHomeThreeHovered.jpg')
    const DEVOPSImage = require('../../images/DEVOPS/desktopTracking.jpeg')
    const quotesImage = require('../../images/quotesApp/dashboardCropped.jpg')
    const releasesImage = require('../../images/releasesApp/home.png')
    const fluviusImage = require('../../images/fluviusApp/categorie.png')


    return (
        <>
            <div className="main">
                <div className='aboutDivider' style={isMobile ? { display: 'none' } : undefined} />
                <div className='aboutText'>
                    <p>
                        Hallo! Ik ben Ruben Schrurs, een ambitieuze student Toegepaste Informatica aan HoGent. Mijn passie ligt in web development, waar ik actief werk aan innovatieve projecten. Hieronder vindt u een overzicht van mijn projecten en verworven vaardigheden.
                    </p>
                </div>

                <div className='projects' id='projectsSection'>
                    <h1>Projects</h1>
                    {
                        <>
                            <Project projectName='Bachelorproef'
                                projectDescription={descProjectBachelorproef}
                                projectImage={bachelorproefImage}
                                projectLink='/projectDetails/Bachelorproef?skills=React,Node.js,Three.js,HTML,CSS,Figma'
                                alignImageRight={false}
                            />
                            <Project projectName='Delaware DEVOPS Project'
                                projectDescription={descProjectDevops}
                                projectImage={DEVOPSImage}
                                projectLink='/projectDetails/DelawareDEVOPSProject?skills=Kotlin,C%23,HTML,CSS,DEVOPS,MySQL,Figma'
                                alignImageRight={true}
                            />
                            <Project projectName='Android Quotes App'
                                projectDescription={descProjectQuotesapp}
                                projectImage={quotesImage}
                                projectLink='/projectDetails/AndroidQuotesApp?skills=Kotlin'
                                alignImageRight={false}
                            />
                            <Project projectName='Music Releases App'
                                projectDescription={descProjectReleasesapp}
                                projectImage={releasesImage}
                                projectLink='/projectDetails/MusicReleasesApp?skills=React,Node.js,HTML,CSS'
                                alignImageRight={true}
                            />
                            <Project projectName='Fluvius WebApp'
                                projectDescription={descProjectFluvius}
                                projectImage={fluviusImage}
                                projectLink='/projectDetails/FluviusWebApp?skills=Java,React,Node.js,HTML,CSS'
                                alignImageRight={false}
                            />
                        </>
                    }
                </div>
                <div className='skills' id='skillsSection'>
                    <h1>Skills</h1>
                    <div className='devSkills'>
                        <div className='javascriptSkills'>
                            <h2>JavaScript</h2>
                            <Skill skillName='React' skillLevel={5} />
                            <Skill skillName='Node.js' skillLevel={4} />
                            <Skill skillName='Three.js' skillLevel={2} />
                        </div>
                        <div className='javaSkills'>
                            <h2>Java</h2>
                            <Skill skillName='Java' skillLevel={3} />
                            <Skill skillName='Kotlin' skillLevel={2} />
                            <Skill skillName='C#' skillLevel={2} />
                        </div>
                        <div className='otherDevSkills'>
                            <h2>Other</h2>
                            <Skill skillName='HTML' skillLevel={5} />
                            <Skill skillName='CSS' skillLevel={5} />
                            <Skill skillName='DEVOPS' skillLevel={3} />
                            <Skill skillName='MySQL' skillLevel={3} />
                            <Skill skillName='Python' skillLevel={2} />
                        </div>
                    </div>
                    <div className='nonDevSkills'>
                        <h2>Non-Dev</h2>
                        <Skill skillName='Figma' skillLevel={2} />
                        <Skill skillName='Ableton' skillLevel={2} />
                        <Skill skillName='Sales' skillLevel={2} />
                    </div>
                </div>
                <div className='contact' id='contactSection'>
                    <h1>Contact</h1>
                    <Contact />
                </div>
            </div>
        </>
    )
}