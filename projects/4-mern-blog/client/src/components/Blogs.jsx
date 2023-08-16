import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get('http://localhost:5000/api/blog')
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data));
  }, []);
  return <div>Blogs</div>;
};

export default Blogs;
