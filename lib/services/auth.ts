import { db } from "@/lib/db";

type User = {
  externalId: string;
  name: string;
  email: string;
  imageUrl: string | null;
};

export const createUser = async (values: User): Promise<any> => {
  const user = await db.user.findUnique({
    where: {
      email: values.email,
    },
  });

  if (user) {
    throw new Error("User already exists");
  }

  const newUser = await db.user.create({
    data: {
      externalId: values.externalId,
      name: values.name,
      email: values.email,
      imageUrl: values.imageUrl,
    },
  });
  return { message: "User created" };
};
