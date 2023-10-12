import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface Users {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}
const UserTable = async ({ sortOrder }: Props) => {
  const users: Users[] = await getUsers();

  const sorted = sort(users).asc(
    sortOrder === 'email' ? (user) => user.email : (user) => user.name
  );

  return (
    <div>
      <h1>Users</h1>
      <table className="table">
        <thead className="bg-red-400">
          <tr>
            <th className="border border-slate-300">
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th className="border border-slate-300">
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id}>
              <td className="border border-slate-300">{user.name}</td>
              <td className="border border-slate-300">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
