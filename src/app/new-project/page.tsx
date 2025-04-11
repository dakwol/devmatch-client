'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import LayoutSidebar from '../../features/LayoutSidebar/LayoutSidebar';
import {
  TitleField,
  DescriptionField,
  TechStackField,
  CategoryField,
  TagsField,
  GithubField,
  LookingForField,
  ExperienceLevelField,
  CommunicationField,
  ImageField,
} from './formFields';
import { FormPreview } from '../../components/ui/FormPreview/FormPreview';
import './styles.scss'

const CreateProjectPage = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const [previewImage, setPreviewImage] = React.useState<string | null>(null);
  const [dragActive, setDragActive] = React.useState(false);

  // Watch all form values for preview
  const title = watch('title');
  const description = watch('description');
  const techStack = watch('techStack');
  const category = watch('category');
  const tags = watch('tags');
  const github = watch('github');
  const lookingFor = watch('lookingFor');
  const experienceLevel = watch('experienceLevel');
  const communication = watch('communication');

  const onSubmit = (data: any) => {
    console.log('🟢 Submitted:', data);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setValue('image', file);
    }
  };

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setValue('image', file);
    }
  };

  const handleDrag = (e: React.DragEvent, active: boolean) => {
    e.preventDefault();
    setDragActive(active);
  };

  return (
    <LayoutSidebar>
      <div className='newProjectContainer'>
        <div className="createProject">
          <h1 className="createProject__title">Создание проекта</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="createProject__form">
            <TitleField control={control} />
            <DescriptionField control={control} watch={watch} />
            <TechStackField control={control} />
            <CategoryField control={control} />
            <TagsField control={control} />
            <GithubField control={control} />
            <LookingForField control={control} />
            <ExperienceLevelField control={control} />
            <CommunicationField control={control} />
            <ImageField
              setValue={setValue}
              previewImage={previewImage}
              dragActive={dragActive}
              handleDrop={handleDrop}
              handleDrag={handleDrag}
              handleInputFileChange={handleInputFileChange}
            />
            <button type="submit" className="submitButton">
              Создать проект
            </button>
          </form>

        </div>
        {/* Рендерим предварительный просмотр в виде документа */}
        <FormPreview
          title={title}
          description={description}
          techStack={techStack}
          category={category}
          tags={tags}
          github={github}
          lookingFor={lookingFor}
          experienceLevel={experienceLevel}
          communication={communication}
        />
      </div>
    </LayoutSidebar>
  );
};

export default CreateProjectPage;
