"use server";
import prisma from "@/lib/prismadb";

export const getPropertyById = async (id: string) => {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id,
      },
    });

    if (!property) return null;

    return property;
  } catch (error: any) {
    throw new Error(error);
  }
};
