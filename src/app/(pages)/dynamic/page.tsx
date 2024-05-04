import { UnsplashImage } from "@/types/unsplash-response";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";

export const metadata: Metadata = {
  title: "Dynamic image fetching",
};

export const revalidate = 0;

const page = async () => {
  const res = await fetch(
    `${process.env.BASE_URL}/photos/random?client_id=${process.env.ACCESS_KEY}`,
    {
      //       cache: "no-cache",
      //       next: { revalidate: 0 },
    }
  );

  const image: UnsplashImage = await res.json();
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;
  return (
    <section className='max-w-[960px] my-0 mx-auto p-10'>
      <div className='flex flex-col items-center justify-center'>
        <Card radius='lg' className='bg-yellow-500 mb-5'>
          <CardBody>
            <p>
              This page <strong>fetches data dynamically </strong>
              Every time you refreshes the page, you'll get a new image again
            </p>
          </CardBody>
        </Card>
        <Image
          className='rounded-xl min-w-full h-full'
          alt='Unsplash image'
          src={image.urls.raw}
          width={width}
          height={height}
        />
        <span className='mt-3'>
          by
          <Link
            className='ml-3 font-bold text-yellow-500'
            href={"/users/" + image.user.username}
          >
            {image.user.username}
          </Link>
        </span>
      </div>
    </section>
  );
};

export default page;
