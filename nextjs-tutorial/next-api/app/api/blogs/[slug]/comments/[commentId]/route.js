import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return NextResponse.json(params);
}
