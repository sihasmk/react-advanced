import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log(`cartContext is `, cartContext);

  return (
    <div>
      Movie Row of{" "}
      {userContext.currentUser
        ? userContext.currentUser.name
        : "no one in particular."}
    </div>
  );
}

export default MovieRow;
