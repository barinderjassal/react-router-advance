import { FC, createElement } from 'react';

import './styles/comment-item.css';

export const CommentItem: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <li className='item'>
      <p>{text}</p>
    </li>
  );
};
