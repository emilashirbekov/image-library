import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <Spinner
      className='flex justify-center items-center'
      color='danger'
      size='lg'
    />
  );
}
