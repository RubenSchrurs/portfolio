import React from 'react'
import '../../css/HomePage/Skill.scss'

export default function Skill({ skillName, skillLevel }) {

    return (
        <>
            <div className='skillContainer'>
                <h3>{skillName}</h3>
                <ul className='skillLevel'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <li key={index} className={index < skillLevel ? 'active' : 'inactive'} />
                    ))}
                </ul>
            </div>
        </>
    )
}