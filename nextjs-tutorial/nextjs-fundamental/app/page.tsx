import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { authOption } from './api/auth/[...nextauth]/route';
export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <main>
      <h1>Learning Fundamental of Nextjs</h1>
      <h2>{session && <span>{session.user!.name}</span>}</h2>
    </main>
  );
}
