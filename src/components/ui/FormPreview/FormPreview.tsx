import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.scss';
import { MarkdownPreview } from '../MarkdownPreview/MarkdownPreview';
import { GitHubCard } from '../GithubCard/GithubCard';

interface FormPreviewProps {
  title: string;
  description: string;
  techStack: string;
  category: string;
  tags: string;
  github: string;
  lookingFor: string;
  experienceLevel: string;
  communication: string;
}

export const FormPreview: React.FC<FormPreviewProps> = ({
  title,
  description,
  techStack,
  category,
  tags,
  github,
  lookingFor,
  experienceLevel,
  communication,
}) => {
  return (
    <div className="formPreview">
      <h2 className="formPreview__heading">Превью проекта</h2>
      <div className="formPreview__grid">
        {title && (
          <div className="formPreview__item">
            <p>{title}</p>
          </div>
        )}

        {description && (
          <div className="formPreview__item formPreview__item--fullwidth">
            <h3 className='formPreview__itemTitle'>Описание проекта</h3>
            <MarkdownPreview content={description} />
          </div>
        )}

        {(category || techStack || tags) && <div className='fromPreviewThreeColumns'>
          {category && (
            <div className="formPreview__item">
              <h3 className='formPreview__itemTitle'>Категория</h3>
              <p>{category}</p>
            </div>
          )}
          {techStack && (
            <div className="formPreview__item">
              <h3 className='formPreview__itemTitle'>Стек технологий</h3>
              <p>{techStack}</p>
            </div>
          )}
          {tags && (
            <div className="formPreview__item">
              <h3 className='formPreview__itemTitle'>Теги</h3>
              <p>{tags}</p>
            </div>
          )}
        </div>}
        {github && (
          <GitHubCard url={github}/>
        )}
        {lookingFor && (
          <div className="formPreview__item">
            <h3 className='formPreview__itemTitle'>Кого ищете в команду?</h3>
            <p>{lookingFor}</p>
          </div>
        )}

        {experienceLevel && (
          <div className="formPreview__item">
            <h3 className='formPreview__itemTitle'>Уровень опыта</h3>
            <p>{experienceLevel}</p>
          </div>
        )}

        {communication && (
          <div className="formPreview__item">
            <h3 className='formPreview__itemTitle'>Способ связи</h3>
            <p>{communication}</p>
          </div>
        )}
      </div>
    </div>
  );
};
