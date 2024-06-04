"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/recife-motors.png";

export function Header() {
   const [top, setTop] = useState(true);

   const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
   };

   useEffect(() => {
      window.addEventListener("scroll", scrollHandler);

      return () => window.removeEventListener("scroll", scrollHandler);
   }, [top]);

   return (
      <header
         className={`${styles.header} ${
            !top ? styles.fixed : styles.background
         }`}
      >
         <div className={styles.container}>
            <div className={styles.content}>
               <div className={styles.contentLogo}>
                  <Link href="/">
                     <Image
                        src={logo}
                        width={0}
                        height={0}
                        quality={100}
                        alt="Logo Recife Motors"
                     />
                  </Link>
               </div>
               <nav className={styles.nav}>
                  <Link href="/">Home</Link>
                  <Link href="/#about">Sobre</Link>
                  <Link href="/#contatos">Contato</Link>
               </nav>
            </div>
         </div>
      </header>
   );
}
