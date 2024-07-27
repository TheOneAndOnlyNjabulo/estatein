"use serve";
import prisma from "@/lib/prismadb";
import { Property } from "@prisma/client";

export async function getAllProperties() {
  try {
    const property = await prisma.property.findMany({
      where: {
        active: true,
      },
    });
    return property;
  } catch (error) {
    console.error("Error creating property:", error);
    throw new Error("Error creating property");
  }
}
