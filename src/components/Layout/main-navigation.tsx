import { createElement, FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/main-navigation.css';

export const MainNavigation: FC = () => {
  return (
    <header className='header'>
      <div className='logo'>Awesome Quotes</div>
      <nav className='nav'>
        <ul>
          <li><NavLink to='/quotes' activeClassName='active'> All Quotes</NavLink></li>
          <li><NavLink to='/new-quote' activeClassName='active'> Add a Quote</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}