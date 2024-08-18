import "server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export const getImages = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  if (!images) {
    throw new Error("No images found");
  }

  return images;
};

export const getImage = async (id: number) => {
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    throw new Error("No image found");
  }

  return image;
};
