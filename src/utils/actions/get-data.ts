export async function getDataHome() {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API}/objects/665d0305b6cce150ff098de3?read_key=${process.env.READ_KEY}&props=slug,title,metadata`,
         { next: { revalidate: 120 } }
      );

      if (!res.ok) {
         throw new Error("Failed to fetch data!");
      }

      return res.json();
   } catch (error: any) {
      throw new Error(error);
   }
}

export async function getDataSubMenu() {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&props=slug,title,`,
         { next: { revalidate: 120 } }
      );

      if (!res.ok) {
         throw new Error("Failed to fetch data!");
      }

      return res.json();
   } catch (error: any) {
      throw new Error("Failed to get data", error);
   }
}
