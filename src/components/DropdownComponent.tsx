"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

export const DropdownComponent = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <Dropdown className='bg-black'>
      <DropdownTrigger>
        <Link href={`/topics/${selectedValue}`} className='text-white'>
          {selectedValue}
        </Link>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Single selection example'
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selectedKeys}
        //@ts-ignore
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem textValue='wallpaper' key='wallpaper'>
          <Link href={"/topics/wallpaper"}>wallpaper</Link>
        </DropdownItem>
        <DropdownItem textValue='health' key='health'>
          <Link href={"/topics/health"}>health</Link>
        </DropdownItem>
        <DropdownItem textValue='fitness' key='fitness'>
          <Link href={"/topics/fitness"}>fitness</Link>
        </DropdownItem>
        <DropdownItem textValue='coding' key='coding'>
          <Link href={"/topics/coding"}>coding</Link>
        </DropdownItem>
        <DropdownItem textValue='games' key='games'>
          <Link href={"/topics/games"}>games</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
