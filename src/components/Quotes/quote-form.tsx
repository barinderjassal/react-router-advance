import { createElement, FC, Fragment, useRef, useState } from 'react';
import { Card, LoadingSpinner } from '../UI';
import { Prompt } from 'react-router-dom';

import './styles/quote-form.css';

export const QuoteForm: FC<{
  isLoading: boolean;
  onAddQuote: (value: any) => void;
}> = ({ isLoading, onAddQuote }) => {
  const authorInputRef = useRef('' as any);
  const textInputRef = useRef('' as any);

  const [isFormFocused, setIsFormFocused] = useState(false);

  const  submitFormHandler= (event: any) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFormFocusHandler = () => {
    setIsFormFocused(true);
  };

  const finishFormEnteringHandler = () => {
    setIsFormFocused(false);
  };

  return (
    <Fragment>
      <Card>
        <form className='form' onSubmit={submitFormHandler} onFocus={onFormFocusHandler}>
          {isLoading && (
            <div className='loading'>
              <LoadingSpinner />
            </div>
          )}

          <div className='control'>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className='control'>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows={5} ref={textInputRef}></textarea>
          </div>
          <div className='actions'>
            <button onClick={finishFormEnteringHandler} className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
      <Prompt
        when={isFormFocused}
        message={() => 'All your entered data will be lost if you leave this page!'}
      />
    </Fragment>
  );
};
