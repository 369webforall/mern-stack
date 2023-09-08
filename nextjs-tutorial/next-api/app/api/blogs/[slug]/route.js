import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const slug = params.slug;

  return NextResponse.json({ slug });
}
