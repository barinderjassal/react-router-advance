import { createElement, FC, Fragment, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { QuoteItem } from './quote-item';

import './styles/quote-list.css';

const sortQuotes = (quotes: any, ascending: boolean) => {
  return quotes.sort((quoteA: any, quoteB: any) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

export const QuoteList: FC<{
  quotes: any;
}> = ({ quotes }) => {
  const history = useHistory();
  const location = useLocation();

  // extract query params from location object
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const changeSortingHandler = () => {
    // we can also pass objects in history.push method to make the complex urls look more readable
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc': 'asc')}`
    })

    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc': 'asc')}`);
  };

  return (
    <Fragment>
      <div className='sorting'>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className='list'>
        {sortedQuotes.map((quote: any) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};
