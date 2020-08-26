import { useForm } from 'react-hook-form';
import UploadSVG from './svg/upload';
import { isEmail } from '../utils';

export function UploadResumeForm({ onCancel, onSuccess }) {
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    onSuccess(data);
  };

  const files = getValues('resume');
  const fileName = files && files[0] && files[0].name;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='p-4'>
        <label htmlFor='email' className='block text-gray-900 text-sm'>
          Email Address
        </label>
        <input
          name='email'
          type='text'
          placeholder='example@gmail.com'
          ref={register({
            validate: (value) => {
              if (!isEmail(value)) {
                return 'Invalid email';
              }
              return true;
            },
          })}
          className={`border border-gray-400 rounded-md block p-2 mt-2 focus:outline-none ${
            errors.email ? 'border-red-500' : 'focus:shadow-outline-blue'
          }`}
        />
        {errors.email && (
          <p className='text-red-500 text-sm italic'>{errors.email.message}</p>
        )}

        <label className='block text-gray-900 text-sm mt-4'>Resume</label>
        <label
          htmlFor='resume'
          className='text-white cursor-pointer bg-indigo-400 inline-block rounded-md py-1 px-4 mt-2'
        >
          <input
            id='resume'
            name='resume'
            type='file'
            ref={register({
              required: 'Resume is required',
              validate: (value) => {
                if (
                  value[0].size >
                  process.env.NEXT_PUBLIC_UPLOAD_RESUME_SIZE_IN_MEGABYTES *
                    1024 *
                    1024
                ) {
                  return `Maximum file size is ${process.env.NEXT_PUBLIC_UPLOAD_RESUME_SIZE_IN_MEGABYTES}mb`;
                }
                return true;
              },
            })}
          />
          Upload Resume
          <UploadSVG className='inline-block h-8 w-8 text-white ml-4' />
        </label>
        {fileName && <p className='text-sm text-black py-1'>{fileName}</p>}
        {errors.resume && (
          <p className='text-red-500 text-sm italic'>{errors.resume.message}</p>
        )}
      </div>
      <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full rounded-md px-4 py-2 bg-teal-400  font-medium text-white 
              hover:bg-teal-500 focus:outline-none transition ease-in-out duration-150'
          >
            Upload
          </button>
        </span>
        <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
          <button
            type='button'
            onClick={onCancel}
            className='w-full rounded-md px-4 py-2 bg-white font-medium text-gray-600 
              hover:text-gray-500 focus:outline-none transition ease-in-out duration-150'
          >
            Cancel
          </button>
        </span>
      </div>
    </form>
  );
}
