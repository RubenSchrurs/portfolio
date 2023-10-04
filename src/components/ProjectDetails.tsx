import React from 'react'
import '../css/ProjectDetails.scss'
import { useEffect, useState } from 'react'

export default function ProjectDetails() {
    const [aspectRatio, setAspectRatio] = useState(window.innerWidth / window.innerHeight)

    const projectName = window.location.pathname.split('/').pop()
    const isBachelorproef = projectName === 'Bachelorproef'
    const skillsArray = new URLSearchParams(window.location.search).get('skills')?.split(',')

    let images : string[] = []

    if (projectName === 'Bachelorproef') {
        images = [
            '../images/bachelorproef/desktopHomeThreeHovered.jpg',
            '../images/bachelorproef/desktopDetailsThree.jpg',
            '../images/bachelorproef/desktopHomeConventioneel.jpg',
            '../images/bachelorproef/desktopSearch.jpg',
            '../images/bachelorproef/desktopDetailConventioneel.jpg',
            '../images/bachelorproef/desktopCart.jpg',
        ]
    }

    useEffect(() => {
        function handleResize() {
            setAspectRatio(window.innerWidth / window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
                            {isBachelorproef && <a href="/">Visit Conventional version</a>}
                            {isBachelorproef && <a href="/">Visit Three.js version</a>}
                            <a href="/">Github Link</a>
                        </div>
                    </div>
                    <div className='projectMainImage'>
                        <img src={`https://picsum.photos/${(aspectRatio * window.innerWidth / 5).toFixed(0)}/${(aspectRatio * window.innerHeight / 3).toFixed(0)}`} alt='projectImage' />
                    </div>
                </div>
            </div>
            <div className='projectDetailsSectionTwo'>
                <div className='projectSkills'>
                    <h1>Used Skills</h1>
                    <div className='skills'>
                        {skillsArray?.map((skill, index) => {
                            return <p key={index}>{skill}</p>
                        })}
                    </div>
                </div>
                <div className='projectDetailsImages'>
                    <h1>Images</h1>

                    <img src={`https://picsum.photos/${(aspectRatio * window.innerWidth / 5).toFixed(0)}/${(aspectRatio * window.innerHeight / 3).toFixed(0)}`} alt='projectImage' />
                    <img src={`https://picsum.photos/${(aspectRatio * window.innerWidth / 5).toFixed(0)}/${(aspectRatio * window.innerHeight / 3).toFixed(0)}`} alt='projectImage' />
                    <img src={`https://picsum.photos/${(aspectRatio * window.innerWidth / 5).toFixed(0)}/${(aspectRatio * window.innerHeight / 3).toFixed(0)}`} alt='projectImage' />
                </div>
            </div>
        </>
    )
}