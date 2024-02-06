import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import CartContext from "./context/cartContext";
import Login from "./context/Login";

class App extends Component {
  state = {
    currentUser: null,
  };

  handleLoggedIn = (username) => {
    console.log(`Getting the user: ${username}`);
    const user = { name: "Sihas" };
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider
          value={{
            currentUser: this.state.currentUser,
            onLoggedIn: this.handleLoggedIn,
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
