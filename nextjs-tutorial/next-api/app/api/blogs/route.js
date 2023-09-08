import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    blogs: [{ id: 1, title: 'blog title', body: 'blog body' }],
  });
}
