import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API, updateToken } from "../api/api";
import { useState, useEffect } from "react";
import Login from "./Login";

const Logout = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const history = useHistory();

  const logoutHandler = (e) => {
    e.preventDefault()
    API
      .post("logout")
      .then((res) => {
        localStorage.removeItem("token");
        history.push("/login")
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(()=>{
    localStorage.getItem("token") && setIsLoggedIn(true)
  }, [])

  return (
    <>
      {isLoggedIn ? <button onClick={logoutHandler}>Logout</button> : <Login/>}
    </>
  );
};

export default Logout;
