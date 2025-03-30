import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contacto</h1>
      <p className={styles.pageSubtitle}>
        Siéntete libre de contactar conmigo para charlar sobre tu proyecto utilizando este formulario o cualquier otro medio mencionado a continuación.
      </p>
      <div className={styles.container}>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contacto' },
  };
}

export default ContactPage;
