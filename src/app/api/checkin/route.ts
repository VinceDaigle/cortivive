import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const checkIns = await prisma.checkIn.findMany({
    where: { userId: session.user.id },
    orderBy: { date: "desc" },
    take: 30,
  });

  return NextResponse.json({ checkIns });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { mood, stress, bloating, sleep, notes } = await req.json();

  const checkIn = await prisma.checkIn.create({
    data: {
      userId: session.user.id,
      mood: Math.min(5, Math.max(1, Number(mood))),
      stress: Math.min(5, Math.max(1, Number(stress))),
      bloating: Math.min(5, Math.max(1, Number(bloating))),
      sleep: Math.min(5, Math.max(1, Number(sleep))),
      notes: notes || null,
    },
  });

  return NextResponse.json({ checkIn });
}
