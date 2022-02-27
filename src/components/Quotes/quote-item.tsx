import { FC, createElement } from 'react';
import { Link } from 'react-router-dom';

import './styles/quote-item.css';

export const QuoteItem: FC<{
  text: string;
  id: string;
  author: string;
}> = ({ text, author, id }) => {
  return (
    <li className='item'>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <Link to={`/quotes/${id}`} className='btn'>View Fullscreen</Link>
      {/* 
          /quotes/quoteId will take to quote-detail component as mentioned in the app routing
      */}
    </li>
  );
};
