import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/react_icon.svg" filename="inicio.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="sobre_mi.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contacto.css" path="/contact" />
      <Tab icon="/logos/js_icon.svg" filename="proyectos.js" path="/projects" />
      <Tab
        icon="/logos/json_icon.svg"
        filename="articles.json"
        path="/articles"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
    </div>
  );
};

export default Tabsbar;
