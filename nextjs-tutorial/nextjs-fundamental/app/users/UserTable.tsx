import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';
interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('No user found');
  }

  return await res.json();
}

interface Props {
  sortOrder: string;
}
const UserTable = async ({ sortOrder }: Props) => {
  const users: User[] = await getUsers();

  const sortedUsers = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );
  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="border border-gray-400">
              <Link href="/users?shortOrder=name">Name</Link>
            </th>
            <th className="border border-gray-400">
              <Link href="/users?shortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-400">{user.name}</td>
              <td className="border border-gray-400">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
