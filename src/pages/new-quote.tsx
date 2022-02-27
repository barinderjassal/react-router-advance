import { FC, createElement, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addQuote } from '../api';
import { QuoteForm } from '../components';
import { useHttp} from '../hooks/use-http';

const NewQuote: FC<any> = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      // useHistory returns the history object which holds a stack of page history
      // and we can use this object to add a new page using PUSH method and pass the url
      history.push('/quotes');
    }
  }, [history, status]);

  const addQuoteHandler = (quoteData: any) => {
    console.log(quoteData);
    sendRequest(quoteData);
  };

  return (
    <Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} isLoading={status === 'pending'} />
    </Fragment>
  );
};

export default NewQuote;
