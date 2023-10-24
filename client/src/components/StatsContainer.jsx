import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import StatItem from './statItem';

const StatsContainer = () => {
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling className='text-yellow-500 m-auto' />,
      color: 'text-yellow-500',
      border: 'border-yellow-500',
      bcg: 'bg-yellow-100',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck className='text-primary-500 m-auto' />,
      color: 'text-primary-500',
      border: 'border-primary-500',
      bcg: 'bg-primary-100',
    },
    {
      title: 'pending applications',
      count: stats.declined || 0,
      icon: <FaBug className='text-red-400 m-auto' />,
      color: 'text-red-400',
      border: 'border-red-400',
      bcg: 'bg-red-100',
    },
  ];
  return (
    <section className='grid gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-4'>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </section>
  );
};
export default StatsContainer;
