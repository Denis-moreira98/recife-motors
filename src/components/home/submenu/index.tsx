"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { MenuProps } from "@/utils/menu.type";

interface SubMenuProps {
   menu: MenuProps;
}

export function Submenu({ menu }: SubMenuProps) {
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
            Serviços
         </div>
         <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
            {menu.objects.map((item) => (
               <li key={item.slug}>
                  <Link href={`/post/${item.slug}`}>{item.title}</Link>
               </li>
            ))}

            <>
               <div className={styles.divClose}>
                  {isOpen && (
                     <button
                        onClick={toggleMenu}
                        className={styles.closeButton}
                     >
                        <X size={28} color="#EA1E3F" />
                     </button>
                  )}
               </div>
            </>
         </ul>
      </section>
   );
}
