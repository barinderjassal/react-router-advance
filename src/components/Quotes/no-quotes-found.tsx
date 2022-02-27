import { FC, createElement } from 'react';
import { Link } from 'react-router-dom';

import './styles/no-quotes-found.css';

export const NoQuotesFound: FC = () => {
  return (
    <div className='noquotes'>
      <p>No quotes found!</p>
      <Link className='btn' to='/new-quote'></Link>
    </div>
  );
};
