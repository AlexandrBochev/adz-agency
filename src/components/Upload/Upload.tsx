import { UploadProps } from "../../models/models"

const Upload = ({ isValid, onChange, fileName }: UploadProps) => {
  return (
    <div className='relative mb-[3.125rem]'>
      <div className='flex'>
        <input className='hidden' type="file" id="file" accept='image/*' onChange={ onChange } />
        <label
          className={`
            min-w-[5.1875rem] h-[3.375rem] flex items-center justify-center rounded-l
            ${!isValid ? 'border-2 border-red' : 'border border-black'}
          `}
          htmlFor='file'
        >
          Upload
        </label>
        <label
          className={`
            w-full h-[3.375rem] flex items-center pl-4 rounded-r
            ${fileName || !isValid ? 'text-black' : 'text-gray'}
            ${!isValid ? 'border-y-2 border-r-2 border-red' : 'border-y border-r border-light-gray'}
          `}
          htmlFor='file'
        >
          { fileName ? fileName.slice(0, 25) : 'Upload your photo' }
        </label>
      </div>
      {!isValid &&
        <span className='absolute -bottom-5 left-0 text-xs ml-4 text-red'>
          File size should be less than 5mb and file type should be .jpg, .jpeg
        </span>
      }
    </div>
  )
}

export { Upload }