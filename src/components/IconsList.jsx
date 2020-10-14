import React from 'react'
import Icon from './Icon'

const iconsData = [
    {
        id: 0,
        name: "JavaScript",
        icon: (<i className="fab fa-js-square"></i>),
        rotate: 34,
    },
    {
        id: 1,
        name: "Node JS",
        icon: (<i className="fab fa-node"></i>),
        rotate: 10,
    },
    {
        id: 2,
        name: "CSS 3",
        icon: (<i className="fab fa-css3-alt"></i>),
        rotate: -10,
    },
    {
        id: 3,
        name: "HTML",
        icon: (<i className="fab fa-html5"></i>),
        rotate: -60,
    },
    {
        id: 4,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: 35,
    },
    {
        id: 5,
        name: "React",
        icon: (<i className="fab fa-react"></i>),
        rotate: 0,
    },
    {
        id: 6,
        name: "SASS",
        icon: (<i className="fab fa-sass"></i>),
        rotate: 34,
    },
    {
        id: 7,
        name: "NPM",
        icon: (<i className="fab fa-npm"></i>),
        rotate: 45,
    },
    {
        id: 8,
        name: "GIT",
        icon: (<i className="fab fa-git-alt"></i>),
        rotate: 34,
    },
    {
        id: 9,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: -35,
    },
    {
        id: 10,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: 50,
    },
    {
        id: 11,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: 0,
    },
    {
        id: 12,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: 0,
    },
    {
        id: 13,
        name: "CODE ICON",
        icon: (<i className="fas fa-code"></i>),
        rotate: 0,
    },
    
]

export default function IconsList() {
    return (
        <>
            {iconsData.map((item, i) => {
               return <Icon key={i} i={i} item={item} rotate={item.rotate}/>
            })}
        </>
    )
}
