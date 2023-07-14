import { useState } from "react";
import { API, updateToken } from "../api/api";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUSer] = useState({
    username: "",
    password: "",
  });

  const history = useHistory()

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setUSer({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    API.post("login", user)
    .then((res)=> {
      updateToken(res.data.token)
      history.push("/friends")
    })
    .catch((err) => {
      console.log(err.response.data.error)
    })

    setUSer({
      username: "",
      password: "",
    });
  };

  return (
    <>
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
    </>
  );
};

export default Login;
