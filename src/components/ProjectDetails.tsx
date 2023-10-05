import React from 'react'
import { ImageType, bach, devops, fluvius, quotes, releases } from '../images/images'
import '../css/ProjectDetails.scss'

export default function ProjectDetails() {
    const projectName = new URLSearchParams(window.location.search).get('name')?.split('_').join(' ')
    const skillsArray = new URLSearchParams(window.location.search).get('skills')?.split(',')

    const isBachelorproef = projectName === 'Bachelorproef'
    const isDEVOPS = projectName === 'Delaware DEVOPS Project'

    let images: string[] = []

    let imagesWithMobile: ImageType[] = []

    switch (projectName) {
        case 'Bachelorproef':
            images = bach
            break;
        case 'Delaware DEVOPS Project':
            imagesWithMobile = devops
            break;
        case 'Fluvius Webapp':
            images = fluvius
            break;
        case 'Android Quotes App':
            images = quotes
            break;
        case 'Music Releases App':
            images = releases
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nemo quas! Ex, nulla repellat itaque corporis hic voluptatem molestias et facere velit aliquid placeat! Cumque tenetur eius sequi cum ipsum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga voluptatibus vitae voluptatum, aut reiciendis porro odit qui quas non ipsa asperiores, magni facilis debitis placeat ratione vel eos nihil suscipit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error tempora temporibus dolor accusamus expedita, mollitia veritatis fugiat odit sequi, iusto voluptatem optio perspiciatis at voluptas recusandae corporis qui ipsam modi?</p>
                        </div>
                        <div className='projectLinks'>
                            <h1>Links</h1>
                            {isBachelorproef && <a href="https://bachelorproef-webshop-conventioneel.vercel.app/">Visit Conventional version</a>}
                            {isBachelorproef && <a href="https://bachelorproef-webshop-threejs.vercel.app/">Visit Three.js version</a>}
                            <a href="/">Github Link</a>
                        </div>
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

                        isDEVOPS ?
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