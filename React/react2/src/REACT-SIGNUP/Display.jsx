import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Display = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function display() {
        try {
            const res = await axios.get("http://localhost:3000/api/data/getmethod");
            console.log(res.data);
            setstate(res.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
    }
    display();
  }, []);
  console.log("getmethod", state);
  return (
    <div>
    <ul>
        {state.map((user) => (
          <li key={user.id}>
            <span>{user.firstname}</span>
            <span>{user.secondname}</span>
            <span>{user.address}</span>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Display;
