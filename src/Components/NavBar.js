import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <h1>
        <Link to="/">
          <img
            src={
              "https://i.pinimg.com/originals/45/57/24/455724f1105f77c3217b7a48f64f71ec.png"
            }
            alt="gold coin"
            width="35"
            height="35"
          />
        </Link>
        <Link to="/transactions">Transactions</Link>
      </h1>
      <button>
        <Link to="/transactions/new">New Transaction</Link>
      </button>
    </nav>
  );
}
