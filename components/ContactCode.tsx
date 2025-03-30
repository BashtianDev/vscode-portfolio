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
      const worker = process.env.WORKER_URL ?? "https://example.com"; // Evita el error de variable vacía.
      const response = await fetch(worker, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Mensaje enviado correctamente.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' });
      }
    } catch (error: unknown) {
      let errorMessage = 'Error inesperado al enviar el mensaje. Por favor, inténtalo más tarde.';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setStatus({ 
        type: 'error', 
        message: errorMessage 
      });
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
      <div className={styles.contactForm}>
        <p className={styles.line}>
          <span className={styles.className}>.formulario_de_contacto</span> &#123;
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <p className={styles.line}>
              <span className={styles.label}>&nbsp;&nbsp;&nbsp;nombre:&nbsp;</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className={styles.input}
              />;
            </p>
            <p className={styles.line}>
              <span className={styles.label}>&nbsp;&nbsp;&nbsp;email:&nbsp;</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className={styles.input}
              />;
            </p>
            <p className={styles.line}>
              <span className={styles.label}>&nbsp;&nbsp;&nbsp;asunto:&nbsp;</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                className={styles.input}
              />;
            </p>
          </div>
          <p className={styles.line}>
            &nbsp;&nbsp;&nbsp;mensaje: </p><p><textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              required
              className={styles.textarea}
            />
          </p>

          {status.message && (
            <p className={`${styles.line} ${styles.status} ${styles[status.type]}`}>
              &nbsp;&nbsp;&nbsp;{status.message};
            </p>
          )}
          <p className={styles.line}>
            <button type="submit" disabled={isLoading} className={styles.submitButton}>
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </p>
          <p className={styles.line}>&#125;</p>
        </form>
      </div>
      <div className={styles.socialLinks}>
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