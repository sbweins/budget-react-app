import Transaction from "./Transaction";

function Transactions({ transactions }) {
  let total = 0;
  for (let i = 0; i < transactions.length; i++) {
    total = total + Number(transactions[i].amount);
  }

  return (
    <div>
      <h1> Transactions</h1>
      <h2>Bank Account Total: ${total} </h2>
      <div className="Transactions">
        <section>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Categories</th>
                <th>Amount ($)</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return (
                  <Transaction
                    key={index}
                    transaction={transaction}
                    index={index}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Transactions;
