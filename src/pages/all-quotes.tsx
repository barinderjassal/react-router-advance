import { FC, createElement, Fragment, useEffect } from 'react';
import { NoQuotesFound, QuoteList } from '../components';
import { getAllQuotes } from '../api';
import { useHttp} from '../hooks/use-http';
import { LoadingSpinner } from '../components';

const AllQuotes: FC = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <p className='centered'>
        {error}
      </p>
    );
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  return (
    <Fragment>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuotes
