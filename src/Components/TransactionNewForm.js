import { useState } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

function TransactionNewForm(props) {

  const [transaction, setTransaction] = useState({
    date: "",
    category: "",
    amount: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <div className="Edit">
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={transaction.date}
          type="date"
          onChange={handleTextChange}
          placeholder="Month/Date/Year"
          required
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          placeholder="Category Type: Bills, Education, Entertainment, Etc.."
          value={transaction.category}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="amount">Amount ($):</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="$ X.XX"
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transaction.from}
          placeholder="Name of: Person, Business, Organization, Etc.."
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <Link to={`/`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default withRouter(TransactionNewForm);
