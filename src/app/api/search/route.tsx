import { UnsplashSearchResult } from "@/types/unsplash-response";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  if (!query) {
    return NextResponse.json(
      {
        error: "No query provided",
      },
      {
        status: 400,
      }
    );
  }
  const response = await fetch(
    `${process.env.BASE_URL}/search/photos?query=${query}&client_id=${process.env.ACCESS_KEY}`
  );

  const { results }: UnsplashSearchResult = await response.json();
  return NextResponse.json(results);
}
