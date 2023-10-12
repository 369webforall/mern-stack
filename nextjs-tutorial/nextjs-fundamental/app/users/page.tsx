import React from 'react';
import UserTable from './UserTable';
import { Button } from '@radix-ui/themes';
interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div className="w-full">
      <Button>Add User</Button>
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
