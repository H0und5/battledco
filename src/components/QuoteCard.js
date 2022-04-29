import classes from './QuoteCard.module.css';

const QuoteCard = ({ quote, name }) => {

  console.log(quote, name)

  return (
    <div className={classes.quoteCardContainer}>
      <div className={classes.quoteCardInternal}>
        {quote}

        {name}
      </div>

    </div>
  )
}

export default QuoteCard;