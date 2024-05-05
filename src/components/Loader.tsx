import { Spinner } from "@nextui-org/spinner";

export default function Loader() {
  return (
    <Spinner
      className='flex justify-center items-center'
      color='danger'
      size='lg'
    />
  );
}
