import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb"

const skills = [
    {
        skill: 'HTML',
        icon: <FaHtml5 />,
        id: 'html'
    },
    {
        skill: 'CSS',
        icon: <FaCss3Alt />,
        id: 'css'
    },
    {
        skill: 'JavaScript',
        icon: <TbBrandJavascript />,
        id: 'javascript'
    },
    {
        skill: 'React',
        icon: <FaReact />,
        id: 'react'
    },
    {
        skill: 'Git / GitHub',
        icon: <FaGitAlt />,
        id: 'git'
    }
]

export default skills