import { getUser } from "@/app/utils/getUser";
import { Metadata } from "next";

interface UserPageProps {
  params: { username: string };
}

export async function generateMetadata({
  params: { username },
}: UserPageProps): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title:
      [user.first_name, user.last_name].filter(Boolean).join(" ") ||
      user.usernames + "images",
  };
}

export const Page = async (props: UserPageProps) => {
  const { username } = props.params;
  const user = await getUser(username);
  return (
    <section className='max-w-[960px] my-0 mx-auto p-10'>
      <h1>{user.usernames}</h1>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
    </section>
  );
};
