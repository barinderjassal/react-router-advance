import { createElement, FC, Fragment } from 'react';
import { MainNavigation } from './main-navigation';

import './styles/layout.css';

export const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className='main'>
        {children}
      </main>
    </Fragment>
  )
}