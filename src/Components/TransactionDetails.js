import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import { apiURL } from "../util/apiURL";

import axios from "axios";

const API = apiURL();

function TransactionDetails(props) {
  const { deleteTransaction } = props;
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        const { data } = response;
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [index, history]);

  const handleDelete = () => {
    deleteTransaction(index);
    history.push("/transactions");
  };

  return (
    <article>
      <h5>Date: {transaction.date}</h5>
      <h5>Category: {transaction.category}</h5>
      <h5>Amount: {transaction.amount}</h5>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(TransactionDetails);
