import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(result.data);
    }
    getUsers();
  });

  return (
    <div>
      <ul>
        {users.map((user) => (
          <Fragment key={user.id}>
            <h1>User Info of {user.name}</h1>
            <li>username: {user.username}</li>
            <li>email: {user.email}</li>
            <h3>Address</h3>
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
            <li>{user.address.zipcode}</li>
            <li>Latitude: {user.address.geo.lat}</li>
            <li>Longitude: {user.address.geo.lng}</li>
            <h3>Contact Info</h3>
            <li>Phone: {user.phone}</li>
            <li>Website: {user.website}</li>
            <h3>Company</h3>
            <li>{user.company.name}</li>
            <li>{user.company.catchPhrase}</li>
            <li>{user.company.bs}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Users;
