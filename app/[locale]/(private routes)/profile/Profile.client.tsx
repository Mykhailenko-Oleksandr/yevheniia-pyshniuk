"use client";

import { User } from "@/types/user";
import css from "./Profile.module.css";

interface ProfileClientProps {
  user: User;
}

export default function ProfileClient({ user }: ProfileClientProps) {
  console.log(user);
  return <></>;
}
