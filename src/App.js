import Button from './components/Button';

import classes from './App.module.css';
import QuoteCard from './components/QuoteCard';

import quoteArray from './QuoteArray';

function App() {

  console.log(quoteArray)

  return (
    <div className={classes.Container}>

      <p>{quoteArray[0].Name}</p>
      <QuoteCard />
      <Button />
    </div>
  );
}

export default App;
