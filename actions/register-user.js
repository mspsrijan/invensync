"use server";
import dbConnect from "@/lib/mongo-connect";
import { User } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registrationSchema = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export async function registerUserAction(formData) {
  const parsedData = registrationSchema.safeParse(Object.fromEntries(formData));

  if (!parsedData.success) {
    return { error: parsedData.error.format() };
  }

  const { firstName, lastName, email, password } = parsedData.data;

  try {
    await dbConnect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { error: "Email already registered." };
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    return { success: true };
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Server error. Please try again later." };
  }
}
