import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Display = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    async function display() {
        try {
            const res = await axios.get("http://localhost:7000/api/data/getmethod");
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
            <span>{user._id}</span><br />
            <span>{user.firstname}</span> <br />
            <span>{user.secondname}</span><br />
            <span>{user.age}</span><br />
            <span>{user.address}</span><br /> 
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Display;
