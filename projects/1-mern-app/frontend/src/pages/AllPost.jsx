import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
const AllPost = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const getData = async () => {
    const response = await fetch('http://localhost:8080/');
    const result = await response.json();
    if (!response.ok) {
      setError(result.message);
    }
    if (response.ok) {
      setData(result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const handleUpdate = async (id) => {
  //   console.log(id);
  // };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/${id}`, {
      method: 'DELETE',
    });
    const result = response.json();
    if (!response.ok) {
      setError(result.message);
    }
    if (response.ok) {
      setError('Deleted Sucessfully');
      setTimeout(() => {
        setError('');
        getData();
      }, 2000);
    }
  };
  return (
    <div>
      {error && (
        <h1 className="bg-orange-400 px-2 py-2 text-white text-lg">{error}</h1>
      )}
      <h1>Show all data</h1>

      {data?.map((obj) => (
        <Card
          data={obj}
          key={obj._id}
         
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default AllPost;
