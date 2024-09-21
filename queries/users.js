import { replaceMongoIdInArray } from "@/lib/convert-data";
import dbConnect from "@/lib/mongo-connect";
import { User } from "@/models/user-model";

export async function getUsers() {
  try {
    await dbConnect();
    const users = await User.find({}).select("-password").lean();
    return replaceMongoIdInArray(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
