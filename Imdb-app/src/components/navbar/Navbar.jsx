import { Link } from "react-router";
import Logo from "../../assets/MovieLogo.jpg";
const Navbar = () => {
  return (
    <div className="flex space-x-7 items-center justify-center py-4 pl-2 font-bold">
      <Link to="/">
        <img src={Logo} className="w-[50px]" />
      </Link>
      <Link to="/" className="text-blue-700 text-2xl font-bold">
        <p>HOME</p>
      </Link>
      <Link to="/watchlist" className="text-blue-700 text-2xl">
        <p>WATCHLIST</p>
      </Link>
    </div>
  );
};

export default Navbar;
