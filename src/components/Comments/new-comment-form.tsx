import { FC, createElement, useRef, useEffect } from 'react';
import { LoadingSpinner } from '..';
import { addComment } from '../../api';
import { useHttp } from '../../hooks/use-http';

import './styles/new-comment-form.css';

export const NewCommentForm: FC<{
  onAdddedComment: () => void;
  quoteId: string;
}> = ({ onAdddedComment, quoteId }) => {
  const commentTextRef = useRef('' as any);

  const { sendRequest, status, error } = useHttp(addComment);

  // to notify the parent component that we are done adding the comment
  useEffect(() => {
    if (status === 'completed' && !error) {
      onAdddedComment();
    }
  }, [onAdddedComment, status, error]);


  const submitFormHandler = (event: any) => {
    event.preventDefault();

    // optional: Could validate here

    const commentText = commentTextRef.current.value;
    // send comment to server
    sendRequest({
      commentData: {
        text: commentText
      },
      quoteId: quoteId
    });
    commentTextRef.current.value = '';
  };

  return (
    <form className='form' onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner/>
        </div>
      )}
      <div className='control' onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows={5} ref={commentTextRef}></textarea>
      </div>
      <div className='actions'>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};
