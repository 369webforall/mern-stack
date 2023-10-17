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

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  // if (id > 10) {
  //   return NextResponse.json({ error: 'no user found' }, { status: 400 });
  // }

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: id, name: body.name }, { status: 201 });
}

//delete

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  // if (id > 10) {
  //   return NextResponse.json({ error: 'No user found' }, { status: 404 });
  // }

  return NextResponse.json({ mesage: 'user deleted' }, { status: 200 });
}
