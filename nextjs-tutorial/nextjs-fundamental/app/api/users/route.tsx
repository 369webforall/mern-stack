import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
interface Props {
  name: string;
}

// GET, POST, PUT, DELETE
// localhost:3000/api/users
export function GET(requst: NextRequest) {
  return NextResponse.json([{ id: 1, name: 'dev' }]);
}

export async function POST(request: NextRequest) {
  const body: Props = await request.json();
  const validation = schema.safeParse(body);
  console.log(validation);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 404 }
    );
  }

  return NextResponse.json(body, { status: 201 });
}
