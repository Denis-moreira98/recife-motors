import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface HeroProps {
   heading: string;
   buttonUrl: string;
   buttonTitle: string;
   banner: string;
   icon?: ReactNode;
}

export function Hero({
   heading,
   banner,
   buttonTitle,
   buttonUrl,
   icon,
}: HeroProps) {
   return (
      <main className={styles.main}>
         <div className={styles.containerHero}>
            <h1 className={styles.title}>{heading}</h1>

            <a href={buttonUrl} target="_blank" className={styles.link}>
               {icon}
               {buttonTitle}
            </a>
         </div>
         <div className={styles.contentBanner}>
            <Image
               alt={heading}
               src={banner}
               quality={100}
               priority={true}
               fill={true}
               className={styles.banner}
               sizes="(max-width: 480) 100vw, (max-width: 1024px) 75v, 50vw"
            />
         </div>
      </main>
   );
}
