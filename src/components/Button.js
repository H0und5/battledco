
import classes from './Button.module.css';

const Button = ({getNewQuote}) => {


  const getQuoteHandler = (event) => {
    event.preventDefault();

    getNewQuote();
  }


  return (
    <button onClick={getQuoteHandler} className={classes.button}>
      <p>Give me another quote</p>
    </button>
  )
}

export default Button;