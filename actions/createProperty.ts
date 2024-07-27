import prisma from "@/lib/prismadb";
import { Property } from "@prisma/client";

export async function createProperty(data: Property) {
  try {
    const property = await prisma.property.create({
      data,
    });
    return property;
  } catch (error) {
    console.error("Error creating property:", error);
    throw new Error("Error creating property");
  }
}
