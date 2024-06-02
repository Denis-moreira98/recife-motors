"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

import { X, Menu } from "lucide-react";

export function Submenu() {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768) {
            setIsOpen(false);
         }
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
   }, []);

   function toggleMenu() {
      setIsOpen(!isOpen);
   }

   return (
      <section className={styles.submenu}>
         <div className={styles.submenuIcon} onClick={toggleMenu}>
            <Menu size={30} color="#121212" />
         </div>
         <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
            <li>
               <Link href="/">Troca de Oleo</Link>
            </li>
            <li>
               <Link href="/">Revisão</Link>
            </li>
            <li>
               <Link href="/">Alinhamento</Link>
            </li>
            <>
               <div className={styles.divClose}>
                  {isOpen && (
                     <button
                        onClick={toggleMenu}
                        className={styles.closeButton}
                     >
                        <X size={32} color="#EA1E3F" />
                     </button>
                  )}
               </div>
            </>
         </ul>
      </section>
   );
}
