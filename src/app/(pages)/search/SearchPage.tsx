"use client";
import Loader from "@/components/Loader";
import SearchInput from "@/components/SearchInput";
import { UnsplashImage, UnsplashSearchResult } from "@/types/unsplash-response";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { FormEvent, useState } from "react";

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] =
    useState<boolean>(false);
  const [searchResultsError, setSearchResultsError] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("search")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchResultsError(false);
        setSearchResultsLoading(true);
        const res = await fetch("/api/search?query=" + query);
        const images: UnsplashSearchResult = await res.json();
        //@ts-expect-error
        setSearchResults(images);
      } catch (error) {
        console.log(error);
        setSearchResultsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  }

  return (
    <section className='max-w-[980px] my-0 mx-auto py-8'>
      <form onSubmit={handleSubmit} className='mb-5'>
        <SearchInput />
        <Button type='submit' color='warning'>
          Search
        </Button>
      </form>
      <div className='flex justify-center items-center'>
        {searchResultsLoading && <Loader />}
        {searchResultsError && (
          <p className='my-5'>Something went wrong, please try again</p>
        )}
        {searchResults?.length === 0 && (
          <p className='mb-5'>Not found, try a different query</p>
        )}
      </div>
      {searchResults && (
        <ul className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 justify-items-center'>
          {searchResults.map((image) => (
            <Image
              className='rounded-xl'
              src={image.urls.raw}
              alt={"Unsplash image"}
              key={image.urls.raw}
              style={{ width: "250px", height: "250px" }}
              height={0}
              width={0}
            />
          ))}
        </ul>
      )}
    </section>
  );
};
