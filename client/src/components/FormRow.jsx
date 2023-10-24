const FormRow = ({ type, name, defaultValue, handleChange, labelText }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='mt-4 block text-sm mb-2 tracking-widest capitalize'
      >
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue || ''}
        onChange={handleChange}
        className='w-full py-2 px-3 rounded bg-gray-50 border-gray-200 border-2 h-9'
        required
      />
    </div>
  );
};
export default FormRow;
