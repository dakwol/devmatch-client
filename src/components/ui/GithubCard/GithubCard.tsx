import React, { useEffect, useState } from 'react';
import './styles.scss';

interface GitHubCardProps {
  url: string;
}

interface GitHubRepo {
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}

export const GitHubCard: React.FC<GitHubCardProps> = ({ url }) => {
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  console.log('env.VITE_GITHUB_TOKEN', process.env.NEXT_PUBLIC_GITHUB_TOKEN);
  useEffect(() => {
    const match = url.match(/github\.com\/([\w-]+\/[\w-]+)/);
    if (!match) return;

    const repoPath = match[1];

    fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setRepo(data))
      .catch((err) => console.error('Ошибка при загрузке репозитория:', err));
  }, [url]);

  if (!repo) return null;

  return (
    <div className="githubCard">
      <h3 className="githubCard__title">GitHub репозиторий</h3>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="githubCard__link">
        <div className="githubCard__content">
          <img src={repo.owner.avatar_url} alt={repo.owner.login} className="githubCard__avatar" />
          <div>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
            <span>⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
