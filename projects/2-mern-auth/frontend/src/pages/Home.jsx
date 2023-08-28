import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;
let firstRender = true;
const Home = () => {
  const [user, setUser] = useState();
  const RequestSend = async () => {
    const res = await axios
      .get('http://localhost:8000/api/user', {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      RequestSend().then((data) => setUser(data.user));
    }
  }, []);
  return <div>{user && <h1>{user.name}</h1>}</div>;
};

export default Home;
