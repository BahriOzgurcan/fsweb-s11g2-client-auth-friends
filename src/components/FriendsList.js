import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useHistory } from "react-router-dom";

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  function dataLoad() {
    API.get("friends")
      .then((res) => {
        setFriendsList([...friendsList, ...res.data]);
      })
      .catch();
  }

  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("token") ? 
    dataLoad() 
    : history.push("/login")
  }, []);

  return (
    <>
      {friendsList.map((friend) => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
    </>
  );
};

export default FriendsList;
