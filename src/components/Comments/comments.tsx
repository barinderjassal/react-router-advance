import { FC, createElement ,useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { CommentsList } from '.';
import { getAllComments } from '../../api';
import { useHttp } from '../../hooks/use-http';
import { LoadingSpinner } from '../UI';
import { NewCommentForm } from './new-comment-form';

import './styles/comments.css';

export const Comments: FC = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params: any = useParams();
  const { quoteId } = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]);

  let comments;
  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    // load the comments-list component
    comments = <CommentsList comments={loadedComments} />;
  }

  if (status === 'completed' && (!loadedComments || loadedComments.length === 0)) {
    comments = <p className='centered'>No comments yet!</p>;
  }

  return (
    <section className='comments'>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAdddedComment={addedCommentHandler} quoteId={quoteId} />}
      {comments}
    </section>
  );
};
