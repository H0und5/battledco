import { useState } from 'react';

import Button from './components/Button';

import classes from './App.module.css';
import QuoteCard from './components/QuoteCard';

import quoteArray from './QuoteArray';

// import modules above.


// useEffect(() => {}, [])






const App = () => {

  const [ quote, setQuote ] = useState({
    quote: `${quoteArray[0].Quote}`,
    name: `${quoteArray[0].Name}`,
  });

  // get a quote handler function

  const generateQuoteHandler = () => {
    const randomQuote = Math.floor(Math.random() * 224);

    const selectedName = quoteArray[randomQuote].Name
    const selectedQuote = quoteArray[randomQuote].Quote;

    setQuote({
      name: selectedName,
      quote: selectedQuote
    })
  }


  // JSX returned

  return (
    <div className={classes.Container}>
      <QuoteCard name={quote.name} quote={quote.quote}/>
      <Button getNewQuote={generateQuoteHandler}/>
    </div>
  );
}

export default App;
