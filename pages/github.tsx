import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Explora mi GitHub y descubre en qué he estado trabajando.
          Aquí iré publicando algunos de mis repositorios que muestran varios proyectos y habilidades.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositorios</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} seguidores</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Repositorios públicos actualmente:</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
            hideColorLegend={false}
            hideMonthLabels={false} // Asegúrate de que esto esté habilitado si quieres mostrar los meses
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            labels={{
              months: [
                "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"
              ],
              weekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
              totalCount: "{{count}} commits en el último año",
              legend: {
                less: "Menos",
                more: "Más"
              }
            }}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
  );
  const repos = await repoRes.json();

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 600,
  };
}

export default GithubPage;
