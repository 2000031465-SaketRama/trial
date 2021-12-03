import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <li>
    <Link to='sign-up'>
      <button className='btn'>Sign Up</button>
    </Link>
    
     <Link to='sign-in'>
     <button className='btn' style={{ marginLeft: '.5rem' }} >Login</button>
   </Link>
   </li>
  );
}
