import { Submenu } from "@/components/home/submenu";
import { Hero } from "@/components/hero";
import { HomeProps } from "@/utils/home.type";
import { getDataHome, getDataSubMenu } from "@/utils/actions/get-data";
import { FaWhatsapp } from "react-icons/fa";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";
import { MenuProps } from "@/utils/menu.type";

export default async function Home() {
   const { object }: HomeProps = await getDataHome();
   const menu: MenuProps = await getDataSubMenu();

   // console.log(menu);

   return (
      <main>
         {menu.objects.length > 0 && <Submenu menu={menu} />}
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
