import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {

    function titleClick() {
        window.location.reload()
    }

    return(
        <div className='welcome_body'>
              <h1 onClick={titleClick} style={{textAlign: 'center'}}> 🎵Find_Music_App🎵</h1>
              <img src='https://i.pinimg.com/originals/ab/45/bb/ab45bb4451536652faca51ae4f42d5dd.gif' /> 
              <NavLink to="/tracks">
              <button className='btn btn-success btn_start'>Start</button>  
              </NavLink>     
        </div>   
    )
}