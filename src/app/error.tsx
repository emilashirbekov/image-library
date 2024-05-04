"use client";
import { Button } from "@nextui-org/button";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error(props: ErrorPageProps) {
  const { error, reset } = props;

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
