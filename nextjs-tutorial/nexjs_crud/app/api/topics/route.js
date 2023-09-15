// CRUD
import connectMongoDB from '@/libs/mongodb';
import Topic from '@/models/Topic';

import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const res = await Topic.find();
  console.log(res);
  //   const topics = await res.json();

  return NextResponse.json(res);
}

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({ message: 'Topic is created' }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    { message: 'Topic is deleted sucessfully' },
    { status: 200 }
  );
}
