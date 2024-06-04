import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { Mail, Map, Phone, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Contact({ object }: HomeProps) {
   return (
      <section id="contatos" className={styles.contactContainer}>
         <section className={styles.section}>
            <h2 className={styles.title}>Contatos</h2>

            <div className={styles.content}>
               <div className={styles.item}>
                  <Mail size={28} color="#FFF" />
                  <div>
                     <strong>Email</strong>
                     <p>{object.metadata.contact.email}</p>
                  </div>
               </div>

               <div className={styles.item}>
                  <Phone size={28} color="#FFF" />
                  <div>
                     <strong>Telefone</strong>
                     <p>{object.metadata.contact.phone}</p>
                  </div>
               </div>

               <div className={styles.item}>
                  <Map size={28} color="#FFF" />
                  <div>
                     <strong>Endereço</strong>
                     <p>{object.metadata.contact.address}</p>
                  </div>
               </div>

               <div className={styles.item}>
                  <Clock size={28} color="#FFF" />
                  <div>
                     <strong>Horário</strong>
                     <p>{object.metadata.contact.time}</p>
                  </div>
               </div>
            </div>
         </section>

         <a
            href={object.metadata.cta_button.url}
            target="_blank"
            className={styles.link}
         >
            <FaWhatsapp size={24} color="#fff" />
            {object.metadata.cta_button.title}
         </a>
      </section>
   );
}
