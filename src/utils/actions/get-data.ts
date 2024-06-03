export async function getDataHome() {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API}/objects/665d0305b6cce150ff098de3?read_key=${process.env.READ_KEY}&props=slug,title,metadata`
      );

      if (!res.ok) {
         throw new Error("Failed to fetch data!");
      }

      return res.json();
   } catch (error: any) {
      throw new Error(error);
   }
}
