import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.propertyId) {
      return new NextResponse("No request body or propertyId provided", {
        status: 400,
      });
    }

    const info = await prisma.additionalFees.create({
      data: {
        name: body.name,
        amount: body.amount,
        message: body.message,
        propertyId: body.propertyId,
      },
    });

    return NextResponse.json(info);
  } catch (error: any) {
    console.error("Error at API/Property post:", error.message);
    return new NextResponse("Error at API/Property post", { status: 500 });
  }
}
