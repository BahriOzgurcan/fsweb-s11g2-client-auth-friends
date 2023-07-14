import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <div>
      <p>Hash hash</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/friends">
        <button>FriendList</button>
      </Link>
      <Link to="/friends_add">
        <button>AddFriend</button>
      </Link>
      <Link to="/logout">
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default Header;
