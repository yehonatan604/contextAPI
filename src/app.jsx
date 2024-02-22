import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/router";
import { useState } from "react";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = {
    email: "bob@email.com",
    password: "1234"
  };

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App;