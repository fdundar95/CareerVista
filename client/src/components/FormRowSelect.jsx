const FormRowSelect = ({
  labelText,
  name,
  defaultValue = '',
  onChange,
  list,
}) => {
  return (
    <div className='mb-0'>
      <label
        htmlFor={name}
        className='mt-4 block text-sm mb-2 tracking-widest capitalize'
      >
        {labelText || name}
      </label>
      <select
        name={name}
        defaultValue={defaultValue}
        id={name}
        onChange={onChange}
        className='w-full py-1 px-3 rounded bg-gray-50 border-solid border-2 border-gray-200 h-9 capitalize'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue} className='capitalize'>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
