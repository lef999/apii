import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  // Define the state variables once
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the user data once when the component mounts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Save data to state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching the user data", error);
        setError("There was an issue fetching the user data"); // Set error message
        setLoading(false); // Set loading to false even on error
      });
  }, []); // Empty array means this effect runs only once after the component mounts

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
