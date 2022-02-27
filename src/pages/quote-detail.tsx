import { FC, createElement, Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { getSingleQuote } from '../api';
import { Comments, HighlightedQuote, LoadingSpinner } from '../components';
import { useHttp } from '../hooks/use-http';


const QuoteDetail: FC = () => {
  const params: any = useParams();

  // we are using useRouteMatch to make sure that we dont have to manually
  // change all the nested URLs if the main url changes in future.
  const match = useRouteMatch();

  const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);
  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

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

  if (!loadedQuote.text) {
    return <p>No Quote Found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />

      {/* 
        This link will be displayed only when the url is /quotes/quoteId
        Basically, using Nested Route feature to conditionally render the content
      */}
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>View Comments</Link>
        </div>
      </Route>

      {/* Adding Nested Route which shows the comment feature on the same page but different route */}
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
