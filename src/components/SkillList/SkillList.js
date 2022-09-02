import React from 'react'
import skills from './skills.js'

const SkillList = () => {
    const ranNum = () => {
        Math.floor(Math.random() * 10000)
    }
    const SkillMap = skills.map(skill => <li id={skill.id} key={ranNum}>{skill.icon} {skill.skill}</li>)
    return (
            {SkillMap}

    )
}

export default SkillList