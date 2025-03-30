import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/ArticlesPage.module.css';
import { VscArrowRight } from 'react-icons/vsc'; // Asegúrate de instalar react-icons si no lo tienes

const ArticlesPage = () => {
  return (
    <div className={styles.layout}>
      {/* Título principal */}
      <h1 className={styles.pageTitle}>Electrónica</h1>

      {/* Contenedor de la imagen */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/electronica2.png" // Asegúrate de tener una imagen en la carpeta pública
          alt="Componentes electrónicos"
          width={800}
          height={400}
          className={styles.heroImage}
        />
      </div>

      <p className={styles.pageSubtitle}>
        Soy un aficionado a la reparación, programación y modificación de componentes electrónicos e informáticos.
      </p>

      <p className={styles.container}>
        Si tienes algún proyecto en el que te hayas quedado estancado o simplemente quieres comentarme algo, estaré encantado de estudiarlo sin compromiso. ¡Juntos podemos encontrar soluciones creativas!
      </p>

      <div className={styles.actionLinks}>
        <Link href="/contact" className={styles.primaryLink}>
          Contactar <VscArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ArticlesPage;