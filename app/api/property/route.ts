import { createProperty } from "@/actions/createProperty";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const property = await createProperty(body);

    return NextResponse.json(property);
  } catch (error: any) {
    console.log("Error at API/Property post");
    return new NextResponse("Error at API/Poroperty post", { status: 500 });
  }
}
