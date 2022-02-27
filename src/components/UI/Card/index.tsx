import { FC, createElement } from 'react';

import './styles/card.css';

export const Card: FC = ({ children }) => {
  return (
    <div className='card'>
      {children}
    </div>
  );
};
