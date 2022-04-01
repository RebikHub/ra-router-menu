import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className='menu'>
      <NavLink className='menu__item' to={'/ra-router-menu/'}>Гоночн​ое такси</NavLink>
      <NavLink className='menu__item' to={'/ra-router-menu/drift'}>Дрифт-такси</NavLink>
      <NavLink className='menu__item' to={'/ra-router-menu/timeattack'}>Гонка ​​​​​​Time Attack</NavLink>
      <NavLink className='menu__item' to={'/ra-router-menu/forza'}>Forza Karting Sochi</NavLink>
    </nav>
  );
}
