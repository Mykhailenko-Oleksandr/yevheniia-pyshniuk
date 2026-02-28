import { cookies } from "next/headers";
import { nextServer } from "./api";
import { User } from "@/types/user";

export async function getMe() {
  const cookieStore = await cookies();

  const res = await nextServer.get<User>("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res.data;
}
