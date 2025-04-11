import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.scss';
import { MarkdownPreview } from '../MarkdownPreview/MarkdownPreview';

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
            <h3>Название проекта</h3>
            <p>{title}</p>
          </div>
        )}

        {description && (
          <div className="formPreview__item formPreview__item--fullwidth">
            <h3>Описание проекта</h3>
            <MarkdownPreview content={description}/>
          </div>
        )}

        {techStack && (
          <div className="formPreview__item">
            <h3>Стек технологий</h3>
            <p>{techStack}</p>
          </div>
        )}

        {category && (
          <div className="formPreview__item">
            <h3>Категория</h3>
            <p>{category}</p>
          </div>
        )}

        {tags && (
          <div className="formPreview__item">
            <h3>Теги</h3>
            <p>{tags}</p>
          </div>
        )}

        {github && (
          <div className="formPreview__item">
            <h3>Ссылка на GitHub</h3>
            <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
          </div>
        )}

        {lookingFor && (
          <div className="formPreview__item">
            <h3>Кого ищете в команду?</h3>
            <p>{lookingFor}</p>
          </div>
        )}

        {experienceLevel && (
          <div className="formPreview__item">
            <h3>Уровень опыта</h3>
            <p>{experienceLevel}</p>
          </div>
        )}

        {communication && (
          <div className="formPreview__item">
            <h3>Способ связи</h3>
            <p>{communication}</p>
          </div>
        )}
      </div>
    </div>
  );
};
