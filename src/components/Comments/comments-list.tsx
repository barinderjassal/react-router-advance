import { FC, createElement } from 'react';
import { CommentItem } from './comment-item';

import './styles/comments-list.css';

export const CommentsList: FC<{
  comments: any;
}> = ({ comments }) => {
  return (
    <ul className='comments'>
      {comments.map((comment: any) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};
