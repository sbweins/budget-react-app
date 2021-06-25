import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

function TransactionEditForm(props) {
  let { index } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    date: "",
    category: "",
    amount: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTransaction(transaction, index);
    history.push(`/transactions/${index}`);
  };

  return (
    <div className="Edit">
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
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          required
          placeholder="Category Type: Bills, Education, Entertainment, Etc.."
          value={transaction.category}
          onChange={handleTextChange}
        />
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

        <input type="submit" />
      </form>
      <br />
      <Link to={`/transactions/${index}`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default TransactionEditForm;
