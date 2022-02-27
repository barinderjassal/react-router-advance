import { FC, createElement } from 'react';

import './styles/highlighted-quote.css';

export const HighlightedQuote: FC<{
  text: string;
  author: string;
}> = ({ text, author }) => {
  return (
    <figure className='quote'>
      <p>{text}</p>
      <figcaption>{author}</figcaption>
    </figure>
  );
};
