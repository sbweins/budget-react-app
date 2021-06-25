import Transactions from "../Components/Transactions";

export default function Index({ transactions }) {
  return (
    <div className="Index">
      <Transactions transactions={transactions} />
    </div>
  );
}
