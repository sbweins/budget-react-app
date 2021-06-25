import { Link } from "react-router-dom";

function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        <p>{transaction.date}</p>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.category}</Link>
      </td>
      <td>
        <p>{transaction.amount}</p>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;
