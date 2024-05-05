import React from "react";
import { Input } from "@nextui-org/input";

export default function SearchInput() {
  return (
    <Input
      id='search'
      name='search'
      className='mb-5'
      label='Search'
      isClearable
      radius='lg'
      classNames={{
        label: "text-default-700/50 dark:placeholder:text-white/60",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default-60",
          "!cursor-text",
        ],
      }}
      placeholder='E.g cats, dogs, ...'
    />
  );
}
