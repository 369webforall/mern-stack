import React from 'react';

interface Props {
  params: { id: number };
}

const UserPage = ({ params: { id } }: Props) => {
  console.log(id);
  return <div>UserPage {id}</div>;
};

export default UserPage;

// let props = {
//     id: 1
//}
