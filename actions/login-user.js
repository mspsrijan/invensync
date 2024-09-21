"use server";
import { signIn } from "@/auth";
import dbConnect from "@/lib/mongo-connect";
import { User } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export async function loginUserAction(formData) {
  const parsedData = loginSchema.safeParse(Object.fromEntries(formData));

  if (!parsedData.success) {
    return { error: parsedData.error.format() };
  }

  const { email, password } = parsedData.data;

  try {
    await dbConnect();
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "No user found with this email." };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Incorrect password." };
    }

    const signInResponse = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (signInResponse?.error) {
      return { error: signInResponse.error };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: "Server error. Please try again later." };
  }
}
