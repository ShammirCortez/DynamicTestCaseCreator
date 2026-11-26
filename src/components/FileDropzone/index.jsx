import React, { useRef, useState } from 'react';
import { IconUpload } from '@tabler/icons-react';

const MAX_SIZE_MB = 10;
const ALLOWED_EXTENSIONS = ['yml', 'yaml', 'txt', 'json'];

const FileDropzone = ({ onFileSelected }) => {
  //ref to the hidden <input> so button can click it
  const inputRef = useRef(null);

  //set true while file is being dragged over the box (HIGHLIGHT)
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');

  //checks the file, then passes it up to whatever component is using this one
  const handleFile = (file) => {
    if (!file) return;

    const extension = file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      setError(`.${extension} files aren't supported.`);
      return;
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`The file is bigger than ${MAX_SIZE_MB}MB.`);
      return;
    }

    setError('');
    setFileName(file.name);
    onFileSelected(file);
  };

  //------------------------------- click to choose --------------------------
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleInputChange = (event) => {
    handleFile(event.target.files[0]);
    //reset so picking same file still trigger onChange
    event.target.value = '';
  };

  //-------------------------- drag and drop ---------------------------
  const handleDragOver = (event) => {
    event.preventDefault(); //without this the browser wouldn't allow the drop :(
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    //only un-highlight when file actually LEAVES the box not when it moves over the icon or th text inside it
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDragging(false);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault(); //stop browser from opening file 
    handleFile(event.dataTransfer.files[0]);
  };

  return (
    <div className="mb-4 text-center">
      <input
        ref={inputRef}
        type="file"
        accept=".yml,.yaml,.txt,.json"
        className="hidden"
        onChange={handleInputChange}
      />

      <button
        type="button"
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        aria-label="Select file"
        className={`flex flex-col items-center justify-center w-full min-h-50 border-2 border-dashed rounded-lg cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e4ae48] ${
          isDragging
            ? 'border-[#e4ae48] bg-[#222224]'
            : 'border-[#444444] bg-[#1a1a1a] hover:border-[#e4ae48] hover:bg-[#222224]'
        }`}
      >
        <IconUpload size={40} strokeWidth={1.5} className="text-[#999999] mb-4" aria-hidden="true" />

        <p className="text-lg font-medium text-[#dddddd]">
          {isDragging ? 'Drop it here' : 'Drop file or click to select'}
        </p>
        <p className="text-sm text-[#999999]">
          {fileName ? `Selected: ${fileName}` : `Supports yml, txt, json (max ${MAX_SIZE_MB}MB)`}
        </p>
      </button>

      {error && <p className="text-sm text-[#e05252] mt-2">{error}</p>}
    </div>
  );
};

export default FileDropzone;