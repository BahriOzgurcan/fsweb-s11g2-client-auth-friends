import { useState } from "react";
import { API } from "../api/api";
import { updateToken } from "../api/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddFriend = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  const history = useHistory()

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    API.post("friends", newUser)
    .then((res)=> {
      updateToken(res.data.token);
      history.push("/friends")
    })
    .catch((err) => {
      console.log(err.response.data.error)
    })

    setNewUser({
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
          name="name"
        />
        <input
          onChange={changeHandler}
          type="email"
          name="email"
        />
        <button type="submit">Add friend</button>
      </form>
    </>
  );
};

export default AddFriend;
