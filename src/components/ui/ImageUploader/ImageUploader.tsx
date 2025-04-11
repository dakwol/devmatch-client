import React, { ChangeEvent, DragEvent } from 'react';
import Image from 'next/image';
import './styles.scss';

interface ImageUploaderProps {
  dragActive: boolean;
  handleDrag: (e: DragEvent<HTMLDivElement>, entering: boolean) => void;
  handleDrop: (e: DragEvent<HTMLDivElement>) => void;
  handleInputFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  previewImage?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  dragActive,
  handleDrag,
  handleDrop,
  handleInputFileChange,
  previewImage,
}) => (
  <div
    className={`imageUpload${dragActive ? ' imageUpload--active' : ''}`}
    onDragOver={(e) => handleDrag(e, true)}
    onDragLeave={(e) => handleDrag(e, false)}
    onDrop={handleDrop}
  >
    <input type="file" accept="image/*" onChange={handleInputFileChange} className="imageUpload__input" />
    {previewImage ? (
      <Image src={previewImage} alt="Preview" width={100} height={100} className="imageUpload__preview" />
    ) : (
      <p className="imageUpload__placeholder">Перетащите или выберите изображение</p>
    )}
  </div>
);
