import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  // Define V
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch 
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching the user data", error);
        setError("There was an issue fetching the user data"); 
        setLoading(false); 
      });
  }, []); 

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "teal" }}>User List</h1>

      {/* Display loading message, error message, or the user list */}
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <ul>
          {listOfUsers.map((user) => (
            <li key={user.id}>
              <div className="user-card">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
