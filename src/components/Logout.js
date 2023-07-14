import { API, updateToken } from "../api/api";

const Logout = () => {

  const logoutHandler = (e) => {
    e.preventDefault()
    API
      .post("logout")
      .then((res) => {
        localStorage.removeItem("token");
        // updateToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Logout;
