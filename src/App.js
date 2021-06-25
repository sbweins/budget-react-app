import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import NavBar from "./Components/NavBar";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios.get(`${API}/transactions`).then((response) => {
      const { data } = response;
      setTransactions(data);
    });
  }, []);

  const addTransaction = (newTransaction) => {
    axios
    .post(`${API}/transactions`, newTransaction)
    .then((response) => {
      setTransactions([...transactions, newTransaction]);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  
  const deleteTransaction = (index) => {
    axios.delete(`${API}/transactions/${index}`).then(
      (response) => {
        const updateArray = [...transactions];
        updateArray.splice(index, 1);
        setTransactions(updateArray);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const updateTransaction = (updatedTransaction, index) => {
    axios.put(`${API}/transactions/${index}`, updatedTransaction).then(
      (response) => {
        const updateArray = [...transactions];
        updateArray[index] = updatedTransaction;
        setTransactions(updateArray);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/hidden">
              <h2>You've found a hidden route!</h2>
            </Route>
            <Route exact path="/transactions">
              <Index transactions={transactions} />
            </Route>
            <Route path="/transactions/new">
              <New addTransaction={addTransaction} />
            </Route>
            <Route exact path="/transactions/:index">
              <Show
                transactions={transactions}
                deleteTransaction={deleteTransaction}
              />
            </Route>
            <Route path="/transactions/:index/edit">
              <Edit
                transactions={transactions}
                updateTransaction={updateTransaction} />
            </Route>
            <Route path="*">
              <FourOFour />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;