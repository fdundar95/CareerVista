const StatItem = ({ count, title, icon, color, bcg, border }) => {
  return (
    <article
      className={`p-8 bg-white rounded border-b-4 border-solid ${border} `}
    >
      <header className='flex items-center justify-between'>
        <span className={`${color} block font-bold text-5xl `}>{count}</span>
        <span
          className={`w-16 h-14 ${bcg} rounded flex align-center content-center text-3xl `}
        >
          {icon}
        </span>
      </header>
      <h5 className='m-0 capitalize tracking-wider text-left mt-2'>{title}</h5>
    </article>
  );
};
export default StatItem;
