import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bashtian</h1>
        <div className={styles.subtitle}>Tech Enthusiast & Maker</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              ¡Hola! Soy un apasionado de la tecnología, la innovación y la ciberseguridad. Me encanta explorar el mundo de la
              electrónica y el software libre, siempre buscando soluciones creativas y eficientes.
            </p>
            <p className={styles.paragraph}>
              Disfruto desarrollando proyectos que combinan hardware y software, desde sistemas embebidos hasta aplicaciones personalizadas.
              Me motiva la posibilidad de optimizar procesos, mejorar experiencias y contribuir a la comunidad tecnológica con conocimiento
              y herramientas abiertas.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiencia</h2>
            <p className={styles.paragraph}>
              Administro servidores de hosting en Debian, utilizando exclusivamente software libre y gratuito.
              Además, colaboro en proyectos privados de desarrollo, aportando soluciones tanto en software como en hardware.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Proyectos</h2>
            <p className={styles.paragraph}>
              Actualmente estoy trabajando en varios proyectos, incluyendo un asistente de voz basado en Raspberry Pi, un espejo inteligente
              para pescadores y un dispositivo con pantalla táctil para monitoreo de hardware en PC. Pronto los pondré a disposición de la comunidad.
            </p>        
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Más Allá del Código</h2>
            <p className={styles.paragraph}>
              Cuando no estoy soldando circuitos o escribiendo código, me gusta salir en bicicleta, pescar o simplemente disfrutar
              de un buen rato con música y tecnología.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
