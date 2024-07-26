import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const property = await prisma?.property.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(property);
  } catch (error: any) {
    console.log("Error at API/Poroperty post");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
