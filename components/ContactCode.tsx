import styles from '@/styles/ContactCode.module.css';
import { useState } from 'react';

const contactItems = [
  {
    social: 'website',
    link: 'alejandrocalvo.com',
    href: 'https://alejandrocalvo.com',
  },
  {
    social: 'email',
    link: 'contacto@alejandrocalvo.com',
    href: 'mailto:contacto@alejandrocalvo.com',
  },
  {
    social: 'github',
    link: 'BashtianDev',
    href: 'https://github.com/BashtianDev',
  },
  {
    social: 'twitter',
    link: '@jandrocalvo',
    href: 'https://www.twitter.com/@jandrocalvo',
  },
  {
    social: 'discord',
    link: 'bashtian_',
    href: 'https://discord.com/login',
  },
  {
    social: 'telegram',
    link: '@Bashtian10',
    href: 'https://t.me/Bashtian10',
  },

];

const ContactCode = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://email-worker.doctorbinario.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={styles.codeContainer}>
      <div className={styles.code}>
        <p className={styles.line}>
          <span className={styles.className}>.formulario_de_contacto</span> &#123;
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Asunto"
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className={styles.submitButton}>
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
          {status.message && (
            <p className={`${styles.status} ${styles[status.type]}`}>
              {status.message}
            </p>
          )}
        </form>
        <p className={styles.line}>&#125;</p>
      </div>
      <div className={styles.code}>
        <p className={styles.line}>
          <span className={styles.className}>.redes_sociales</span> &#123;
        </p>
        {contactItems.map((item, index) => (
          <p className={styles.line} key={index}>
            &nbsp;&nbsp;&nbsp;{item.social}:{' '}
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
            ;
          </p>
        ))}
        <p className={styles.line}>&#125;</p>
      </div>
    </div>
  );
};

export default ContactCode;
