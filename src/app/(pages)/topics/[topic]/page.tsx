import { UnsplashImage } from "@/types/unsplash-response";
import Image from "next/image";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Metadata } from "next";

interface TopicsPageProps {
  params: { topic: string };
  //   searchParams: { [search: string] };
}

// export const dynamicParams = false

// export const revalidate = 0;

export const generateMetadata = ({
  params: { topic },
}: TopicsPageProps): Metadata => {
  return {
    title: topic + " - " + "Image Gallery",
  };
};

export const generateStaticParams = () => {
  return ["health", "fitness", "coding", "games", "wallpaper"].map((topic) => ({
    topic,
  }));
};

export default async function Page(props: TopicsPageProps) {
  const { topic } = props.params;

  const res = await fetch(
    `${process.env.BASE_URL}/photos/random?query=${topic}&count=30&client_id=${process.env.ACCESS_KEY}`
  );

  const images: UnsplashImage[] = await res.json();

  return (
    <section className='max-w-[960px] my-0 mx-auto p-10'>
      <Card radius='lg' className='bg-yellow-500 mb-5'>
        <CardBody>
          <p>
            This page uses <strong> generateStaticParams </strong>
            to render and cache static pages at build time even though in URL we
            have dynamic parameter . Pages that are not included in
            generateStaticParams will be fetched and rendered at first access
            and then cached subsequent requests(this can be disabled) Every time
            you refreshes the page, you'll get a new image again
          </p>
        </CardBody>
      </Card>
      <h1 className='mb-5 text-2xl text-yellow-500 first-letter:uppercase'>
        {topic}
      </h1>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 justify-items-center'>
        {images.map((image) => (
          <Image
            className='object-cover rounded-lg m-1'
            src={image.urls.raw}
            alt={"Unsplash image"}
            height={0}
            width={0}
            style={{ width: "250px", height: "250px" }}
            key={image.urls.raw}
          />
        ))}
      </div>
    </section>
  );
}
