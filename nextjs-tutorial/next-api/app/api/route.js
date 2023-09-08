import { NextResponse } from 'next/server';

export async function GET(request) {
  const name = request.nextUrl.searchParams.get('name');
  const age = request.nextUrl.searchParams.get('age');
  return NextResponse.json({ name, age });
}

//http://localhost:3000/api

export async function POST(request) {
  const body = await request.json();
  return NextResponse.json(body);
}

//http://localhost:3000/api/blogs/
//http://localhost:3000/api/blogs/slug
