const LoadingSpinner = () => {
  return (
    <section className='flex justify-center items-center'>
      <div
        className='mt-6 text-primary-500 inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
    </section>
  );
};
export default LoadingSpinner;
