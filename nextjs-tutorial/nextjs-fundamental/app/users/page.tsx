import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';
interface Props {
  searchParams: { shortOrder: string };
}
const UserPage = ({ searchParams: { shortOrder } }: Props) => {
  return (
    <div>
      <Link href="/users/new" className="btn bg-sky-500 text-white">
        Add New User
      </Link>
      <h1>List of Users</h1>
      <UserTable sortOrder={shortOrder} />
    </div>
  );
};

export default UserPage;
