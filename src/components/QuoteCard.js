import classes from './QuoteCard.module.css';

const QuoteCard = ({ quote, name }) => {

  console.log(quote, name)

  return (
    <div className={classes.quoteCardContainer}>
      <div className={classes.quoteCardInternal}>

        <p className={classes.quoteProperty}>
          {quote}
        </p>

        <div className={classes.divider}></div>

        <p className={classes.nameProperty}>
          {name}
        </p>
      </div>

    </div>
  )
}

export default QuoteCard;