import { useField } from 'formik';

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const error = meta.touched && meta.error;

  return (
    <>
      <label
        htmlFor={props.id || props.name}
        className='block text-gray-900 text-sm'
      >
        {label}
      </label>
      <input
        className={`form-input block ${error ? 'border-red-500' : ''}`}
        {...field}
        {...props}
      />
      {error ? (
        <div className='text-red-500 text-sm italic'>{error}</div>
      ) : null}
    </>
  );
};
