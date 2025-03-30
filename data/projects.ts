export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'VSCode Portfolio',
    description:
      'Mi propio portfolio web (fork de itsnitinr) con tecnología serverless en Next.js y CSS.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/BashtianDev/vscode-portfolio',
    slug: 'vscode-portfolio',
  }, 
  {
    title: 'Proyecto Espejo',
    description:
      'Espejo inteligente con Raspberry Pi con obtención de datos metereológicos y marítimos orientados a la pesca desde costa. (Repositorio privado).',
    logo: '/logos/raspberry_pi.svg',
    link: 'https://github.com/BashtianDev/proyecto-espejo',
    slug: 'proyecto-espejo',
  },
  {
    title: 'email-worker',
    description:
      'Un worker para Cloudflare escrito en JavaScript para realizar envíos de correos a través del servicio de Resend.com usando un endpoint JSON estándar.',
    logo: '/logos/js_icon.svg',
    link: 'https://github.com/BashtianDev/email-worker',
    slug: 'email-worker',
  },
];
