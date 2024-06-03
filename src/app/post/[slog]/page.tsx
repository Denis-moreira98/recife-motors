import styles from "./styles.module.scss";
import { getItemBySlog } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";

export default async function Post({
   params: { slug },
}: {
   params: { slug: string };
}) {
   const { objects }: PostProps = await getItemBySlog(slug);

   return (
      <div>
         <h1>teste- {slug}</h1>
      </div>
   );
}
