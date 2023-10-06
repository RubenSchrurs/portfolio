import React from 'react'
import { ImageType, bach, devops, fluvius, quotes, releases } from '../images/images'
import '../css/ProjectDetails.scss'

export default function ProjectDetails() {
    const projectName = new URLSearchParams(window.location.search).get('name')?.split('_').join(' ')
    const skillsArray = new URLSearchParams(window.location.search).get('skills')?.split(',')
    const isBachelorproef = projectName === 'Bachelorproef'
    const hasMobile = projectName === 'Delaware DEVOPS Project' || projectName === 'Android Quotes App'

    let images: string[] = []
    let imagesWithMobile: ImageType[] = []
    let projectInfo = ""
    let gitLink = ""

    switch (projectName) {
        case 'Bachelorproef':
            images = bach
            projectInfo = "Voor mijn bachelorproef onderzocht ik hoe 3D technologieën geïntegreerd kunnen worden in webshops. Na het volgen van tien lessen van de Three.js journey cursus, rees de vraag of dit voor ontwikkelaars daadwerkelijk een meerwaarde biedt. Mijn onderzoek richtte zich op het vergelijken van een conventionele webshop met een webshop die gebruikmaakt van Three.js, om de voordelen en beperkingen van beide benaderingen te analyseren. Mijn bijdrage omvatte diepgaand onderzoek, de ontwikkeling van een prototype webshop met Three.js en het documenteren van de resultaten in mijn bachelorproef."
            gitLink = "https://github.com/RubenSchrurs/bachelorproef_webshop_threejs"
            break;
        case 'Delaware DEVOPS Project':
            imagesWithMobile = devops
            projectInfo = "In dit project, in opdracht van Delaware, werkten we aan zowel een dotnet webapplicatie als een Android applicatie. Mijn hoofdzakelijke rol was gericht op de front-end ontwikkeling voor beide applicaties. Dit gaf me de kans om te werken binnen een DEVOPS omgeving, wat een waardevolle leerervaring was. Ik nam ook graag de verantwoordelijkheid voor het plannen en structureren van het werk. Daarnaast speelde ik een rol in het sturen van het team door gerichte vragen te stellen, waardoor we onze energie efficiënt konden inzetten op de aspecten met de hoogste prioriteit."
            gitLink = ""
            break;
        case 'Android Quotes App':
            imagesWithMobile = quotes
            projectInfo = "Dit project was een persoonlijk initiatief om mijn kennis van Kotlin te verbeteren. Ik heb een minimalistische Android-applicatie ontwikkeld die inspirerende quotes presenteert. Ik heb geleerd om te werken met de Room database, die ik gebruikte om de quotes op te slaan. Ik heb ook geleerd om te werken met de Android Jetpack Navigation component, waardoor ik een beter inzicht kreeg in de navigatie tussen schermen. Ten slotte heb ik geleerd om te werken met de Android Jetpack Lifecycle component, die ik gebruikte om de levenscyclus van de applicatie te beheren."
            gitLink = "https://github.com/RubenSchrurs/androidQuotesApp"
            break;
        case 'Music Releases App':
            images = releases
            projectInfo = "Dit project was een persoonlijk initiatief om mijn kennis van React en Node.js te verbeteren. Ik heb een webapplicatie ontwikkeld die albumreleases weergeeft en gedetailleerde informatie daarover presenteert. Ik heb geleerd om te werken met de React Context API, die ik gebruikte om de gebruikersinterface te beheren. Ik heb ook geleerd om te werken met de React Router, waardoor ik een beter inzicht kreeg in de navigatie tussen schermen. Ten slotte heb ik geleerd om te werken met de Node.js Express router, die ik gebruikte om de routes van de applicatie te beheren."
            gitLink = ""
            break;
        case 'Fluvius Webapp':
            images = fluvius
            projectInfo = "Dit groepsproject in opdracht van Fluvius betrof de ontwikkeling van zowel een desktop- als een webapplicatie voor MVO-beheer. Mijn bijdrage was divers, variërend van front-end werk in Java met Scene Builder tot back-end en front-end taken in JavaScript, inclusief belangrijke functies zoals breadcrumbs en datasource raadpleging. Ik heb geleerd te werken met essentiële tools zoals Trello, Plus voor Trello en GitHub, waardoor ik een beter inzicht kreeg in efficiënt teamwerk en projectoverzicht. "
            gitLink = "https://github.com/RubenSchrurs/FluviusAppJavascript"
            break;
        default:
            break;
    }

    return (
        <>
            <div className='projectDetailsSectionOne'>
                <div className='projectDetailsContent'>
                    <div className='projectTitleInfoAndLinks'>
                        <div className='projectTitleAndInfo'>
                            <h1>{projectName}</h1>
                            <p>{projectInfo}</p>
                        </div>
                        {
                            gitLink === "" ? null :
                                <div className='projectLinks'>
                                    <h1>Links</h1>
                                    {isBachelorproef && <a href="https://bachelorproef-webshop-conventioneel.vercel.app/">Visit Conventional version</a>}
                                    {isBachelorproef && <a href="https://bachelorproef-webshop-threejs.vercel.app/">Visit Three.js version</a>}
                                    <a href={gitLink}>Github Repo</a>
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div className='projectDetailsSectionTwo'>
                <div className='projectSkills'>
                    <h1>Skills Used</h1>
                    <div className='skills'>
                        {skillsArray?.map((skill, index) => {
                            return <p key={index}>{skill}</p>
                        })}
                    </div>
                </div>
                <div className='projectDetailsImages'>
                    <h1>Images</h1>

                    {

                        hasMobile ?
                            imagesWithMobile.map((image, index) => {
                                return <img key={index} src={image.url} alt='projectImage' style={{ width: `${image.isMobile ? "30%" : "100%"}` }} />
                            })
                            :
                            images.map((image, index) => {
                                return <img key={index} src={image} alt='projectImage' style={{ width: "100%" }} />
                            })

                    }
                </div>
            </div>
        </>
    )
}