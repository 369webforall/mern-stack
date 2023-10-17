import { NextRequest, NextResponse } from 'next/server';
import schema from '../schema';
import prisma from '@/prisma/client';
interface Props {
  params: { id: string };
}

export async function GET(requst: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) {
    return NextResponse.json({ error: 'no user found' }, { status: 400 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  // firt we check if use exist.

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) {
    return NextResponse.json({ error: 'no user found' }, { status: 400 });
  }
  const updatedUser = await request.json();

  const validation = schema.safeParse(updatedUser);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 404 }
    );
  }
  const saveUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: updatedUser.name,
      email: updatedUser.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 201 });
}

//delete

export async function DELETE(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user) {
    return NextResponse.json({ error: 'no user found' }, { status: 404 });
  }

  await prisma.user.delete({ where: { id: user.id } });
  return NextResponse.json({ mesage: 'user deleted' }, { status: 200 });
}
