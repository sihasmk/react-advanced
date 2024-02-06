import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  componentDidMount() {
    console.log("Context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List of{" "}
            {userContext.currentUser
              ? userContext.currentUser.name
              : `no one in particular.`}{" "}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

MovieList.contextType = UserContext;

export default MovieList;
