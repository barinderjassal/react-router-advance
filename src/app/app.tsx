import * as React from 'react';
import { createElement, FC, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, LoadingSpinner } from '../components';

/**
 * Edited at the last: Introduced Lazy Loading
 *  
 */
const NewQuote = React.lazy(() => import('../pages/new-quote'));
const AllQuotes = React.lazy(() => import('../pages/all-quotes'));
const QuoteDetail = React.lazy(() => import('../pages/quote-detail'));
const NotFound = React.lazy(() => import('../pages/not-found'));

export const App: FC = () => {
  return (
    <Layout>
      <Suspense fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }>
        {/* 
          Switch make sure that only one Route is activated at the given time
          and it is the route which is matched first
        */}
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          
          {/* 
            This Route has to come last because it will 
            only be considered if no other route matches
          */}
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};
