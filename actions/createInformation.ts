"use server";
import prisma from "@/lib/prismadb";
import { AdditionalFees, Property } from "@prisma/client";

export async function createInfo(data: AdditionalFees) {
  try {
    const info = await prisma.additionalFees.create({
      data,
    });
    return info;
  } catch (error) {
    console.error("Error creating property:", error);
    throw new Error("Error creating property");
  }
}
