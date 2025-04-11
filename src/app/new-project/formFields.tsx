
import React from 'react';
import { Controller } from 'react-hook-form';

import { CATEGORY_OPTIONS, EXPERIENCE_LEVELS } from './config';
import { FormInput } from '../../components/ui/FormInput/FormInput';
import { FormTextarea } from '../../components/ui/FormTextarea/FormTextarea';
import { FormSelect } from '../../components/ui/FormSelect/FormSelect';
import { ImageUploader } from '../../components/ui/ImageUploader/ImageUploader';

export const TitleField = ({ control }) => (
  <Controller
    name="title"
    control={control}
    render={({ field }) => (
      <FormInput {...field} label="Название проекта" required />
    )}
  />
);

export const DescriptionField = ({ control, watch }) => {
  const description = watch('description');
  return (
    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <FormTextarea
          {...field}
          label="Краткое описание (Markdown)"
          required
          placeholder="### Что делает проект?\n- Поддержка Markdown\n- Используйте **жирный**, *курсив* и т.д."
        />
      )}
    />
  );
};

export const TechStackField = ({ control }) => (
  <Controller
    name="techStack"
    control={control}
    render={({ field }) => (
      <FormInput {...field} label="Стек технологий" placeholder="React, Node.js..." />
    )}
  />
);

export const CategoryField = ({ control }) => (
  <Controller
    name="category"
    control={control}
    render={({ field }) => (
      <FormSelect {...field} label="Категория" options={CATEGORY_OPTIONS} />
    )}
  />
);

export const TagsField = ({ control }) => (
  <Controller
    name="tags"
    control={control}
    render={({ field }) => (
      <FormInput {...field} label="Теги (через запятую)" />
    )}
  />
);

export const GithubField = ({ control }) => (
  <Controller
    name="github"
    control={control}
    render={({ field }) => (
      <FormInput {...field} type="url" label="Ссылка на GitHub" />
    )}
  />
);

export const LookingForField = ({ control }) => (
  <Controller
    name="lookingFor"
    control={control}
    render={({ field }) => (
      <FormTextarea {...field} label="Кого вы ищете в команду?" placeholder="Frontend, Backend, UX Designer..." />
    )}
  />
);

export const ExperienceLevelField = ({ control }) => (
  <Controller
    name="experienceLevel"
    control={control}
    render={({ field }) => (
      <FormSelect {...field} label="Уровень опыта" options={EXPERIENCE_LEVELS} />
    )}
  />
);

export const CommunicationField = ({ control }) => (
  <Controller
    name="communication"
    control={control}
    render={({ field }) => (
      <FormInput {...field} label="Предпочитаемый способ связи" placeholder="Telegram, Discord, Email..." />
    )}
  />
);

export const ImageField = ({ setValue, previewImage, dragActive, handleDrag, handleDrop, handleInputFileChange }) => (
  <ImageUploader
    dragActive={dragActive}
    handleDrag={handleDrag}
    handleDrop={(e) => {
      handleDrop(e);
      const file = e.dataTransfer.files[0];
      setValue('image', file);
    }}
    handleInputFileChange={(e) => {
      handleInputFileChange(e);
      const file = e.target.files[0];
      setValue('image', file);
    }}
    previewImage={previewImage}
  />
);
