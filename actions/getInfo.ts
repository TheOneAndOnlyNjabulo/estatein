import prisma from "@/lib/prismadb";

export const getInfoById = async (id: string | null) => {
  try {
    if (id) {
      const info = await prisma.additionalFees.findMany({
        where: {
          propertyId: id,
        },
      });
      if (!info) return null;
      return info;
    }

    if (!id) return null;
  } catch (error: any) {
    throw new Error(error);
  }
};
