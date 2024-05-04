import { UnsplashUser } from "@/types/unsplash-user";
import { notFound } from "next/navigation";

export async function getUser(username: string): Promise<UnsplashUser> {
  const res = await fetch(
    `${process.env.BASE_URL}/users/${username}?/client_id=${process.env.ACCESS_KEY}`
  );
  if (res.status === 404) notFound();
  return await res.json();
}
