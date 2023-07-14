import {
  Route,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import Header from "./components/Header";

function App() {


  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends_add" > 
        {localStorage.getItem("token") ? <AddFriend /> : <Redirect to="/login" replace></Redirect>}
        </Route>
        <Route exact path="/logout" > 
        {localStorage.getItem("token") ? <Logout /> : <Redirect to="/login" replace></Redirect>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
