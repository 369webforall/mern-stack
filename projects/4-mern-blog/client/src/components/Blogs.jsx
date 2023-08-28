import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
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
  return (
    <div>
      {/* {blogs && blogs.map((blog) => <Card blog={blog} key={blog._id} />)} */}
      <Card />
    </div>
  );
};

export default Blogs;
