import React from 'react';
import ReactMarkdown from 'react-markdown';
import './styles.scss';

export const MarkdownPreview = ({ content }: { content: string }) => (
  <div className="markdownPreview">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);
