import React from 'react';
import EditTopicForm from '@/app/components/EditTopicForm';
const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);
    console.log(res);
    if (!res.ok) {
      throw new Error('Faild to fetch the topic');
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
  return res.json();
};

const EditTopic = async ({ params }) => {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description, _id } = topic;
  return <EditTopicForm id={_id} title={title} description={description} />;
};

export default EditTopic;
