import { useState } from 'react';
import { AreaChart, BarChart } from '../components';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);

  return (
    <section className='mt-16 text-center'>
      <h4>Monthly Applications</h4>
      <button
        type='button'
        onClick={() => setBarChart(!barChart)}
        className='border border-solid border-primary-500 p-1 text-sm rounded hover:shadow-lg hover:bg-primary-100'
      >
        {barChart ? 'Show Area Chart' : 'Show Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </section>
  );
};
export default ChartsContainer;
