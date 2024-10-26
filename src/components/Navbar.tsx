import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
    <div className= 'flex justify-between items-center'>
        <div className='tex-xl font-medium'>Muhammad Azhar </div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
            <li className='menulink'><a href='#hero'>Home </a> </li>
            <li className='menulink'><a href='#about'>About</a></li>
            <li className='menulink'><a href='#projects'>Project</a></li>
            <li className='menulink'><a href ='#skills'>Skill</a></li>
            <li className='menulink'><a href='contact'>Contact</a></li>

       </ul>
        <AiOutlineMenu className='md:hidden' size={30}/>

    </div>
    
    </div>
  )
}

export default Navbar
