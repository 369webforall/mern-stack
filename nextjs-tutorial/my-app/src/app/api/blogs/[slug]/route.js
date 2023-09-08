import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  console.log(params);
  const slug = params.slug;

  return NextResponse.json({ slug });
}
