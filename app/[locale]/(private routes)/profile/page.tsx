import { getMe } from "@/lib/api/serverApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import ProfileClient from "./Profile.client";
import { User } from "@/types/user";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface MetadataProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.profile" });

  let user: User | undefined;

  try {
    user = await getMe();
  } catch {
    if (!user) {
      return { title: t("titleDefault") };
    }
  }

  return {
    title: `${user.firstName} ${user.lastName}`,
    description: `${t("description.0")} ${user.firstName} ${user.lastName} ${t("description.1")}`,
  };
}

export default async function Profile() {
  const queryClient = new QueryClient();
  let user: User | undefined;
  try {
    user = await getMe();
  } catch {
    if (!user) redirect("/");
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileClient user={user} />
    </HydrationBoundary>
  );
}
