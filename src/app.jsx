import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/router";
import { useState } from "react";
import UserContext from "./store/user-context";
import { useContext } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = {
    email: "bob@email.com",
    password: "1234"
  };

  const ctx = useContext(UserContext);

  ctx.user = user;
  ctx.isLoggedIn = loggedIn;
  ctx.login = (checkUser) => {
    if (checkUser.email === user.email &&
      checkUser.password === user.password) {
      setLoggedIn(true);
      console.log("logged in");
    } else console.log("logged in failed");
  };
  ctx.logout = () => {
    setLoggedIn(false);
  }



  return (
    <>
      <UserContext.Provider value={
        {
          user: ctx.user,
          isLoggedIn: ctx.isLoggedIn,
          login: ctx.login,
          logout: ctx.logout
        }}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ UserContext.Provider>
    </>
  )
}

export default App;