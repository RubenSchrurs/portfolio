import React from 'react';
import '../../css/HomePage/Project.scss'

export default function Project({ projectName, projectDescription, projectImage, projectLink, alignImageRight }) {

    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <div className='projectContainer'>
                {alignImageRight && !isMobile ? <img src={projectImage} alt={projectName} className='projectImage' /> : null}
                <div className='projectInfo' style={alignImageRight && !isMobile ? { alignItems: 'flex-end' } : undefined}>
                    <div className='projectNameAndDescription' style={alignImageRight && !isMobile ? { alignItems: 'flex-end', textAlign: 'end' } : undefined}>
                        <h2 className='projectName'>{projectName}</h2>
                        <p className='projectDescription'>{projectDescription}</p>
                    </div>
                    <a href={projectLink} className='projectLink'>Project Link</a>
                </div>
                {!alignImageRight && !isMobile ? <img src={projectImage} alt={projectName} className='projectImage' /> : null}
            </div>
        </>
    )
}