import { NextRequest, NextResponse } from 'next/server';
export async function GET(request) {
  const name = request.nextUrl.searchParams.get('name');
  const age = request.nextUrl.searchParams.get('age');
  return NextResponse.json({ name, age });
}

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  return NextResponse.json(body);
}
