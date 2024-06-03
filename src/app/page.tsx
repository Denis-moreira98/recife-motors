import { Submenu } from "@/components/home/submenu";
import { Hero } from "@/components/hero";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";
import { FaWhatsapp } from "react-icons/fa";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
   const { object }: HomeProps = await getDataHome();

   console.log();

   return (
      <main>
         <Submenu />
         <Hero
            heading={object.metadata.heading}
            buttonTitle={object.metadata.cta_button.title}
            buttonUrl={object.metadata.cta_button.url}
            banner={object.metadata.banner.url}
            icon={<FaWhatsapp size={24} color="#fff" />}
         />

         <Container>
            <Services object={object} />
            <Footer object={object} />
         </Container>
      </main>
   );
}
