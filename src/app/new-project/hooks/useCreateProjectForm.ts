'use client';

import { useCallback, useState } from 'react';

export const useCreateProjectForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    category: 'Web',
    tags: '',
    github: '',
    lookingFor: '',
    experienceLevel: 'any',
    communication: '',
  });

  const [previewImage, setPreviewImage] = useState<string | undefined>();
  const [dragActive, setDragActive] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Project submitted:', formData);
      // TODO: Добавить валидацию и API-запрос
    },
    [formData]
  );

  const handleInputFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>, entering: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(entering);
  }, []);

  return {
    formData,
    previewImage,
    dragActive,
    handleChange,
    handleSubmit,
    handleInputFileChange,
    handleDrop,
    handleDrag,
  };
};
