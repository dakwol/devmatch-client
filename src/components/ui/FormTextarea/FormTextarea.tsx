import React, {
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from 'react';
import './styles.scss';

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id?: string;
};

export const FormTextarea: FC<FormTextareaProps> = ({ label, id, ...props }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaId = id || props.name || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

  // Авто-расширение при вводе
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resize = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    resize(); // начальное
    textarea.addEventListener('input', resize);

    return () => {
      textarea.removeEventListener('input', resize);
    };
  }, []);

  return (
    <div className="formTextareaWrapper">
      <label htmlFor={textareaId}>{label}</label>
      <textarea
        ref={textareaRef}
        id={textareaId}
        className="formTextarea"
        {...props}
        // maxLength={2000}
      />
    </div>
  );
};
