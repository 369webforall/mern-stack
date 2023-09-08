import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return NextResponse.json({ comments: ['all comments'] });
}

// http://localhost:3000/api/blogs/slug/comments/commentId
