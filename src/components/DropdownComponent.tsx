"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export const DropdownComponent = () => {
  return (
    <Dropdown className='bg-black text-white'>
      <DropdownTrigger>
        <Button className='text-white' variant='bordered'>
          topics
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Static Actions'>
        <DropdownItem textValue='wallpaper' key='wallpaper'>
          <Link href={"/wallpaper"}>wallpaper</Link>
        </DropdownItem>
        <DropdownItem textValue='health' key='health'>
          <Link href={"/health"}>health</Link>
        </DropdownItem>
        <DropdownItem textValue='fitness' key='fitness'>
          <Link href={"/fitness"}>fitness</Link>
        </DropdownItem>
        <DropdownItem textValue='coding' key='coding'>
          <Link href={"/coding"}>coding</Link>
        </DropdownItem>
        <DropdownItem textValue='games' key='games'>
          <Link href={"/games"}>games</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
