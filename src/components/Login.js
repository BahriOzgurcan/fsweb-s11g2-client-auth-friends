import { useEffect, useState } from "react";
import { API, updateToken } from "../api/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const history = useHistory();

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    API.post("login", user)
      .then((res) => {
        updateToken(res.data.token);
        setIsLoggedIn(true);
        // history.push("/friends");
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });

    setUser({
      username: "",
      password: "",
    });
  };

  useEffect(()=>{
    localStorage.getItem("token") && setIsLoggedIn(true)
  }, [])

  return (
    <>
      {isLoggedIn ? (
        <div>Already Logged In.</div>
      ) : (
        <div>
          <form onSubmit={submitHandler}>
            <input
              onChange={changeHandler}
              type="text"
              placeholder="Type your username"
              name="username"
            />
            <input
              onChange={changeHandler}
              type="password"
              placeholder="Type your password"
              name="password"
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
