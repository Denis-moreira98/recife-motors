import styles from "./styles.module.scss";

export function Footer() {
   return (
      <p className={styles.copyText}>
         Todos direitos reservados <strong>Recife Motors</strong>
         &copy; {""}
         {`${new Date().getFullYear()}`}
      </p>
   );
}
