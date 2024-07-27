import { createProperty } from "@/actions/createProperty";
import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const property = await createProperty(body);
    return NextResponse.json(property);
  } catch (error: any) {
    console.error("Error at API/Property post:", error);
    return new NextResponse("Error at API/Property post", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location") || "";
  const propertyType = searchParams.get("propertyType") || "";
  const priceRange = searchParams.get("priceRange") || "";
  const size = searchParams.get("size") || "";
  const buildYear = searchParams.get("buildYear") || "";
  const search = searchParams.get("search") || "";

  const where: any = {};

  if (location.trim()) {
    where.location = location;
  }
  if (propertyType.trim()) {
    where.type = propertyType;
  }
  if (search.trim()) {
    where.name = { contains: search, mode: "insensitive" };
  }
  if (priceRange.trim()) {
    const [minPrice, maxPrice] = priceRange
      .split("-")
      .map((val) => parseInt(val, 10) || 0);
    where.listingPrice = {
      gte: minPrice,
      lte: maxPrice,
    };
  }
  if (size.trim()) {
    const [minSize, maxSize] = size
      .split("-")
      .map((val) => parseInt(val, 10) || 0);
    where.area = {
      gte: minSize,
      lte: maxSize,
    };
  }
  if (buildYear.trim()) {
    const [minYear, maxYear] = buildYear
      .split("-")
      .map((val) => parseInt(val, 10));
    where.buildYear = {
      gte: minYear,
      lte: maxYear,
    };
  }

  try {
    const properties = await prismadb.property.findMany({
      where,
    });
    return NextResponse.json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
