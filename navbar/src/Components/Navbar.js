import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {CiCircleRemove} from 'react-icons/ci'




const Navbar = () => {
   
    const showmenu = () => {
        var x = document.getElementById('ul');
        x.classList.toggle('abcd')
        
    }

    

    
    return (
        <div className="navbar">
         
            <div className="menue" id = "menue">
            <button  id = "buttonone" className = "buttonone" onClick = {showmenu}>
                    <FaBars/>
                    </button >
                    
                <ul id = "ul"  className ="abc">
                    <button  onClick = {showmenu} id = "buttontwo" className = "buttontwo">

                        <CiCircleRemove/>
                        <p>Menu</p>
                    </button>
                    
                    <li>
 
                    <Link  
                    to ="main"   spy ={true}
                    activeClass='active'>Festival</Link></li>
                    <li>
                        
                    <Link to ="trailer" spy ={true}
                    activeClass='active'>Trailer</Link></li>
                    <li>
                        
                    <Link to ="program"  spy ={true}
                    activeClass='active'>Program</Link></li>
                    <li>
                        
                    <Link to ="location" spy ={true}
                    activeClass='active'>Location</Link></li>
                </ul>

            </div>
            <div className = "button">
                <button>Ticket</button>
            </div>

        </div>
    )
}

export default Navbar
